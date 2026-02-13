export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  // Limpar credenciais
  const host = config.smtpHost.trim()
  const port = parseInt(config.smtpPort)
  const secure = config.smtpSecure
  const user = config.smtpUser.trim()
  const pass = config.smtpPass.trim().replace(/\s+/g, '')

  console.log('\n=== DIAGNÓSTICO SMTP ===')
  console.log('Host:', host)
  console.log('Port:', port)
  console.log('Secure:', secure)
  console.log('User:', user)
  console.log('Pass length:', pass.length)
  console.log('Pass (primeiros 4 chars):', pass.substring(0, 4) + '...')
  console.log('Pass (últimos 4 chars):', '...' + pass.substring(pass.length - 4))
  console.log('Pass contém espaços?', /\s/.test(pass))
  console.log('Pass é válido (16 chars)?', pass.length === 16)

  return {
    diagnostico: {
      host,
      port,
      secure,
      user,
      passLength: pass.length,
      passValida: pass.length === 16,
      passTemEspacos: /\s/.test(pass),
      configOK: host && user && pass && port && !isNaN(port),
    },
    instrucoes: {
      verificarConta: 'https://myaccount.google.com/security',
      gerarSenhaApp: 'https://myaccount.google.com/apppasswords',
      verificacao2Etapas: 'Deve estar ATIVADA',
      senhaCorreta: 'Deve ter exatos 16 caracteres sem espaços',
    }
  }
})
