<template>
  <main class="main-container">
    <Header />
    <router-view></router-view>
  </main>
</template>



<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
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
  data() {
    return {
      newLet: "",
      storageValue: localStorage.getItem("darkTheme") === "true",
      goProper: {
        name: { first: "Jane", last: "Doe" },
        was_the:
          "Ipsum molestias autem earum at rerum, aliquam unde maxime modi cumque.",
        price: 42,
        discount: 10,
        status: "succses",
        clientStatus: "regular",
      },
      items: [
        {
          name: { first: "John", last: "Doe" },
          was_the: "Male",
          price: 42,
          discount: 10,
          status: "canselled",
        },
        {
          name: { first: "Jane", last: "Doe" },
          was_the:
            "Ipsum molestias autem earum at rerum, aliquam unde maxime modi cumque.",
          price: 42,
          discount: 10,
          status: "canselled",
        },
        {
          name: { first: "Jane", last: "Doe" },
          was_the:
            "Ipsum molestias autem earum at rerum, aliquam unde maxime modi cumque.",
          price: 42,
          discount: 10,
          status: "succses",
        },
      ],
    };
  },
};
</script>


<style lang="scss">
#app {
  position: relative;
}
</style>
