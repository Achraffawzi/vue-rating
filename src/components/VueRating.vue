<template>
  <div class="rating-container">
    <svg
      v-for="item in length"
      :key="item"
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      viewBox="0 0 100 100"
      @mouseover="handleMouseOver(item)"
    >
      <polygon
        ref="polygonRef"
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

const polygonRef = ref();

const fill = (from, to) => {
  for (let i = from; i < to; i++) {
    polygonRef.value[i].style.fill = props.fill;
  }
};

const unfill = (from, to) => {
  console.log(from);
  console.log(to);
  for (let i = from; i < to; i++) {
    polygonRef.value[i].style.fill = "none";
  }
};

const handleMouseOver = (index) => {
  if (props.disabled || props.readOnly) return;
  fill(0, index);
  unfill(index, props.length);
};
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
