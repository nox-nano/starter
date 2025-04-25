<script setup>
import { ref, computed } from 'vue'

const formData = ref({
  type: '', // Selected service type
  answers: [], // User's answers for each step
  currentStep: 0,
  basePrice: 0
})

const services = [
  {
    id: 'etat-des-lieux-d-entree-d-un-appartement17',
    name: 'État des lieux d\'entrée d\'un appartement',
    base: 130
  },
  {
    id: 'etat-des-lieux-d-entree-d-une-maison26',
    name: 'État des lieux d\'entrée d\'une maison',
    base: 170
  },
  {
    id: 'etat-des-lieux-de-sortie-d-un-appartement30',
    name: 'État des lieux de sortie d\'un appartement',
    base: 115
  },
  {
    id: 'etat-des-lieux-de-sortie-maison63',
    name: 'État des lieux de sortie d\'une maison',
    base: 145
  },
  {
    id: 'expertise-en-valeur70',
    name: 'Expertise en valeur',
    base: 170
  }
]

// Complete questions data from JSON
const questions = {
  'etat-des-lieux-d-entree-d-un-appartement17': [
    {
      text: 'Combien de chambres avez-vous?',
      options: [
        { text: 'Studio', amount: 0, operation: '+' },
        { text: 'Une', amount: 20, operation: '+' },
        { text: 'Deux', amount: 40, operation: '+' },
        { text: 'Trois', amount: 60, operation: '+' },
        { text: 'Quatre', amount: 80, operation: '+' },
        { text: 'Cinq', amount: 100, operation: '+' }
      ]
    },
    {
      text: 'Combien de pieces d\'eau avez-vous?',
      options: [
        { text: 'Une salle de bain / douche', amount: 0, operation: '+' },
        { text: 'Deux salles de bains / douches', amount: 25, operation: '+' },
        { text: 'Trois salles de bain / douche', amount: 50, operation: '+' },
        { text: 'Quatre salles de bains / douche', amount: 75, operation: '+' },
        { text: 'Cinq salles de bains / douche', amount: 100, operation: '+' },
        { text: 'Six salles de bains / douche', amount: 125, operation: '+' }
      ]
    },
    {
      text: 'Avez-vous une terrasse ou un jardin?',
      options: [
        { text: 'Pas de terrase ni de jardin', amount: 0, operation: '+' },
        { text: 'Une terrasse', amount: 10, operation: '+' },
        { text: 'Un jardin de moins de 40m²', amount: 15, operation: '+' },
        { text: 'Un jardin de plus de 40 m³', amount: 25, operation: '+' },
        { text: 'Terrasse et jardin de - de 40m²', amount: 35, operation: '+' },
        { text: 'Terrasse et jardin + 40 m²', amount: 40, operation: '+' }
      ]
    },
    {
      text: 'L\'appartement est-il meublé?',
      options: [
        { text: 'Non', amount: 0, operation: '+' },
        { text: 'Oui', amount: 30, operation: '+%' }
      ]
    },
    {
      text: 'A la demande',
      options: [
        { text: 'du bailleur et du preneur', amount: 0, operation: '+' },
        { text: 'du bailleur uniquement', amount: 50, operation: '+%' },
        { text: 'du preneur uniquement', amount: 50, operation: '+%' }
      ]
    }
  ],
  'etat-des-lieux-d-entree-d-une-maison26': [
    {
      text: 'Combien de chambres avez-vous?',
      options: [
        { text: 'Studio', amount: 0, operation: '+' },
        { text: 'Une', amount: 20, operation: '+' },
        { text: 'Deux', amount: 40, operation: '+' },
        { text: 'Trois', amount: 60, operation: '+' },
        { text: 'Quatre', amount: 80, operation: '+' },
        { text: 'Cinq', amount: 100, operation: '+' }
      ]
    },
    {
      text: 'Combien de pieces d\'eau avez-vous?',
      options: [
        { text: 'Une salle de bain / douche', amount: 0, operation: '+' },
        { text: 'Deux salles de bains / douches', amount: 25, operation: '+' },
        { text: 'Trois salles de bain / douche', amount: 50, operation: '+' },
        { text: 'Quatre salles de bains / douche', amount: 75, operation: '+' },
        { text: 'Cinq salles de bains / douche', amount: 100, operation: '+' },
        { text: 'Six salles de bains / douche', amount: 125, operation: '+' }
      ]
    },
    {
      text: 'Avez-vous une terrasse ou un jardin?',
      options: [
        { text: 'Pas de terrasse ni de jardin', amount: 0, operation: '+' },
        { text: 'Une terrasse', amount: 10, operation: '+' },
        { text: 'Un jardin de moins de 40m²', amount: 15, operation: '+' },
        { text: 'Un jardin de plus de 40 m³', amount: 25, operation: '+' },
        { text: 'Terrasse et jardin de - de 40m²', amount: 35, operation: '+' },
        { text: 'Terrasse et jardin + 40 m²', amount: 40, operation: '+' }
      ]
    },
    {
      text: 'La maison est-elle meublée?',
      options: [
        { text: 'Non', amount: 0, operation: '+' },
        { text: 'Oui', amount: 30, operation: '+%' }
      ]
    },
    {
      text: 'A la demande',
      options: [
        { text: 'du bailleur et du preneur', amount: 0, operation: '+' },
        { text: 'du bailleur uniquement', amount: 50, operation: '+%' },
        { text: 'du preneur uniquement', amount: 50, operation: '+%' }
      ]
    }
  ],
  'etat-des-lieux-de-sortie-d-un-appartement30': [
    {
      text: 'Combien de chambres avez-vous?',
      options: [
        { text: 'Studio', amount: 0, operation: '+' },
        { text: 'Une', amount: 15, operation: '+' },
        { text: 'Deux', amount: 30, operation: '+' },
        { text: 'Trois', amount: 45, operation: '+' },
        { text: 'Quatre', amount: 60, operation: '+' },
        { text: 'Cinq', amount: 75, operation: '+' }
      ]
    },
    {
      text: 'Combien de pieces d\'eau avez-vous?',
      options: [
        { text: 'Une salle de bain / douche', amount: 0, operation: '+' },
        { text: 'Deux salles de bains / douches', amount: 20, operation: '+' },
        { text: 'Trois salles de bain / douche', amount: 40, operation: '+' },
        { text: 'Quatre salles de bains / douche', amount: 60, operation: '+' },
        { text: 'Cinq salles de bains / douche', amount: 80, operation: '+' },
        { text: 'Six salles de bains / douche', amount: 100, operation: '+' }
      ]
    },
    {
      text: 'Avez-vous une terrasse ou un jardin?',
      options: [
        { text: 'Pas de terrasse ni de jardin', amount: 0, operation: '+' },
        { text: 'Une terrasse', amount: 10, operation: '+' },
        { text: 'Un jardin de moins de 40m²', amount: 15, operation: '+' },
        { text: 'Un jardin de plus de 40 m³', amount: 25, operation: '+' },
        { text: 'Terrasse et jardin de - de 40m²', amount: 35, operation: '+' },
        { text: 'Terrasse et jardin + 40 m²', amount: 40, operation: '+' }
      ]
    },
    {
      text: 'La maison est-elle meublée?',
      options: [
        { text: 'Non', amount: 0, operation: '+' },
        { text: 'Oui', amount: 30, operation: '+%' }
      ]
    },
    {
      text: 'A la demande',
      options: [
        { text: 'du bailleur et du preneur', amount: 0, operation: '+' },
        { text: 'du bailleur uniquement', amount: 50, operation: '+%' },
        { text: 'du preneur uniquement', amount: 50, operation: '+%' }
      ]
    }
  ],
  'etat-des-lieux-de-sortie-maison63': [
    {
      text: 'Combien de chambres avez-vous?',
      options: [
        { text: 'Studio', amount: 0, operation: '+' },
        { text: 'Une', amount: 15, operation: '+' },
        { text: 'Deux', amount: 30, operation: '+' },
        { text: 'Trois', amount: 45, operation: '+' },
        { text: 'Quatre', amount: 60, operation: '+' },
        { text: 'Cinq', amount: 75, operation: '+' }
      ]
    },
    {
      text: 'Combien de pieces d\'eau avez-vous?',
      options: [
        { text: 'Une salle de bain / douche', amount: 0, operation: '+' },
        { text: 'Deux salles de bains / douches', amount: 20, operation: '+' },
        { text: 'Trois salles de bain / douche', amount: 40, operation: '+' },
        { text: 'Quatre salles de bains / douche', amount: 60, operation: '+' },
        { text: 'Cinq salles de bains / douche', amount: 80, operation: '+' },
        { text: 'Six salles de bains / douche', amount: 100, operation: '+' }
      ]
    },
    {
      text: 'Avez-vous une terrasse ou un jardin?',
      options: [
        { text: 'Pas de terrasse ni de jardin', amount: 0, operation: '+' },
        { text: 'Une terrasse', amount: 10, operation: '+' },
        { text: 'Un jardin de moins de 40m²', amount: 15, operation: '+' },
        { text: 'Un jardin de plus de 40 m³', amount: 25, operation: '+' },
        { text: 'Terrasse et jardin de - de 40m²', amount: 35, operation: '+' },
        { text: 'Terrasse et jardin + 40 m²', amount: 40, operation: '+' }
      ]
    },
    {
      text: 'La maison est-elle meublée?',
      options: [
        { text: 'Non', amount: 0, operation: '+' },
        { text: 'Oui', amount: 30, operation: '+%' }
      ]
    },
    {
      text: 'A la demande',
      options: [
        { text: 'du bailleur et du preneur', amount: 0, operation: '+' },
        { text: 'du bailleur uniquement', amount: 50, operation: '+%' },
        { text: 'du preneur uniquement', amount: 50, operation: '+%' }
      ]
    }
  ],
  'expertise-en-valeur70': [
    {
      text: 'De quel type de bien s\'agit-il?',
      options: [
        { text: 'Maison 2 ou 3 façades', amount: 150, operation: '+' },
        { text: 'Maison 4 façades', amount: 180, operation: '+' },
        { text: 'Appartement', amount: 0, operation: '+' },
        { text: 'Terrain', amount: 200, operation: '+' }
      ]
    },
    {
      text: 'La surface habitable mesure t-elle plus de 200m³',
      options: [
        { text: 'Non', amount: 0, operation: '+' },
        { text: 'Oui', amount: 25, operation: '+%' }
      ]
    },
    {
      text: 'Avez-vous les plans?',
      options: [
        { text: 'oui', amount: 0, operation: '+' },
        { text: 'Non', amount: 80, operation: '+' }
      ]
    },
    {
      text: 'Avez-vous le cadastre?',
      options: [
        { text: 'Oui', amount: 0, operation: '+' },
        { text: 'Non', amount: 25, operation: '+' }
      ]
    },
    {
      text: 'A la demande',
      options: [
        { text: 'Oui', amount: 0, operation: '+' },
        { text: 'Non', amount: 25, operation: '+' }
      ]
    }
  ]
}

