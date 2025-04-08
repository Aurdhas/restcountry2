<template>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Header />
  
      <!-- Affichage du message de chargement -->
      <div v-if="countryStore.isLoading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
  
      <!-- Liste des pays une fois le chargement terminé -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <CountryCard
          v-for="country in countryStore.countries"
          :key="country.name.common"
          :country="country"
          class="transition-all duration-200 hover:shadow-lg cursor-pointer"
          @click="goToCountry(country)"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { useCountryStore } from '@/stores/country';
  import { router } from '@inertiajs/vue3';
  import CountryCard from '@/Components/CountryCard.vue';
  import Header from '@/Components/Header.vue';
  
  const countryStore = useCountryStore();
  
  // Redirection Inertia vers la page show
  const goToCountry = (country) => {
    const name = country.name.common;
    router.visit(`/country/${encodeURIComponent(name)}`);
  };
  
  onMounted(() => {
    countryStore.getCountries();
  });
  </script>
  