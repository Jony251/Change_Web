<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <h3 class="footer-name">Михаил</h3>
        <div class="contact-links">
          <a :href="phoneUrl" class="contact-link">
            <img src="../../assets/icons/phone_icon.png" alt="Phone" class="contact-icon" />
            <span>{{ t.optionPhone }}</span>
          </a>
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
        <div class="orbit-container">
          <!-- Center circle -->
          <div class="orbit-center">
            <span>{{ t.footerExchange }}</span>
          </div>
          <!-- Orbiting currency circles -->
          <div class="orbit-ring orbit-ring-1">
            <div class="orbit-item" v-for="(c, i) in orbitCurrencies" :key="i" :style="{ '--i': i, '--total': orbitCurrencies.length }">
              <span>{{ c }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>2025 &copy; {{ t.footerRights }} | {{ t.footerMadeBy }} <a href="https://www.linkedin.com/in/evgeny-nemchenko/" target="_blank" rel="noopener noreferrer">Evgeny</a></p>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from '../../i18n/useI18n.js'
import './Footer.css'

const { t } = useI18n()
const telegramUrl = import.meta.env.VITE_URL_TELEGRAM
const whatsappUrl = import.meta.env.VITE_URL_WHATSAPP
const phoneUrl = import.meta.env.VITE_URL_PHONE_CALL

const orbitCurrencies = ['₪', '$', '₽', '€', 'USDT']
</script>
