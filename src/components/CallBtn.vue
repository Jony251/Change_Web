<template>
  <a :href="phoneUrl" class="call-button" :class="{ 'button-visible': isVisible }">
    <div class="button-content">
      <div class="phone-icon">
        <img src="../assets/icons/phone.svg" alt="Phone" class="icon" />
      </div>
      <span class="button-text">Позвонить</span>
    </div>
    <div class="ripple-container">
      <div class="ripple"></div>
      <div class="ripple"></div>
    </div>
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
  background-color: #FF4D4D; /* Bright red color */
  color: white;
  border-radius: 50px;
  padding: 0.8rem 1.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(255, 77, 77, 0.3);
  transition: all 0.3s ease;
  z-index: 1000;
  overflow: hidden;
  transform: translateY(-100px);
  opacity: 0;
}

.button-visible {
  transform: translateY(0);
  opacity: 1;
}

.button-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.phone-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 24px;
  height: 24px;
  color: white;
}

.button-text {
  font-weight: 600;
  font-size: 1.1rem;
}

.ripple-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  animation: ripple 2s infinite;
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
  background-color: #FF3333; /* Darker red on hover */
  transform: translateY(2px) scale(1.05);
  box-shadow: 0 6px 16px rgba(255, 77, 77, 0.4);
}

@media (max-width: 768px) {
  .call-button {
    top: 1.5rem;
    left: 1.5rem;
    padding: 0.6rem 1.2rem;
  }

  .button-text {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .call-button {
    top: 1rem;
    left: 1rem;
  }
}
</style>