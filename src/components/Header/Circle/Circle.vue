<template>
  <div 
    class="circle"
    :style="{
      width: size + 'px',
      height: size + 'px',
      backgroundColor: color,
      transform: 'translate(-50%, -50%)',
      opacity: opacity
    }"
  ></div>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: '#ff6b6b'
  },
  size: {
    type: Number,
    default: 300
  },
  opacity: {
    type: Number,
    default: 0.3
  }
})
</script>

<style scoped>
.circle {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
</style>