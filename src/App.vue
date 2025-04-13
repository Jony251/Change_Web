<script setup>
import './assets/base.css'
import Header from './components/Header/Header.vue'
import Connect from './components/Connect/Connect.vue'
import Footer from './components/Footer/Footer.vue'
</script>

<template>
  <div class="app">
    <Header />
    <Connect />
    <Footer />
  </div>
</template>

<style scoped>
.app {
  width: 100%;
  min-height: 100vh;
  background-color: var(--bg-primary);
}
</style>
