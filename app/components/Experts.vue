<script setup>
const experts = [1, 2].map(i => ({
  name: `expert-${i}-name`,
  title: `expert-${i}-title`,
  cert: `expert-${i}-cert`,
  role: `expert-${i}-role`,
  office: `expert-${i}-office`,
  phone: `expert-${i}-phone`,
  email: `expert-${i}-email`,
  image: i === 1 ? '/gerard.jpg' : '/ivan.jpg',
  // Add map links for each expert
  mapLink: i === 1 
    ? 'https://www.google.com/maps/search/?api=1&query=27+Drève+du+Triage+de+la+Bruyère+1420+Braine+l%27alleud'
    : 'https://www.google.com/maps/search/?api=1&query=49+rue+Joseph+Van+Hove+1950+Kraainem'
}))
</script>

<template>
  <div class="py-12 bg-base-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-extrabold text-base-content sm:text-4xl">
          Nos Experts
        </h2>
        <p class="mt-4 text-xl text-base-content/70">
          Une équipe d'experts certifiés à votre service
        </p>
      </div>
      
      <div class="grid grid-cols-2 gap-8 lg:max-w-5xl lg:mx-auto">
        <div v-for="(expert, index) in experts" :key="index" 
             class="card card-xl bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div class="card-body p-0">
            <figure class="w-full h-64">
              <img :src="expert.image" :alt="expert.name" class="w-full h-full object-cover object-top" />
            </figure>
            <div class="p-6 space-y-4">
              <div class="flex items-center gap-2">
                <h3 class="card-title text-xl">
                  <slot :name="expert.name" />
                </h3>
                <span class="hidden badge badge-primary-content badge-outline">
                  <slot :name="expert.title" />
                </span>
              </div>
              
              <div class="flex items-center gap-2">
                <!-- <svg class="w-10 text-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"/>
                    <path d="m9 12l2 2l4-4"/>
                  </g>
                </svg> -->
                <div class="prose">
                  <slot :name="expert.cert" />
                </div>
              </div>
              
              <div class="flex items-center text-sm gap-2">
                <a :href="expert.mapLink" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="link link-secondary-content flex items-center gap-2">
                  <svg class="w-6 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
                      <circle cx="12" cy="10" r="3"/>
                    </g>
                  </svg>
                  <slot :name="expert.office" />
                </a>
              </div>
              
              <div class="card-actions justify-end mt-4 gap-2">
                <a :href="`tel:${expert.phone}`" class="btn btn-dash gap-2">
                  <svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M22 16.92v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <slot :name="expert.phone" />
                </a>
                <a :href="`mailto:${expert.email}`" class="btn btn-outline gap-2">
                  <svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <path d="m22 6l-10 7L2 6"/>
                    </g>
                  </svg>
                  <slot :name="expert.email" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>