// Improved calculation with correct handling of percentage operations
const totalPrice = computed(() => {
  if (!formData.value.type) return 0
  
  let total = services.find(s => s.id === formData.value.type)?.base || 0
  let percentageAdditions = 0
  
  formData.value.answers.forEach((answer, index) => {
    if (!answer) return
    
    const question = questions[formData.value.type][index]
    const selectedOption = question.options.find(opt => opt.text === answer)
    
    if (selectedOption) {
      if (selectedOption.operation === '+%') {
        // Store percentage additions for later calculation
        percentageAdditions += selectedOption.amount
      } else {
        // Add fixed amounts directly
        total += selectedOption.amount
      }
    }
  })
  
  // Apply percentage additions after all fixed amounts
  if (percentageAdditions > 0) {
    total += total * (percentageAdditions / 100)
  }
  
  return Math.round(total)
})

const currentQuestions = computed(() => 
  questions[formData.value.type] || []
)

const stepsTitle = computed(() => [
  'Service',
  'Questions',
  'Résultat'
])

// Check if all questions are answered and we should show the result
const isLastStep = computed(() => {
  // Last step means all questions have answers
  return formData.value.answers.length === currentQuestions.value.length &&
    formData.value.answers.every(answer => answer !== undefined && answer !== '')
})

