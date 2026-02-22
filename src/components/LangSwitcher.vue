<template>
  <div class="lang-switcher">
    <button
      v-for="lang in languages"
      :key="lang.code"
      :class="['lang-btn', { active: currentLang === lang.code }]"
      @click="setLang(lang.code)"
    >
      {{ lang.label }}
    </button>
  </div>
</template>

<script setup>
import { useI18n } from '../i18n/useI18n.js'

const { currentLang, languages, setLang } = useI18n()
</script>

<style scoped>
.lang-switcher {
  display: flex;
  gap: 0.25rem;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  border-radius: 10px;
  padding: 0.25rem;
  border: 1px solid var(--border-light);
}

.lang-btn {
  padding: 0.35rem 0.7rem;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--text-tertiary);
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  letter-spacing: 0.02em;
}

.lang-btn:hover {
  color: var(--primary-600);
  background: var(--primary-100);
}

.lang-btn.active {
  background: var(--primary-500);
  color: var(--neutral-100);
}
</style>
