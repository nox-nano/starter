<template>
  <svg :class="props.class" viewBox="0 0 52.91 52.91">
    <g fill="none" :stroke="props.color || 'currentColor'" stroke-width="2.5" stroke-miterlimit="10">
      <path d="M 8.021 14.654 L 28.061 26.214" />
      <path d="M 23.051 40.674 V 29.114 L 13.031 23.334 V 34.894 Z" class="animated-path" />
      <path d="M 18.041 26.214 V 31.994 L 23.051 34.884" class="animated-path" />
      <path d="M 43.081 40.674 V 23.324 L 33.061 29.104 V 46.454 L 28.051 49.344 L 8.021 37.784 V 14.654 L 28.051 3.094 L 48.081 14.654 V 37.784 L 43.081 40.674 L 38.071 37.784 V 26.224" class="animated-path" />
      <path d="M 28.051 49.344 L 28.061 26.214 L 48.091 14.654" class="animated-path" />
    </g>
  </svg>
</template>

<script setup>
const props = defineProps({
  class: {
    type: String,
    default: 'w-12'
  },
  color: {
    type: String,
    default: ''
  }
})
</script>

<style>
.animated-path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: dash 5s linear forwards;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
</style>