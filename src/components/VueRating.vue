<template>
  <div class="rating-container">
    <svg
      v-for="item in length"
      :key="item"
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      viewBox="0 0 100 100"
    >
      <polygon
        points="50,0 64,36 100,42 72,64 78,100 50,80 22,100 28,64 0,42 36,36"
        fill="none"
        stroke="#000"
        stroke-width="1"
      />
    </svg>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  length: {
    type: Number,
    default: 5,
  },
  value: {
    type: Number,
    default: 0,
  },
  fill: {
    type: String,
    default: "#FFD055",
  },
  readOnly: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.rating-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.rating-container > svg {
  cursor: pointer;
}
</style>
