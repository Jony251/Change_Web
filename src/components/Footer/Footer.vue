<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <h2 class="owner-name">Михаил</h2>
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
        </div>
      </div>

      <div class="footer-right">
        <div class="currency-star">
          <div class="currency-circle top">Шекель</div>
          <div class="currency-circle left">Доллар</div>
          <div class="currency-circle right">Рубли</div>
          <div class="currency-circle bottom-left">Евро</div>
          <div class="currency-circle bottom-right">USDT</div>
          <div class="currency-circle center">Обмен</div>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p> 2025 © all rights reserved</p>
    </div>
  </footer>
</template>

<script setup>
import './Footer.css'

const telegramUrl = import.meta.env.VITE_URL_TELEGRAM
const whatsappUrl = import.meta.env.VITE_URL_WHATSAPP
const phoneUrl = import.meta.env.VITE_URL_PHONE_CALL
</script>
