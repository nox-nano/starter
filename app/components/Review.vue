<script setup>
const reviews = [1].map(i => ({
  title: `review-${i}-title`,
  author: `review-${i}-author`,
  content: `review-${i}-content`,
  icon: `<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m19 10l-7-7l-9 9h2v7a2 2 0 0 0 2 2h6"/><path d="M9 21v-6a2 2 0 0 1 2-2h2c.387 0 .748.11 1.054.3M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H17m2 0v1m0-8v1"/></g>`,
}))
</script>

<template>
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
            <h2 class="text-3xl font-extrabold text-base-content sm:text-4xl">
                Ils nous font confiance
            </h2>
            <div class="rating mt-3">
                <input type="radio" name="rating-1" class="mask mask-star select-none" aria-label="1 star" />
                <input type="radio" name="rating-1" class="mask mask-star select-none" aria-label="2 star" />
                <input type="radio" name="rating-1" class="mask mask-star select-none" aria-label="3 star" checked="checked"/>
            </div>
        </div>
        <div class="mt-12 grid gap-8 max-w-xl mx-auto">
            <div 
            v-for="(review, index) in reviews" :key="index" 
            class="card bg-accent shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div class="card-body ">
                    <h3 class="card-title text-lg font-medium text-accent-content">
                        <svg class="inline mr-3" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                          <g v-html="review.icon"></g>
                        </svg>
                        <slot :name="review.title" mdc-unwrap="p" />
                    </h3>
                    <p class="mt-4 text-lg font-semibold text-accent-content/70 border-l-4 border-accent-content/70 pl-4 ">
                        <slot :name="review.content" mdc-unwrap="p" />
                    </p>
                    <div class="card-actions justify-end mt-2">
                        <div class="text-base font-medium text-accent-content">
                            <slot :name="review.author" mdc-unwrap="p" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-10 flex flex-wrap gap-10 items-center justify-center px-3 md:px-0">
        <img class="w-32" src="/cae.png"></img>
        <img class="w-24" src="/cibex.jpg"></img>
        <img class="w-24" src="/abex.png"></img>
        <img class="w-24" src="/fbei.png"></img>
        <img class="w-24" src="/justice.jpg"></img>
    </div>
  </div>
</template>