// Current progress step (0, 1, or 2)
const currentProgressStep = computed(() => {
  if (!formData.value.type) return 0 // Service selection
  if (isLastStep.value) return 2 // Result
  return 1 // Questions
})

function nextStep() {
  if (formData.value.currentStep < currentQuestions.value.length - 1) {
    formData.value.currentStep++
  } else if (formData.value.answers.length === currentQuestions.value.length) {
    // All questions answered, show results
  }
}

function prevStep() {
  if (formData.value.currentStep > 0) {
    formData.value.currentStep--
  }
}

function resetForm() {
  formData.value = {
    type: '',
    answers: [],
    currentStep: 0,
    basePrice: 0
  }
}
</script>

<template>
  <div class="max-w-4xl mx-auto p-6">
    <!-- Progress Steps - 3 steps -->
    <ul class="steps w-full mb-8">
      <li v-for="(step, index) in stepsTitle" 
          :key="index"
          :class="[
            'step', 
            index <= currentProgressStep ? 'step-primary' : ''
          ]">
        {{ step }}
      </li>
    </ul>

    <div class="card bg-base-200 shadow-xl">
      <div class="card-body">
        <!-- Service Selection Table -->
        <div v-if="!formData.type" class="space-y-4">
          <h2 class="card-title text-2xl mb-6">Sélectionnez votre service</h2>
          <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Service</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="service in services" 
                    :key="service.id"
                    class="hover">
                  <td class="font-medium">{{ service.name }}</td>
                  <td class="text-right">
                    <button @click="formData.type = service.id"
                            class="btn btn-primary-content btn-outline btn-sm">
                      Sélectionner
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Questions or Results Section -->
        <div v-else-if="currentProgressStep === 1" class="space-y-6">
          <!-- Questions -->
          <div class="flex justify-between items-center border-b pb-4">
            <h2 class="text-2xl font-bold">{{ currentQuestions[formData.currentStep]?.text }}</h2>
          </div>

          <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
              <tbody>
                <tr v-for="option in currentQuestions[formData.currentStep]?.options"
                    :key="option.text"
                    :class="['hover', formData.answers[formData.currentStep] === option.text ? 'bg-primary/20 font-bold' : '']"
                    style="cursor: pointer"
                    @click="formData.answers[formData.currentStep] = option.text">
                  <td class="font-medium">{{ option.text }}</td>
                  <td class="text-right">
                    <div v-if="formData.answers[formData.currentStep] === option.text" class="badge badge-primary-content badge-outline">Sélectionné</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="card-actions justify-between mt-8">
            <button @click="prevStep" 
                    class="btn btn-ghost"
                    :disabled="formData.currentStep === 0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" 
                      stroke-linejoin="round" stroke-width="2" d="m15 18l-6-6l6-6"/>
              </svg>
              Précédent
            </button>
            <button @click="nextStep"
                    class="btn btn-primary-content btn-outline"
                    :disabled="!formData.answers[formData.currentStep]">
              Suivant
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" 
                      stroke-linejoin="round" stroke-width="2" d="m9 6l6 6l-6 6"/>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Results Section -->
        <div v-else-if="currentProgressStep === 2" class="space-y-6">
          <div class="flex justify-center items-center border-b pb-4">
            <h2 class="text-2xl font-bold text-center">Votre devis</h2>
          </div>
          
          <div class="text-center space-y-8">
            <div class="stats shadow mx-auto">
              <div class="stat">
                <div class="stat-title">Type de service</div>
                <div class="stat-value text-xl">{{ services.find(s => s.id === formData.type)?.name }}</div>
              </div>
              <div class="stat">
                <div class="stat-title">Prix estimé</div>
                <div class="stat-value text-3xl text-primary">{{ totalPrice }}€</div>
              </div>
            </div>
            
            <div class="flex flex-col gap-4">
              <a href="/contact" class="btn btn-primary-content btn-outline btn-lg mx-auto w-64">
                Demander un devis
              </a>
              <button @click="resetForm" class="btn btn-ghost btn-sm mx-auto">
                Recommencer l'estimation
              </button>
            </div>
          </div>
        </div>

        <!-- Reset Button - Only show when in questions step -->
        <button v-if="formData.type && currentProgressStep === 1" 
                @click="resetForm"
                class="btn btn-sm btn-ghost gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" 
                  stroke-linejoin="round" stroke-width="2" 
                  d="M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8m0-5v5h5"/>
          </svg>
          Recommencer
        </button>
      </div>
    </div>
  </div>
</template>