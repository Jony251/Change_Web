<template>
  <header class="hero">
    <!-- Top nav bar with language switcher -->
    <nav class="hero-nav">
      <div class="hero-nav-inner">
        <span class="hero-nav-brand">Change</span>
        <LangSwitcher />
      </div>
    </nav>

    <!-- Decorative background -->
    <div class="hero-bg">
      <div class="hero-gradient"></div>
      <div class="hero-orb hero-orb-1"></div>
      <div class="hero-orb hero-orb-2"></div>
      <div class="hero-orb hero-orb-3"></div>
    </div>

    <div class="hero-content">
      <div class="hero-text">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          <span>{{ t.heroSubtitle }}</span>
        </div>
        <h1 class="hero-title">{{ t.heroTitle }}</h1>
        <p class="hero-description">{{ t.heroDescription }}</p>
        <a href="#connect" class="hero-cta">
          {{ t.heroCta }}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>

      <div class="hero-visual">
        <div class="currency-grid">
          <div class="currency-card" v-for="(curr, i) in currencies" :key="i">
            <span class="currency-symbol">{{ curr.symbol }}</span>
            <span class="currency-name">{{ curr.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '../../i18n/useI18n.js'
import LangSwitcher from '../LangSwitcher.vue'

const { t } = useI18n()

const currencies = computed(() => [
  { symbol: '₪', name: t.value.currShekel },
  { symbol: '₽', name: t.value.currRuble },
  { symbol: '$', name: t.value.currDollar },
  { symbol: '€', name: t.value.currEuro },
  { symbol: '₮', name: t.value.currUsdt },
])
</script>

<style scoped>
@import './Header.css';
</style>
