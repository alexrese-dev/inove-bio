import { createEmailTransporter, sendEmail, formatContactEmail } from '../utils/email'

export default defineEventHandler(async (event) => {
  try {
    // Ler os dados do formulário
    const body = await readBody(event)
    const { name, email, phone, message, formType } = body

    // Validação básica
    if (!name || !email || !phone || !message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Todos os campos são obrigatórios',
      })
    }

    // Validação de email
    const emailRegex = /.+@.+\..+/
    if (!emailRegex.test(email)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Email inválido',
      })
    }

    // Obter configurações
    const config = useRuntimeConfig()

    // Se não houver configurações SMTP, modo desenvolvimento
    if (!config.smtpHost || !config.smtpUser || !config.smtpPass) {
      return {
        success: true,
        message: 'Formulário recebido com sucesso (modo desenvolvimento)',
      }
    }

    // Criar transporter
    const transporter = await createEmailTransporter({
      host: config.smtpHost,
      port: parseInt(config.smtpPort),
      secure: config.smtpSecure,
      user: config.smtpUser,
      pass: config.smtpPass,
      from: config.emailFrom,
    })

    // Formatar email
    const emailContent = formatContactEmail({
      name,
      email,
      phone,
      message,
      formType,
    })

    // Enviar email
    const messageId = await sendEmail(transporter, config.emailFrom, {
      to: config.emailTo,
      replyTo: email,
      subject: emailContent.subject,
      text: emailContent.text,
      html: emailContent.html,
    })

    return {
      success: true,
      message: 'Email enviado com sucesso!',
      id: messageId,
    }
  } catch (error: any) {
    console.error('❌ Erro ao enviar email:', error)

    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.message || 'Erro ao enviar email',
    })
  }
})
