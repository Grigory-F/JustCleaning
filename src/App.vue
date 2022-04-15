<template>
  <div id="app">
    <!-- <Preloader v-show="this.$store.getters.getStatusPreload"/> -->
      <router-view></router-view>
  </div>
</template>

<script>
/* import Preloader from '@/components/Preloader.vue' */
import { mapGetters } from "vuex";
export default {
  components: {
    /* Preloader, */
  },
  data: () => ({
    info: null,
  }),
  beforeMount() {
    this.$store.dispatch("initTheme");
    this.$store.dispatch("togglePreloader");
    console.log("loading",this.$store.getters.getStatusPreload);
  },
  computed: {
    ...mapGetters({ theme: "getTheme" }),
  },
  watch: {
    theme(newTheme, oldTheme) {
      newTheme === "light"
        ? document.body.classList.remove("dark-theme")
        : document.body.classList.add("dark-theme");
    },
  },
  created: function () {
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch("logout");
        }
        throw err;
      });
    });
  },
  mounted() {
    
  }
};
</script>




