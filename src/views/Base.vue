<template>
  <div>
      <p style="margin: 0 auto" v-if="isLoggedIn">
        |
        <a @click="logout">Logousssst</a>
      </p>
    <CurrentOrder :goProper="goProper" />
    <ArticlesList></ArticlesList>
    <Table />
  </div>
</template>

<script>
import ArticlesList from '@/components/ArticlesList.vue'
import CurrentOrder from "@/components/CurrentOrder.vue";
import Table from "@/components/Table.vue";
export default {
  components: {
    CurrentOrder,
    Table,
    ArticlesList,
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
  data: () => ({
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
  }),
};
</script>
