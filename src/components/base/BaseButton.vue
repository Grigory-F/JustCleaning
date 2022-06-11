<template>
  <button class="btn" :class="[`btn-${variant}`, ]">
    <slot>Text button</slot>
    <BaseSystemIcons class="interface-icons" :name="'setting'" :width="20"></BaseSystemIcons>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    variant: {
      type: String,
      default: "primary",
      required: false,
    },
  },
};
</script>
