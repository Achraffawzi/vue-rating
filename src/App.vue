<template>
  {{ rating }}
  <VueRating :value="rating" @update-value="handleValueUpdate($event)" />
</template>

<script setup>
import { ref } from "vue";
import VueRating from "./components/VueRating.vue";

const rating = ref(0);

const handleValueUpdate = (value) => {
  rating.value = value;
};
</script>
