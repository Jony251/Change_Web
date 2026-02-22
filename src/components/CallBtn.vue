<template>
  <a :href="phoneUrl" class="call-button">
    <span class="call-pulse"></span>
    <svg class="call-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
    <span class="call-text">{{ t.callBtn }}</span>
  </a>
</template>

<script setup>
import { useI18n } from '../i18n/useI18n.js'

const { t } = useI18n()
const phoneUrl = import.meta.env.VITE_URL_PHONE_CALL
</script>

<style scoped>
.call-button {
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--call-btn);
  color: var(--neutral-100);
  border: none;
  border-radius: 100px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px var(--call-btn-shadow);
  z-index: 1000;
  overflow: hidden;
}

.call-button:hover {
  background: var(--call-btn-hover);
  color: var(--neutral-100);
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 6px 24px var(--call-btn-hover-shadow);
}

.call-icon {
  flex-shrink: 0;
}

.call-text {
  position: relative;
  z-index: 2;
}

.call-pulse {
  position: absolute;
  inset: 0;
  border-radius: 100px;
  border: 2px solid var(--call-btn);
  animation: call-pulse 2s ease-out infinite;
  pointer-events: none;
}

@keyframes call-pulse {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  100% {
    transform: scale(1.4);
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .call-button {
    bottom: 1.25rem;
    left: 1.25rem;
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
  }
}
</style>