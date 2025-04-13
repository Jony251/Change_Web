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
        </div>
      </div>

      <div class="footer-right">
        <div class="currency-star">
          <div class="currency-circle top">₪</div>
          <div class="currency-circle left">$</div>
          <div class="currency-circle right">₽</div>
          <div class="currency-circle bottom-left">€</div>
          <div class="currency-circle bottom-right">USDT</div>
          <div class="currency-circle center">Обмен</div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p> 2025 &copy; all rights reserved | <a href="https://www.linkedin.com/in/evgeny-nemchenko/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
    </div>
  </footer>
</template>

<script setup>
import './Footer.css'

const telegramUrl = import.meta.env.VITE_URL_TELEGRAM
const whatsappUrl = import.meta.env.VITE_URL_WHATSAPP
</script>
