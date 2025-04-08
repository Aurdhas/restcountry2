import { defineStore } from 'pinia' // import {define}Store
import { ref } from 'vue'
import axios from 'axios'

export const useCountryStore = defineStore('country', ()=>{
    const countries = ref([])
    const country = ref(null)
    const isLoading=ref(false)

    const getCountries = async () => {
        isLoading.value = true
        try{
            const response = await axios.get('https://restcountries.com/v3.1/all')
            countries.value = response.data
            isLoading.value = false
        }catch(error){
            console.log(error)
            isLoading.value = false
        }
        }

    const getCountry = async (name) => {
        isLoading.value = true
        try{
            const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`)
            country.value = response.data
            isLoading.value = false
        }catch(error){
            console.log(error)
            isLoading.value = false
        }
        }

    return {
        countries,
        country,
        isLoading,
        getCountries,
        getCountry
    }
})