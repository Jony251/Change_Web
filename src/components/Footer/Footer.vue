<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-title">
        Пути связи
      </div>
      <div class="contact-links">
        <a :href="telegramUrl" target="_blank" class="contact-link">
          <img src="../../assets/icons/telegram_icon.png" alt="Telegram" class="contact-icon" />
          <span>Telegram</span>
        </a>
        <a :href="whatsappUrl" target="_blank" class="contact-link">
          <img src="../../assets/icons/whatsapp_icon.png" alt="WhatsApp" class="contact-icon" />
          <span>WhatsApp</span>
        </a>
        <a :href="phoneUrl" class="contact-link">
          <img src="../../assets/icons/phone_icon.png" alt="Phone" class="contact-icon" />
          <span>Позвонить</span>
        </a>
        <!--TODO: Add facebook url-->
        <!--
        <a :href="facebookUrl" target="_blank" class="contact-link">
          <img src="../../assets/icons/facebook_icon.png" alt="Facebook" class="contact-icon" />
          <span>Facebook</span>
        </a>
        -->
      </div>
    </div>
  </footer>
</template>

<script setup>
import './Footer.css'

const telegramUrl = import.meta.env.VITE_URL_TELEGRAM
const whatsappUrl = import.meta.env.VITE_URL_WHATSAPP
const phoneUrl = import.meta.env.VITE_URL_PHONE_CALL
</script>
