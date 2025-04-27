<template>
    <div
    class="hero min-h-screen top-0 left-0 mb-16">
        <img class="min-h-screen w-full object-cover absolute bg-base-100" src="/background.jpeg" alt="expimmo" />
        
        <div class="hero-content text-center">
            <div class="max-w-xl mt-16">
                <LogoCube class="hidden md:block w-48 mx-auto" />
                <h1 class="hidden md:block mb-5 text-5xl lg:text-8xl text-base-content font-bold">
                    <slot name="heroName" mdc-unwrap="p" />
                </h1>
                <div class="card card-border bg-white/20 text-base-content mx-auto mt-12">
                  <div class="card-body items-center text-center">
                    <h2 class="card-title text-3xl"><slot name="heroText" mdc-unwrap="p" /></h2>
                    <div class="badge badge-sm font-semibold md:badge-lg lg:badge-xl badge-soft ">
                        <svg class="w-6 hidden text-info" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Lucide by Lucide Contributors - https://github.com/lucide-icons/lucide/blob/main/LICENSE --><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01"/></g></svg>
                        <slot name="heroBadge" mdc-unwrap="p" />
                    </div>
                    <div class="badge badge-sm font-semibold md:badge-lg lg:badge-xl badge-soft py-6 md:py-0">
                        <svg class="w-6 hidden text-success" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Lucide by Lucide Contributors - https://github.com/lucide-icons/lucide/blob/main/LICENSE --><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"/><path d="m9 12l2 2l4-4"/></g></svg>
                        <slot name="heroBadge2" mdc-unwrap="p" />
                    </div>
                    <div class="badge badge-sm font-semibold md:badge-lg lg:badge-xl badge-soft">
                        <svg class="w-6 text-info" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Lucide by Lucide Contributors - https://github.com/lucide-icons/lucide/blob/main/LICENSE --><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></g></svg>
                        <slot name="heroBadge3" mdc-unwrap="p" />
                    </div>
                    <div class="card-actions justify-center md:justify-end my-3">
                        <NuxtLink to="/contact" 
                                  class="btn lg:btn-lg btn-outline hover:bg-white/30 mr-2">
                            <slot name="heroLink" mdc-unwrap="p" />
                        </NuxtLink>
                        <NuxtLink to="/pricing"
                                  class="btn lg:btn-lg btn-dash hover:bg-white/30">
                            <slot name="heroLink2" mdc-unwrap="p" />
                        </NuxtLink>
                    </div>
                  </div>
                </div>
                <svg class="mt-24 mx-auto animate-bounce" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Lucide by Lucide Contributors - https://github.com/lucide-icons/lucide/blob/main/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5H9m6 4v3h4l-7 7l-7-7h4V9z"/></svg>
            </div>
        </div>
    </div>
</template>

<script setup>
import LogoCube from './LogoCube.vue'
</script>