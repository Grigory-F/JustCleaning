<template>
  <main class="main-container">
    <vue-cal
      style="height: 1000px"
      :time-from="8 * 60"
      :time-to="20 * 60"
      :special-hours="specialHours"
      hide-weekends
    />
  </main>
</template>

<script>
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";
export default {
  components: { VueCal },
  data() {
    return {
      specialHours: {
        1: dailyHours,
        2: dailyHours,
        3: [
          { from: 9 * 60, to: 12 * 60, class: "business-hours" },
          { from: 14 * 60, to: 18 * 60, class: "business-hours" },
        ],
        4: dailyHours,
        5: dailyHours,
      },
    };
  },
  methods: {},
};
</script>