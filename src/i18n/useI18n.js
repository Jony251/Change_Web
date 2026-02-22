import { ref, computed } from 'vue'
import { translations } from './translations.js'

const currentLang = ref('ru')

export function useI18n() {
  const t = computed(() => translations[currentLang.value])

  const isRtl = computed(() => currentLang.value === 'he')

  const languages = [
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' },
    { code: 'he', label: 'עב' },
  ]

  function setLang(code) {
    currentLang.value = code
  }

  return { t, currentLang, isRtl, languages, setLang }
}
