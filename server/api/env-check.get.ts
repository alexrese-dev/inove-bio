export default defineEventHandler(() => {
  const config = useRuntimeConfig()

  return {
    environment: process.env.NODE_ENV,
    variables: {
      smtpHost: !!config.smtpHost ? 'SET' : 'NOT SET',
      smtpPort: !!config.smtpPort ? 'SET' : 'NOT SET',
      smtpSecure: config.smtpSecure !== undefined ? 'SET' : 'NOT SET',
      smtpUser: !!config.smtpUser ? 'SET' : 'NOT SET',
      smtpPass: !!config.smtpPass ? 'SET' : 'NOT SET',
      emailFrom: !!config.emailFrom ? 'SET' : 'NOT SET',
      emailTo: !!config.emailTo ? 'SET' : 'NOT SET',
      siteUrl: !!config.public.siteUrl ? 'SET' : 'NOT SET',
    },
    values: {
      smtpHost: config.smtpHost || 'EMPTY',
      smtpPort: config.smtpPort || 'EMPTY',
      smtpSecure: config.smtpSecure,
      smtpUserLength: config.smtpUser?.length || 0,
      smtpPassLength: config.smtpPass?.length || 0,
      emailFrom: config.emailFrom || 'EMPTY',
      emailTo: config.emailTo || 'EMPTY',
      siteUrl: config.public.siteUrl || 'EMPTY',
    }
  }
})
