<script setup>
import './assets/base.css'
import { useI18n } from './i18n/useI18n.js'
import Header from './components/Header/Header.vue'
import MainInfo from './components/MainInfo.vue'
import Connect from './components/Connect/Connect.vue'
import Footer from './components/Footer/Footer.vue'

const { isRtl } = useI18n()
</script>

<template>
  <div class="app" :dir="isRtl ? 'rtl' : 'ltr'">
    <Header />
    <MainInfo />
    <Connect />
    <Footer />
  </div>
</template>

<style scoped>
.app {
  width: 100%;
  min-height: 100vh;
  background-color: var(--bg-primary);
  overflow-x: hidden;
}
</style>
