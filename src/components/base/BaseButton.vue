<template>
  <button @click="sendEvent" class="btn d-flex place-items-center" :class="[`btn-${variant}`, ]">
    <slot>Text button</slot>
    <BaseSystemIcons v-if="innerIcon" class="interface-icons" :name="'setting'" :width="20"></BaseSystemIcons>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    variant: {
      type: String,
      default: 'primary',
      required: false
    },
    innerIcon: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  methods: {
    sendEvent () {
      console.log('adwadwwad')
      this.$emit('click')
    }
  }
}
</script>
