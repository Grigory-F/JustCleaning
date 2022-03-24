<template>
  <header class="header d-flex align-items-center">
    <div class="d-flex justify-content-between w-100">
      <router-link to="/" >
        <SystemIcons :name="'logo'" :width="125"></SystemIcons>
      </router-link>
      <div class="d-flex">
        <!-- @click="$router.push('/work-days')" -->
        <b-link to="/work-days" class="btn-success btn mr-2">
          <span class="d-none d-sm-none d-md-inline">Create order</span>
          <font-awesome-icon
            class="d-flex d-sm-flex d-md-none fs-4 align-items-center"
            :icon="['far', 'plus-square']"
          />
        </b-link>
        <b-link to="/create-article" class="btn-success btn mr-2">
          <span class="d-none d-sm-none d-md-inline">Create articles</span>
          <font-awesome-icon
            class="d-flex d-sm-flex d-md-none fs-4 align-items-center"
            :icon="['far', 'plus-square']"
          />
        </b-link>
        <b-button
          @click="changeTheme"
          :class="[switches ? 'bg-light' : 'bg-dark']"
          class="border-0"
        >
          <font-awesome-icon
            class="fs-4 d-flex align-items-center"
            :class="[switches ?'text-dark'  :'text-light' ]"
            :icon="['fas', 'moon']"
          />
        </b-button>
      </div>
    </div>
  </header>
</template>

<script>
import Popup from "./Popup.vue";
export default {
  components: { Popup },
  data() {
    return {
      switches: false,
      dialogVisible: false,
      storageValue: localStorage.getItem("darkTheme") === "true",
    };
  },
  methods: {
    changeTheme() {
      this.switches = localStorage.getItem("darkTheme") === "false";
      console.log(this.switches);
      localStorage.setItem("darkTheme", this.switches);
      if (this.switches) {
        document.body.classList.toggle("dark-theme");
      } else {
        document.body.classList.toggle("dark-theme");
      }
    },
  },
  mounted() {
    if (this.storageValue) {
      document.body.classList.add("dark-theme");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      if (localStorage.getItem("darkTheme") === null) {
        document.body.classList.add("dark-theme");
        localStorage.setItem("darkTheme", true);
      }
    }
  },
};
</script>

<style lang="scss">
</style>