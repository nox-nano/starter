<script setup>
import LogoCube from './LogoCube.vue'
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer footer-center p-4 bg-base-100 text-base-content">
    <aside class="grid grid-flow-row gap-4 sm:grid-flow-col">
      <p class="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M22 16.92v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        <slot name="phone">0475/ 46.49.08</slot>
      </p>
      <p class="flex items-center gap-2">
        <slot name="tva">TVA : BE 0784.509.946</slot>
      </p>
      <p>Copyright © {{ currentYear }} - Tous droits réservés par Exp.immo</p>
      <LogoCube class="w-12" />
    </aside>
  </footer>
</template>