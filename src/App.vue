<template>
  <div id="app">
    <main class="main-container">
      <!-- :class="[isDark ? 'dark-theme': '']" -->
      <Header />
      <span v-if="isLoggedIn">
        |
        <a @click="logout">Logout</a>
      </span>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
  data: () => ({
    info: null,
  }),
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    logout: function () {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/auth");
      });
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
};
</script>




