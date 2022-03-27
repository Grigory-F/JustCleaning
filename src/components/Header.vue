<template>
  <header class="header d-flex align-items-center">
    <div class="d-flex justify-content-between w-100">
      <router-link to="/">
        <SystemIcons :name="'logo'" :width="125"></SystemIcons>
      </router-link>
      <div class="d-flex">
        <!-- @click="$router.push('/work-days')" -->
        <router-link role="button" to="/work-days" class="btn-success btn me-2 d-flex">
          <span class="d-none d-sm-none d-md-inline">Create order</span>
          <font-awesome-icon
            class="d-flex d-sm-flex d-md-none fs-4 align-self-center"
            :icon="['far', 'plus-square']"
          />
        </router-link>
        <router-link role="button" to="/create-article" class="btn-success btn me-2 d-flex">
          <span class="d-none d-sm-none d-md-inline">Create articles</span>
          <font-awesome-icon
            class="d-flex d-sm-flex d-md-none fs-4 align-self-center"
            :icon="['far', 'plus-square']"
          />
        </router-link>
        <button
          type="button"
          @click="changeTheme"
          :class="[switches ? 'bg-light' : 'bg-dark']"
          class="border-0 btn"
        >
          <font-awesome-icon
            class="fs-4 d-flex align-items-center"
            :class="[switches ?'text-dark'  :'text-light' ]"
            :icon="['fas', 'moon']"
          />
        </button>
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
      console.log("awdwadwa awdawdfrf");
    }
  },
};
</script>
