import nodemailer from 'nodemailer'
import type { Transporter } from 'nodemailer'

interface EmailConfig {
  host: string
  port: number
  secure: boolean
  user: string
  pass: string
  from: string
}

interface SendEmailOptions {
  to: string
  replyTo?: string
  subject: string
  text: string
  html: string
}

/**
 * Cria e valida um transporter SMTP
 */
export async function createEmailTransporter(config: EmailConfig): Promise<Transporter> {
  // Limpar e validar configurações
  const cleanConfig = {
    host: config.host.trim(),
    port: config.port,
    secure: config.secure,
    user: config.user.trim(),
    pass: config.pass.trim().replace(/\s+/g, ''), // Remove TODOS os espaços
    from: config.from.trim(),
  }

  // Validar configurações
  if (!cleanConfig.host) {
    throw new Error('SMTP_HOST não configurado')
  }
  if (!cleanConfig.user) {
    throw new Error('SMTP_USER não configurado')
  }
  if (!cleanConfig.pass) {
    throw new Error('SMTP_PASS não configurado')
  }
  if (isNaN(cleanConfig.port)) {
    throw new Error('SMTP_PORT inválida')
  }

  // Criar transporter
  const transporter = nodemailer.createTransport({
    host: cleanConfig.host,
    port: cleanConfig.port,
    secure: cleanConfig.secure,
    auth: {
      user: cleanConfig.user,
      pass: cleanConfig.pass,
    },
  })

  // Verificar conexão
  try {
    await transporter.verify()
  } catch (error: any) {
    console.error('Falha na autenticação SMTP:', error.message)
    throw new Error(`Falha na autenticação SMTP: ${error.message}`)
  }

  return transporter
}

/**
 * Envia um email usando o transporter fornecido
 */
export async function sendEmail(
  transporter: Transporter,
  from: string,
  options: SendEmailOptions
): Promise<string> {
  const info = await transporter.sendMail({
    from: from.trim(),
    to: options.to.trim(),
    replyTo: options.replyTo?.trim(),
    subject: options.subject,
    text: options.text,
    html: options.html,
  })

  return info.messageId
}

/**
 * Formata um email de contato com template HTML
 */
export function formatContactEmail(data: {
  name: string
  email: string
  phone: string
  message: string
  formType?: string
}): { subject: string; text: string; html: string } {
  const { name, email, phone, message, formType } = data

  // Definir o assunto baseado no tipo de formulário
  const subject =
    formType === 'cliente'
      ? '🌱 Novo Lead - Cliente Interessado | InoveBIO'
      : formType === 'fornecedor'
      ? '🤝 Novo Lead - Fornecedor Interessado | InoveBIO'
      : '📬 Novo Contato do Site | InoveBIO'

  // Template HTML
  const html = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Novo Contato - InoveBIO</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1); overflow: hidden;">

          <!-- Header Verde -->
          <tr>
            <td style="background: linear-gradient(135deg, #006400 0%, #004d00 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold; letter-spacing: 0.5px;">
                🌱 InoveBIO
              </h1>
              <p style="margin: 8px 0 0 0; color: #FFA500; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                Novo Contato Recebido
              </p>
            </td>
          </tr>

          ${
            formType
              ? `
          <tr>
            <td style="padding: 20px 30px 0 30px;">
              <div style="display: inline-block; background-color: ${
                formType === 'cliente' ? '#006400' : '#FFA500'
              }; color: white; padding: 8px 20px; border-radius: 20px; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">
                ${formType === 'cliente' ? '👤 CLIENTE' : '🤝 FORNECEDOR'}
              </div>
            </td>
          </tr>
          `
              : ''
          }

          <!-- Conteúdo -->
          <tr>
            <td style="padding: 30px;">

              <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid #e0e0e0;">
                <p style="margin: 0 0 8px 0; color: #666; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                  Nome
                </p>
                <p style="margin: 0; color: #1a1a1a; font-size: 18px; font-weight: bold;">
                  ${name}
                </p>
              </div>

              <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid #e0e0e0;">
                <p style="margin: 0 0 8px 0; color: #666; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                  Email
                </p>
                <p style="margin: 0;">
                  <a href="mailto:${email}" style="color: #006400; font-size: 16px; text-decoration: none; font-weight: 500;">
                    ${email}
                  </a>
                </p>
              </div>

              <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid #e0e0e0;">
                <p style="margin: 0 0 8px 0; color: #666; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                  Telefone
                </p>
                <p style="margin: 0;">
                  <a href="tel:${phone}" style="color: #006400; font-size: 16px; text-decoration: none; font-weight: 500;">
                    ${phone}
                  </a>
                </p>
              </div>

              <div style="margin-bottom: 0;">
                <p style="margin: 0 0 12px 0; color: #666; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                  Mensagem
                </p>
                <div style="background-color: #f9f9f9; padding: 20px; border-radius: 12px; border-left: 4px solid #006400;">
                  <p style="margin: 0; color: #333; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                </div>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9f9f9; padding: 30px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0 0 8px 0; color: #666; font-size: 12px;">
                Recebido em ${new Date().toLocaleString('pt-BR', { dateStyle: 'long', timeStyle: 'short' })}
              </p>
              <p style="margin: 0; color: #999; font-size: 11px;">
                Este email foi gerado automaticamente pelo sistema de contato do site InoveBIO
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`

  // Email em texto puro (fallback)
  const text = `
NOVO CONTATO - INOVEBIO
${formType ? `Tipo: ${formType.toUpperCase()}` : ''}

Nome: ${name}
Email: ${email}
Telefone: ${phone}

Mensagem:
${message}

---
Recebido em: ${new Date().toLocaleString('pt-BR')}
`

  return { subject, text, html }
}
