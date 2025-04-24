<template>
    <div class="navbar fixed z-50 bg-base-100 justify-between px-96">
        <div class="flex-none lg:hidden">
            <button class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </div>
        <div class="flex-1 px-2 mx-2 lg:flex-none">
            <a href="/" class="text-xl font-bold normal-case btn btn-ghost">Expimmo</a>
        </div>
        <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal p-0">
                <li><a href="/">Home</a></li>
                <li><a href="/about">Pricing</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    </div>
</template>