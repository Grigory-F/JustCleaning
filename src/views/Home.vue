<template>
  <!-- :class="[isDark ? 'dark-theme': '']" -->
  <main class="main-container">
    <CurrentOrder :goProper="goProper" />
    <Table></Table>
  </main>
</template>



<script>
import CurrentOrder from "@/components/CurrentOrder.vue";
import Table from "@/components/Table.vue";
export default {
  components: {
    CurrentOrder,
    Table,
  },
  methods: {},
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
  created() {},
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
      fields: [
        {
          key: "name",
          label: "Name",
          formatter: "fullName",
        },
        {
          key: "was_the",
          label: "What was there",
        },

        { key: "priceDiscount", label: "Price" },
        "status",
      ],
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
