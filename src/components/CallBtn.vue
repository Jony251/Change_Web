<template>
  <a :href="phoneUrl" class="call-button">
    <div class="ripple"></div>
    <div class="ripple"></div>
    <span class="button-text">Позвонить</span>
  </a>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(true)
const phoneUrl = import.meta.env.VITE_URL_PHONE_CALL
let lastScrollY = 0

const handleScroll = () => {
  const currentScrollY = window.scrollY
  isVisible.value = currentScrollY > lastScrollY || currentScrollY < 100
  lastScrollY = currentScrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.call-button {
  position: fixed;
  top: 2rem;
  left: 2rem;
  display: flex;
  align-items: center;
  padding: 0.8rem 1.5rem;
  background-color: var(--call-btn);
  color: var(--neutral-100);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px var(--call-btn-shadow);
  z-index: 1000;
  overflow: hidden;
}

.button-text {
  position: relative;
  z-index: 2;
  font-size: 1.1rem;
}

.ripple {
  position: absolute;
  border-radius: 50%;
  background: var(--neutral-100);
  transform: translate(-50%, -50%);
  pointer-events: none;
  animation: ripple 1s linear infinite;
  opacity: 0;
}

.ripple:nth-child(2) {
  animation-delay: 0.5s;
}

@keyframes ripple {
  0% {
    width: 0;
    height: 0;
    opacity: 0.5;
  }
  100% {
    width: 200%;
    height: 200%;
    opacity: 0;
  }
}

.call-button:hover {
  background-color: var(--call-btn-hover);
  transform: translateY(2px) scale(1.05);
  box-shadow: 0 6px 16px var(--call-btn-hover-shadow);
}

@media (max-width: 768px) {
  .call-button {
    top: -1rem;
    left: 1rem;
    padding: 0.6rem 1.2rem;
    border-radius: 25px 25px 25px 25px;
  }

  .button-text {
    font-size: 1rem;
  }
}
</style>