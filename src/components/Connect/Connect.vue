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
          <div class="phone-container">
            <div class="phone-input-group">
              <label for="phone">Телефон</label>
              <input 
                type="tel" 
                id="phone" 
                v-model="formData.phone"
                required
                class="form-input"
              />
            </div>
            <div class="phone-option-group"> 
              <label for="phone_option">Связь через</label>
              <select 
                id="phone_option"
                v-model="formData.phone_option" 
                class="currency-select"
                required
              >
                <option value="TELEGRAM">Телеграм</option>
                <option value="WHATSAPP">Whatsapp</option>
                <option value="PHONE">Телефон</option>
              </select>
            </div>
          </div>
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
          <div class="amount-container">
            <div class="amount-input-group">
              <label for="sellAmount">Продать</label>
              <input 
                type="number" 
                id="sellAmount" 
                v-model="formData.sellAmount"
                min="0"
                placeholder="Сумма"
                class="form-input"
              />
            </div>
            <div class="amount-currency-group">
              <label>Валюта</label>
              <select 
                v-model="formData.sellCurrency" 
                class="currency-select"
                required
              >
                <option value="">Валюта</option>
                <option value="ILS">Шекели</option>
                <option value="RUB">Рубли</option>
                <option value="USD">Доллары</option>
                <option value="EUR">Евро</option>
                <option value="USDT">USDT</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="amount-container">
            <div class="amount-input-group">
              <label for="buyAmount">Купить</label>
              <input 
                type="number" 
                id="buyAmount" 
                v-model="formData.buyAmount"
                min="0"
                placeholder="Сумма"
                class="form-input"
              />
            </div>
            <div class="amount-currency-group">
              <label>Валюта</label>
              <select 
                v-model="formData.buyCurrency" 
                class="currency-select"
                required
              >
                <option value="">Валюта</option>
                <option value="ILS">Шекели</option>
                <option value="RUB">Рубли</option>
                <option value="USD">Доллары</option>
                <option value="EUR">Евро</option>
                <option value="USDT">USDT</option>
              </select>
            </div>
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
import './Connect.css'

const isSubmitting = ref(false)
const submitStatus = ref(null)

const formData = reactive({
  name: '',
  phone: '',
  phone_option: '',
  city: '',
  sellAmount: '',
  sellCurrency: '',
  buyAmount: '',
  buyCurrency: ''
})

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = null

  try {
    // await emailjs.send(
    //   import.meta.env.VITE_EMAILJS_SERVICE_ID,
    //   import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    //   {
    //     from_name: formData.name,
    //     phone: formData.phone,
    //     phone_option: formData.phone_option,
    //     city: formData.city,
    //     sell_amount: formData.sellAmount,
    //     sell_currency: formData.sellCurrency,
    //     buy_amount: formData.buyAmount,
    //     buy_currency: formData.buyCurrency,
    //   },
    //   import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    // )

    await fetch('https://fy6j7rep06.execute-api.eu-north-1.amazonaws.com/lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        phone: formData.phone,
        phone_option: formData.phone_option,
        city: formData.city,
        sellAmount: formData.sellAmount,
        sellCurrency: formData.sellCurrency,
        buyAmount: formData.buyAmount,
        buyCurrency: formData.buyCurrency,
      }),
    });

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
