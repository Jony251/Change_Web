<template>
  <section class="how-section">
    <div class="how-container">
      <div class="how-header text-center">
        <h2 class="how-title">{{ t.howTitle }}</h2>
      </div>

      <div class="how-cards">
        <div class="how-card" v-for="(step, i) in steps" :key="i">
          <div class="how-card-number">{{ i + 1 }}</div>
          <div class="how-card-icon">{{ step.icon }}</div>
          <h3 class="how-card-title">{{ step.title }}</h3>
          <p class="how-card-text">{{ step.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '../i18n/useI18n.js'

const { t } = useI18n()

const steps = computed(() => [
  { icon: '🕒', title: t.value.howStep1Title, text: t.value.howStep1Text },
  { icon: '💰', title: t.value.howStep2Title, text: t.value.howStep2Text },
  { icon: '🔄', title: t.value.howStep3Title, text: t.value.howStep3Text },
])
</script>

<style scoped>
.how-section {
  padding: 6rem 1.5rem;
  background: var(--neutral-200);
}

.how-container {
  max-width: 1140px;
  margin: 0 auto;
}

.how-header {
  margin-bottom: 3.5rem;
}

.how-title {
  color: var(--text-primary);
  font-size: 2.25rem;
  font-weight: 700;
  text-align: center;
}

.how-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.how-card {
  position: relative;
  background: var(--neutral-100);
  border-radius: 20px;
  padding: 2.5rem 2rem 2rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid var(--border-light);
}

.how-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-xl);
  border-color: var(--primary-300);
}

.how-card-number {
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
  width: 32px;
  height: 32px;
  background: var(--primary-500);
  color: var(--neutral-100);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 700;
}

.how-card-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1;
}

.how-card-title {
  color: var(--primary-700);
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.how-card-text {
  color: var(--text-tertiary);
  font-size: 0.95rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .how-section {
    padding: 4rem 1rem;
  }

  .how-cards {
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 400px;
    margin: 0 auto;
  }

  .how-title {
    font-size: 1.75rem;
  }
}

@media (max-width: 480px) {
  .how-section {
    padding: 3rem 1rem;
  }

  .how-card {
    padding: 2rem 1.5rem 1.5rem;
    border-radius: 16px;
  }
}
</style>