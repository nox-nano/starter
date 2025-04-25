<script setup>
const services = [
  {
    icon: `<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m19 10l-7-7l-9 9h2v7a2 2 0 0 0 2 2h6"/><path d="M9 21v-6a2 2 0 0 1 2-2h2c.387 0 .748.11 1.054.3M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H17m2 0v1m0-8v1"/></g>`,
    slot: 'default',
    link: '/pricing'
  },
  {
    icon: `<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m21 12l-9-9l-9 9h2v7a2 2 0 0 0 2 2h4.7"/><path d="M9 21v-6a2 2 0 0 1 2-2h2m2 5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m5.2 2.2L22 22"/></g>`,
    slot: 'second',
    link: '/pricing'
  },
  {
    icon: `<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m21 12l-9-9l-9 9h2v7a2 2 0 0 0 2 2h8"/><path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 1.857 1.257M19 16v3m0 3v.01"/></g>`,
    slot: 'third',
    link: '/contact'
  }
]
</script>
<template>
  <div>
    <div class="max-w-xl mx-auto py-12">
      <h1 class="text-4xl font-bold text-center mb-6">Nos Services</h1>
      <div v-for="(service, index) in services" :key="index" 
           class="collapse collapse-plus bg-base-100 border border-base-300 mb-2">
        <input type="radio" name="my-accordion-3" :checked="index === 0" />
        <div class="collapse-title font-semibold text-2xl">
          <svg class="inline mr-3" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <g v-html="service.icon"></g>
          </svg>
          <slot :name="`service-${service.slot}`" mdc-unwrap="p" />
        </div>
        <div class="collapse-content prose prose-lg">
          <slot :name="`serviceInfo-${service.slot}`" />
          <NuxtLink :to="service.link" class="btn btn-dash hover:bg-white/30">
            <slot :name="`serviceLink-${service.slot}`" mdc-unwrap="p" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>