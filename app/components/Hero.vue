<template>
    <div
    class="hero min-h-screen top-0 left-0">
        <img class="min-h-screen w-full absolute" src="/background.jpeg" alt="expimmo" />
        <div class="hero-overlay"></div>
        <div class="hero-content text-center">
            <div class="max-w-md">
            <h1 class="mb-5 text-8xl text-accent-content font-bold">
                <slot name="companyName" mdc-unwrap="p" />
            </h1>
            <p v-if="$slots.companyText" class="mb-5 text-accent-content text-xl">
                <slot name="companyText" mdc-unwrap="p" />
            </p>
            <button class="btn btn-xl btn-accent"><slot name="companyLink" mdc-unwrap="p" /></button>
            </div>
        </div>
    </div>
</template>