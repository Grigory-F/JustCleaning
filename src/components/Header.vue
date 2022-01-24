<template>
  <header class="header d-flex align-items-center">
    <div class="d-flex justify-content-between w-100">
      <SystemIcons :name="'logo'" :width="125"></SystemIcons>
      <div class="d-flex">
        <b-button variant="success" class="mr-2">
          <span class="d-none d-sm-none d-md-inline">Create order</span>
          <font-awesome-icon class="d-flex d-sm-flex d-md-none fs-4 align-items-center" :icon="['far', 'plus-square']" />
        </b-button>
        <b-button @click="changeTheme" :class="[switchTheme == true ? 'bg-light': '']" variant="setting" class="border-0">
          <font-awesome-icon class="fs-4 d-flex align-items-center" :class="[switchTheme == true ? 'text-dark': '']" :icon="['fas', 'moon']" />
        </b-button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      switchTheme: false,
    };
  },
  methods: {
    changeTheme() {
      this.switchTheme = !this.switchTheme
      localStorage.setItem("darkTheme", this.switchTheme);
      this.$emit('changeTheme', this.switchTheme);
    },
  },
  mounted() {
  
  },
};
</script>

<style lang="scss">

</style>