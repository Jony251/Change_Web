<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-title">
        Пути связи
      </div>
      <div class="contact-links">
        <a :href="telegramUrl" target="_blank" class="contact-link">
          <img src="../assets/icons/telegram_icon.png" alt="Telegram" class="contact-icon" />
          <span>Telegram</span>
        </a>
        <a :href="whatsappUrl" target="_blank" class="contact-link">
          <img src="../assets/icons/whatsapp_icon.png" alt="WhatsApp" class="contact-icon" />
          <span>WhatsApp</span>
        </a>
        <a :href="phoneUrl" class="contact-link">
          <img src="../assets/icons/phone_icon.png" alt="Phone" class="contact-icon" />
          <span>Позвонить</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const telegramUrl = import.meta.env.VITE_URL_TELEGRAM
const whatsappUrl = import.meta.env.VITE_URL_WHATSAPP
const phoneUrl = import.meta.env.VITE_URL_PHONE_CALL
</script>

<style scoped>
.footer {
  background: var(--primary-400);
  color: var(--neutral-100);
  padding: 2rem 1rem;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.footer-title {
  text-shadow: 0 0 2px #000000;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}

.contact-links {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--neutral-100);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  background-color: var(--primary-500);
}

.contact-link:hover {
  background-color: var(--primary-600);
  transform: translateY(-2px);
}

.contact-icon {
  width: 24px;
  height: 24px;
  color: currentColor;
}

@media (max-width: 480px) {
  .contact-links {
    gap: 1rem;
  }

  .footer-title {
    font-size: 1.25rem;
  }

  .contact-link {
    padding: 0.4rem 0.8rem;
  }
}
</style>