<template>
  <section id="connect" class="connect">
    <div class="connect-container">
      <div class="connect-header text-center">
        <h2 class="connect-title">{{ t.connectTitle }}</h2>
      </div>
      <form @submit.prevent="handleSubmit" class="connect-form">
        <div class="form-group">
          <label for="name">{{ t.labelName }}</label>
          <input 
            type="text" 
            id="name" 
            v-model="formData.name"
            required
            class="form-input"
          />
        </div>

        <div class="form-group">
          <div class="form-row">
            <div class="form-row-main">
              <label for="phone">{{ t.labelPhone }}</label>
              <input 
                type="tel" 
                id="phone" 
                v-model="formData.phone"
                required
                class="form-input"
              />
            </div>
            <div class="form-row-side"> 
              <label for="phone_option">{{ t.labelPhoneOption }}</label>
              <select 
                id="phone_option"
                v-model="formData.phone_option" 
                class="form-select"
                required
              >
                <option value="TELEGRAM">{{ t.optionTelegram }}</option>
                <option value="WHATSAPP">{{ t.optionWhatsapp }}</option>
                <option value="PHONE">{{ t.optionPhone }}</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="city">{{ t.labelCity }}</label>
          <input 
            type="text" 
            id="city" 
            v-model="formData.city"
            required
            class="form-input"
          />
        </div>

        <div class="form-group">
          <div class="form-row">
            <div class="form-row-main">
              <label for="sellAmount">{{ t.labelSell }}</label>
              <input 
                type="number" 
                id="sellAmount" 
                v-model="formData.sellAmount"
                min="0"
                :placeholder="t.placeholderAmount"
                class="form-input"
              />
            </div>
            <div class="form-row-side">
              <label>{{ t.labelCurrency }}</label>
              <select 
                v-model="formData.sellCurrency" 
                class="form-select"
                required
              >
                <option value="">{{ t.labelCurrency }}</option>
                <option value="ILS">{{ t.currShekel }}</option>
                <option value="RUB">{{ t.currRuble }}</option>
                <option value="USD">{{ t.currDollar }}</option>
                <option value="EUR">{{ t.currEuro }}</option>
                <option value="USDT">{{ t.currUsdt }}</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="form-row">
            <div class="form-row-main">
              <label for="buyAmount">{{ t.labelBuy }}</label>
              <input 
                type="number" 
                id="buyAmount" 
                v-model="formData.buyAmount"
                min="0"
                :placeholder="t.placeholderAmount"
                class="form-input"
              />
            </div>
            <div class="form-row-side">
              <label>{{ t.labelCurrency }}</label>
              <select 
                v-model="formData.buyCurrency" 
                class="form-select"
                required
              >
                <option value="">{{ t.labelCurrency }}</option>
                <option value="ILS">{{ t.currShekel }}</option>
                <option value="RUB">{{ t.currRuble }}</option>
                <option value="USD">{{ t.currDollar }}</option>
                <option value="EUR">{{ t.currEuro }}</option>
                <option value="USDT">{{ t.currUsdt }}</option>
              </select>
            </div>
          </div>
        </div>

        <button type="submit" class="submit-button" :disabled="isSubmitting">
          {{ isSubmitting ? t.submitting : t.submitBtn }}
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
import { useI18n } from '../../i18n/useI18n.js'
import './Connect.css'

const { t } = useI18n()
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
      message: t.value.successMsg
    }

    // Reset form
    Object.keys(formData).forEach(key => formData[key] = '')
  } catch (error) {
    submitStatus.value = {
      type: 'error',
      message: t.value.errorMsg
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>
