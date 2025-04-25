<template>
    <div class="py-12 bg-base-100">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h1 class="text-3xl font-extrabold text-base-content sm:text-4xl">
            Documents Utiles
          </h1>
          <p class="mt-4 text-xl text-base-content/70">
            <slot name="description" />
          </p>
        </div>
  
        <div class="overflow-x-auto">
          <table class="table table-zebra">
            <thead>
              <tr>
                <th>Document</th>
                <th class="text-right">Télécharger</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in 10" :key="i" class="hover">
                <td class="font-medium">
                  <slot :name="`doc-title-${i}`" />
                </td>
                <td class="text-right">
                  <a :href="`doc-link-${i}`" 
                     class="btn btn-sm btn-ghost gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="none" stroke="currentColor" stroke-linecap="round" 
                            stroke-linejoin="round" stroke-width="2" 
                            d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" />
                    </svg>
                    <span class="hidden sm:inline">Télécharger</span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <div class="alert alert-info mt-8">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" 
                  stroke-linejoin="round" stroke-width="2" 
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <slot name="help-text" />
        </div>
      </div>
    </div>
  </template>