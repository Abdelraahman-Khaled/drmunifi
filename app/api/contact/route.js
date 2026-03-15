import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, phone, subject, message, operation } = await request.json();

        // Configure transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: `"${name}" <${process.env.SMTP_USER}>`, // Recommended to use SMTP user as sender
            to: process.env.CONTACT_EMAIL,
            replyTo: email || '',
            subject: subject || 'New Contact Form Submission',
            text: `
                Name: ${name}
                Email: ${email || 'N/A'}
                Phone: ${phone || 'N/A'}
                ${operation ? `Operation: ${operation}` : ''}
                
                Message:
                ${message}
            `,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email || 'N/A'}</p>
                <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                ${operation ? `<p><strong>Operation:</strong> ${operation}</p>` : ''}
                <br/>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br/>')}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Nodemailer Error:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
