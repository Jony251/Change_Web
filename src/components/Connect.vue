
<template>
  <section class="connect">
    <div class="connect-container">
      <h2 class="connect-title">Свяжитесь с нами</h2>
      <form @submit.prevent="handleSubmit" class="connect-form">
        <div class="form-group">
          <label for="name">Ваше имя</label>
          <input 
            type="text" 
            id="name" 
            v-model="formData.name"
            required
            class="form-input"
          />
        </div>

        <div class="form-group">
          <label for="phone">Номер телефона</label>
          <input 
            type="tel" 
            id="phone" 
            v-model="formData.phone"
            required
            class="form-input"
          />
        </div>

        <div class="form-group">
          <label for="city">Город</label>
          <input 
            type="text" 
            id="city" 
            v-model="formData.city"
            required
            class="form-input"
          />
        </div>

        <div class="form-group">
          <label for="sellAmount">Продать шекели</label>
          <div class="amount-input">
            <input 
              type="number" 
              id="sellAmount" 
              v-model="formData.sellAmount"
              min="0"
              step="100"
              placeholder="Введите сумму"
              class="form-input"
            />
          </div>
        </div>

        <div class="form-group">
          <label for="buyAmount">Купить шекели</label>
          <div class="amount-input">
            <input 
              type="number" 
              id="buyAmount" 
              v-model="formData.buyAmount"
              min="0"
              step="100"
              placeholder="Введите сумму"
              class="form-input"
            />
          </div>
        </div>

        <button type="submit" class="submit-button" :disabled="isSubmitting">
          {{ isSubmitting ? 'Отправка...' : 'Отправить заявку' }}
        </button>

        <div v-if="submitStatus" :class="['status-message', submitStatus.type]">
          {{ submitStatus.message }}
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import emailjs from '@emailjs/browser'

const isSubmitting = ref(false)
const submitStatus = ref(null)

const formData = reactive({
  name: '',
  phone: '',
  city: '',
  sellAmount: '',
  buyAmount: ''
})

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = null

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        phone: formData.phone,
        city: formData.city,
        sell_amount: formData.sellAmount,
        buy_amount: formData.buyAmount,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )

    submitStatus.value = {
      type: 'success',
      message: 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.'
    }

    // Reset form
    Object.keys(formData).forEach(key => formData[key] = '')
  } catch (error) {
    submitStatus.value = {
      type: 'error',
      message: 'Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.'
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.connect {
  padding: 4rem 1rem;
  background-color: var(--primary-100);
}

.connect-container {
  max-width: 600px;
  margin: 0 auto;
}

.connect-title {
  text-align: center;
  color: var(--neutral-700);
  font-size: 2rem;
  margin-bottom: 2rem;
}

.connect-form {
  background: var(--neutral-100);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: var(--shadow-md);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--neutral-600);
  font-weight: 500;
}

.form-input {
  width: 95%;
  padding: 0.75rem;
  border: 2px solid var(--primary-200);
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--primary-400);
}

.amount-input {
  position: relative;
}

.currency {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--neutral-500);
}

.submit-button {
  width: 100%;
  padding: 1rem;
  background-color: var(--primary-400);
  color: var(--neutral-100);
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-button:hover:not(:disabled) {
  background-color: var(--primary-500);
  transform: translateY(-2px);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.status-message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 6px;
  text-align: center;
}

.status-message.success {
  background-color: var(--primary-100);
  color: var(--primary-700);
}

.status-message.error {
  background-color: #fee2e2;
  color: #dc2626;
}

@media (max-width: 480px) {
  .connect {
    padding: 2rem 1rem;
  }

  .connect-form {
    padding: 1.5rem;
  }

  .connect-title {
    font-size: 1.5rem;
  }
}
</style>