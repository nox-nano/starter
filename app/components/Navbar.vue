<template>
    <div>
        <div class="navbar fixed z-50 bg-white/80 justify-evenly px-2 md:px-16">
        
           <div class="flex-1 px-2 mx-2 lg:flex-none">
               <LogoCube class="w-12 inline mr-3" />
               <a href="/" class="text-3xl font-bold normal-case align-middle">Expimmo</a>
           </div>
           <div class="flex-none hidden lg:block">
               <ul class="menu menu-lg menu-horizontal p-0 text-center font-bold">
                   <li><a href="/">Accueil</a></li>
                   <!-- <li><a href="/about">Nos Articles</a></li> -->
                   <li><a href="/contact">Contact</a></li>
                   <li><a href="/pricing">Tarifs</a></li>
                   <li><a href="/docs">Documents utiles</a></li>
                   <li class="hidden"><Theme/></li>
               </ul>
           </div>
           <details class="dropdown dropdown-end flex-none lg:hidden">
             <summary class="btn m-1">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                   </svg>
               </summary>
             <ul class="menu menu-xl dropdown-content bg-base-100 rounded-box z-1 w-52 p-2">
                   <li><a href="/">Acceuil</a></li>
                   <!-- <li><a href="/articles">Nos Articles</a></li> -->
                   <li><a href="/contact">Contact</a></li>
                   <li><a href="/pricing">Tarifs</a></li>
                   <li><a href="/docs">Documents utiles</a></li>
                   <li class="hidden"><Theme/></li>
             </ul>
           </details>
        </div>
        <!-- <div class="h-16"></div> -->
    </div>
    
</template>

<script setup>
import LogoCube from './LogoCube.vue'
</script>