
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const upload = multer({ limits: { fileSize: 10 * 1024 * 1024 } });

app.get('/', (_, res)=> res.json({ ok: true, service: 'neodrive-backend' }));

app.post('/contact', upload.single('photo'), async (req, res)=>{
  try{
    const { name, email, phone, model, message } = req.body;
    // Transport SMTP (configurer .env)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587", 10),
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });
    const text = `Nouvelle demande:
- Nom: ${name}
- Email: ${email}
- Phone: ${phone}
- Modèle: ${model}
- Message: ${message}`;

    const mail = await transporter.sendMail({
      from: `NeoDrive <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
      subject: "Nouvelle demande de contact",
      text
    });

    res.json({ ok:true, id: mail.messageId });
  }catch(err){
    console.error(err);
    res.status(500).json({ ok:false, error: 'MAIL_ERROR' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=> console.log(`Backend running on :${PORT}`));
