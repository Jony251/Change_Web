<template>
  <header class="header">
    <div class="header-content">
      <div class="left-section">
        <div class="slogan-container">
          <h1 class="slogan-main">Мгновенный обмен</h1>
          <p class="slogan-location">Просто, быстро, надежно в любом городе Израиля</p>
        </div>
        <Circle class="shape-1" color="#279280" :size="450" :opacity="0.25" />
        <Circle class="shape-2" color="#80bab2" :size="350" :opacity="0.2" />
      </div>

      <div class="right-section">
        <div class="features-grid">
          <div class="feature-item">
            <span class="feature">Шекели</span>
            <Circle class="feature-bg" color="#b3d5d0" :size="150" :opacity="0.5" />
          </div>
          <div class="feature-item">
            <span class="feature">Рубли</span>
            <Circle class="feature-bg" color="#80bab2" :size="150" :opacity="0.5" />
          </div>
          <div class="feature-item">
            <span class="feature">Доллары</span>
            <Circle class="feature-bg" color="#b3d5d0" :size="150" :opacity="0.5" />
          </div>
          <div class="feature-item">
            <span class="feature">Евро</span>
            <Circle class="feature-bg" color="#80bab2" :size="150" :opacity="0.5" />
          </div>
          <div class="feature-item">
            <span class="feature">USDT</span>
            <Circle class="feature-bg" color="#b3d5d0" :size="150" :opacity="0.5" />
          </div>
        </div>
        <p class="payment-info">Наличные и безналичные в банках РФ</p>
      </div>
    </div>
  </header>
</template>

<script setup>
import Circle from './Circle/Circle.vue'
</script>

<style scoped>
@import './Header.css';
</style>
