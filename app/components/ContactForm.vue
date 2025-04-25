<script setup>
const formData = ref({
  email: '',
  phone: '',
  question: ''
})

const loading = ref(false)
const success = ref(false)
const error = ref(null)

async function handleSubmit() {
  loading.value = true
  error.value = null
  
  try {
    await fetch('https://submit-form.com/Dx5eeioTY', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData.value),
    })
    success.value = true
    formData.value = { email: '', phone: '', question: '' }
  } catch (err) {
    error.value = "Une erreur s'est produite. Veuillez réessayer."
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="max-w-xl mx-auto p-6">
    <form @submit.prevent="handleSubmit" class="space-y-6 my-24">
      <!-- Email Field -->
      <div class="form-control">
        <label class="label" for="email">
          <span class="label-text">Email*</span>
        </label>
        <input
          id="email"
          v-model="formData.email"
          type="email"
          required
          placeholder="votre@email.com"
          class="input input-bordered w-full"
        />
      </div>

      <!-- Phone Field -->
      <div class="form-control">
        <label class="label" for="phone">
          <span class="label-text">Téléphone</span>
        </label>
        <input
          id="phone"
          v-model="formData.phone"
          type="tel"
          placeholder="0123456789"
          class="input input-bordered w-full"
        />
      </div>

      <!-- Question Field -->
      <div class="form-control">
        <label class="label" for="question">
          <span class="label-text">Question*</span>
        </label>
        <textarea
          id="question"
          v-model="formData.question"
          required
          placeholder="Votre question..."
          class="textarea textarea-bordered h-32 w-full"
        ></textarea>
      </div>

      <!-- Submit Button -->
      <div class="form-control">
        <button 
          type="submit" 
          class="btn btn-outline btn-primary-content"
          :disabled="loading"
        >
          <span v-if="loading">Envoi en cours...</span>
          <span v-else>Envoyer</span>
        </button>
      </div>

      <!-- Success Message -->
      <div v-if="success" class="alert alert-success">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Message envoyé avec succès!</span>
      </div>

      <!-- Error Message -->
      <div v-if="error" class="alert alert-error">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{{ error }}</span>
      </div>
    </form>
  </div>
</template>