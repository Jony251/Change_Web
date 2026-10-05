# Change: currency exchange landing page

A trilingual (Russian / English / Hebrew with right-to-left layout) landing page for an in-person currency exchange service in Israel, covering shekels, rubles, dollars, euros and USDT. Visitors see how the service works and leave a request through a form (name, phone, preferred messenger, city, what to sell and buy). The form posts the lead as JSON to a serverless endpoint on AWS API Gateway. Phone, Telegram and WhatsApp links come from environment variables, and the built site is hosted as a static website on Amazon S3.

**Live:** [money-site-bucket.s3-website.eu-central-1.amazonaws.com](http://money-site-bucket.s3-website.eu-central-1.amazonaws.com/)

<p align="center">
  <img src="https://github.com/user-attachments/assets/4d8c8ee1-d3b4-48ab-afb7-b9d231066818" alt="Hero: Multi-Currency Exchange headline, Submit Request button, currency bubbles and the RU / EN / Hebrew switcher" width="80%">
</p>

**Stack:** Vue 3 (`<script setup>`) · Vite 6 · a small home-made i18n composable (`src/i18n`) with RTL support · plain CSS · AWS S3 static hosting, with leads sent to AWS API Gateway.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build && npm run preview
```

Optional environment variables (in `.env`): `VITE_URL_PHONE_CALL`, `VITE_URL_TELEGRAM`, `VITE_URL_WHATSAPP`.

## Author

Evgeny Nemchenko, full-stack developer: [bluecat.cc](https://bluecat.cc) · [LinkedIn](https://www.linkedin.com/in/evgeny-nemchenko) · [nevgeny90@gmail.com](mailto:nevgeny90@gmail.com) · [GitHub @Jony251](https://github.com/Jony251)
