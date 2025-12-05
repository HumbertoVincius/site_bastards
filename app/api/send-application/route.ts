import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const location = formData.get('location') as string
    const position = formData.get('position') as string
    const experience = formData.get('experience') as string
    const message = formData.get('message') as string
    const resume = formData.get('resume') as File | null

    // Configurar transporter de email
    // Nota: Em produção, configure essas variáveis de ambiente
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true para 465, false para outras portas
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Preparar anexo do currículo se existir
    const attachments = []
    if (resume && resume.size > 0) {
      const buffer = Buffer.from(await resume.arrayBuffer())
      attachments.push({
        filename: resume.name,
        content: buffer,
      })
    }

    // Configurar email
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: 'humberto@bastards.com.br',
      subject: `Nova Candidatura - ${location} - ${position}`,
      html: `
        <h2>Nova Candidatura Recebida</h2>
        <p><strong>Local:</strong> ${location}</p>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Cargo Desejado:</strong> ${position}</p>
        <h3>Experiência Profissional:</h3>
        <p>${experience.replace(/\n/g, '<br>')}</p>
        ${message ? `<h3>Mensagem Adicional:</h3><p>${message.replace(/\n/g, '<br>')}</p>` : ''}
      `,
      attachments,
    }

    // Enviar email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { success: true, message: 'Candidatura enviada com sucesso!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    return NextResponse.json(
      { success: false, message: 'Erro ao enviar candidatura. Tente novamente.' },
      { status: 500 }
    )
  }
}

