<template>
  <div id="app">
    <main class="main-container">
    <!-- :class="[isDark ? 'dark-theme': '']" -->
    <Header />
    
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
  data() {
    return {};
  },
  methods: {
    
  }
};
</script>




