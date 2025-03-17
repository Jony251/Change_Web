<script setup>
import './assets/base.css'
import Header from './components/Header.vue'
import MainInfo from './components/MainInfo.vue'
import Connect from './components/Connect.vue'
import Footer from './components/Footer.vue'
import CallBtn from './components/CallBtn.vue'
</script>

<template>
  <div class="app">
    <Header />
    <MainInfo />
    <Connect />
    <Footer />
    <CallBtn />
  </div>
</template>

<style scoped>
.app {
  width: 100%;
  min-height: 100vh;
  background-color: var(--bg-primary);
}
</style>
