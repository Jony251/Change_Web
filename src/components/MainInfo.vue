<template>
  <section class="main-info">
    <div class="info-container">
      <h2 class="info-title">Как это работает</h2>
      
      <div class="info-cards">
        <div class="info-card">
          <div class="card-icon">🕒</div>
          <h3 class="card-title">Удобное время</h3>
          <p class="card-text">Приеду к Вам в оговоренное время</p>
        </div>

        <div class="info-card">
          <div class="card-icon">💰</div>
          <h3 class="card-title">Купить шекели</h3>
          <p class="card-text">Перечислю рубли в любой банк РФ, приму шекели</p>
        </div>

        <div class="info-card">
          <div class="card-icon">🔄</div>
          <h3 class="card-title">Продать шекели</h3>
          <p class="card-text">Передам шекели, приму рубли в банке РФ</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.main-info {
  padding: 5rem 1rem;
  background: linear-gradient(135deg, var(--primary-200), var(--primary-100));
}

.info-container {
  max-width: 1200px;
  margin: 0 auto;
}

.info-title {
  text-align: center;
  color: var(--neutral-700);
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-weight: bold;
}

.info-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.info-card {
  background: var(--neutral-100);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: var(--shadow-md);
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.card-title {
  color: var(--primary-500);
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.card-text {
  color: var(--neutral-600);
  font-size: 1.1rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .main-info {
    padding: 3rem 1rem;
  }

  .info-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .info-cards {
    display: block;
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .info-title {
    font-size: 1.75rem;
  }

  .card-title {
    font-size: 1.25rem;
  }

  .card-text {
    font-size: 1rem;
  }

  .info-card {
    padding: 1.5rem;
    margin: 0 0 1rem 0;
  }
}
</style>