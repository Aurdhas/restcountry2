<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-2xl font-bold mb-6">Détails du pays</h1>
  
      <div v-if="country">
        <h2 class="text-xl font-semibold">{{ country.name }}</h2>
        <p><strong>Capitale :</strong> {{ capital }}</p>
        <p><strong>Population :</strong> {{ country.population }}</p>
        <p><strong>Région :</strong> {{ country.region }}</p>
  
        <p><strong>Langues :</strong>
          <span v-if="parsedLanguages.length > 0">
            <span v-for="(language, index) in parsedLanguages" :key="index">
              {{ language.name }}<span v-if="index < parsedLanguages.length - 1">, </span>
            </span>
          </span>
          <span v-else>Aucune langue disponible</span>
        </p>
      </div>
  
      <p v-else class="text-gray-500">Chargement en cours...</p>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { usePage } from '@inertiajs/vue3';
  
  const props = usePage().props;
  const country = props.country;
  
  // Gestion de la capitale (au cas où ce serait un tableau)
  const capital = computed(() => {
    return Array.isArray(country.capital) ? country.capital[0] : country.capital;
  });
  
  // Parser les langues si c’est du JSON (depuis la BDD)
  const parsedLanguages = computed(() => {
    try {
      return country.languages ? JSON.parse(country.languages) : [];
    } catch (e) {
      console.error('Erreur parsing des langues:', e);
      return [];
    }
  });
  </script>
  