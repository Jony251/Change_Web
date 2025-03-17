<template>
  <header class="header">
    <div class="header-content">
      <h1 class="slogan">
        <div class="slogan-main">Мгновенный обмен рубль ↔ шекель</div>
        <div class="slogan-features">
          <span class="feature">Быстро</span>
          <span class="dot">•</span>
          <span class="feature">Просто</span>
          <span class="dot">•</span>
          <span class="feature">Надежно</span>
        </div>
        <div class="slogan-location">По всему Израилю</div>
      </h1>
    </div>
    <div class="abstract-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
.header {
  position: relative;
  max-width: 1200px;
  min-height: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, var(--primary-100), var(--primary-300));
}

.header-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 0 1rem;
}

.slogan {
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: var(--neutral-700);
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
  line-height: 1.4;
  max-width: 900px;
  margin: 0 auto;
}

.slogan-main {
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.slogan-features {
  font-size: 2rem;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.feature {
  color: var(--neutral-500);
  font-weight: 600;
}

.dot {
  color: var(--neutral-500);
  font-size: 1.2rem;
}

.slogan-location {
  font-size: 1.8rem;
  color: var(--neutral-500);
  font-style: italic;
  margin-top: 0.5rem;
}

.abstract-shapes {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  overflow: hidden;
}

.shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.6;
}

.shape-1 {
  width: 300px;
  height: 300px;
  background-color: var(--primary-200);
  top: -100px;
  right: -50px;
  transform: rotate(45deg);
}

.shape-2 {
  width: 200px;
  height: 200px;
  background-color: var(--primary-400);
  bottom: -50px;
  left: -50px;
  transform: rotate(30deg);
}

.shape-3 {
  width: 150px;
  height: 150px;
  background-color: var(--primary-300);
  top: 50%;
  left: 30%;
  transform: rotate(60deg);
}

@media (max-width: 768px) {
  .slogan-main {
    font-size: 2rem;
  }
  
  .slogan-features {
    font-size: 1.5rem;
    gap: 0.8rem;
  }
  
  .slogan-location {
    font-size: 1.3rem;
  }
  
  .header {
    min-height: 250px;
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .slogan-main {
    font-size: 1.6rem;
  }
  
  .slogan-features {
    font-size: 1.2rem;
    gap: 0.6rem;
  }
  
  .slogan-location {
    font-size: 1.1rem;
  }
  
  .header {
    min-height: 200px;
    padding: 1rem;
  }
}
</style>