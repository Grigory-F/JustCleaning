<template>
  <header class="header d-flex align-items-center">
    <div class="d-flex justify-content-between w-100">
      <SystemIcons :name="'logo'" :width="130"></SystemIcons>
      <div class="d-flex">
        <b-button variant="success" class="mr-2">
          <span class="d-none d-sm-none d-md-inline">Create order</span>
          <font-awesome-icon class="d-sm-inline-block d-md-none" :icon="['far', 'plus-square']" />
        </b-button>
        <b-button @click="changeTheme" variant="setting" class="border-0">
          <font-awesome-icon :icon="['fas', 'moon']" />
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