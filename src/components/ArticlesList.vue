<template>
<div class="content">
  <!-- 
    <div class="row">
      <div class="col">
        <div class="block block--rounded">
          <div class="block-header d-flex">
            <h3 class="block-header__title">useful articles</h3>
            <div class="block-header__options d-flex"></div>
          </div>
  <div class="block-content block-content--full">-->
  <div class="row">
    <div class="col-12 col-md-6 mb-4" v-for="(item, index) of articles" :key="index">
      <article class="d-flex flex-column">
        <router-link to="/auth" class="me-4 box-images box-images--flow mb-2">
          <picture>
            <!-- <source type="image/avif" :srcset="require('@/assets/kiska.avif')" />
            <source type="image/webp" :srcset="require('@/assets/kiska.webp')" />-->
            <img class="box-images__images" :src="require('@/assets/kiska.jpg')" alt />
          </picture>
        </router-link>
        <div class>
          <div class="d-flex justify-content-between mb-1">
            <h3 class="me-4 fs-4 m-0">{{item.title}}</h3>
            <div class="d-flex flex-column">
              <time class="text-muted fs-6 mb-1 text-nowrap">{{computedDate(item.createdAt)}}</time>
              <div class="text-success rounded-3 align-self-end fw-bold">NEW</div>
            </div>
          </div>
          <p class="fs-6 m-0">{{item.subtitle }}</p>
        </div>
      </article>
    </div>
  </div>
  <!--
          </div>
        </div>
      </div>
    </div>
  --></div>
</template>

<script>
export default {
  data: () => ({
    articles: [],
  }),
  methods: {
    computedDate: function (rawDate) {
      return new Date(rawDate).toLocaleString("ru", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      });
    },
  },
  mounted() {
    this.$http
      .get("/api/articles/?page=2&limit=4")
      .then((response) => {
        this.articles = response.data;
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  computed: {
    // геттер вычисляемого значения
  },
};
</script>


