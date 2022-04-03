<template>
  <vue-cal
    selected-date="2018-11-19"
    :time-from="10 * 60"
    :time-to="23 * 60"
    :disable-views="['years', 'year', 'month']"
    :editable-events="{ title: false, drag: false, resize: true, delete: true, create: true }"
    :min-event-width="minEventWidth"
    :events="events"
    :on-event-create="onEventCreate"
  >/></vue-cal>
</template>

<script>
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";
export default {
  components: { VueCal },
  data() {
    return {
      selectedEvent: null,
      showEventCreationDialog: false,
      minEventWidth: 0,
      events: [
        /* {
          start: "2018-11-21 14:00",
          end: "2018-11-21 22:00",
          title: "A big thing",
          content:
            '<i class="v-icon material-icons">sentiment_satisfied_alt</i>',
          class: "health",
        },
        {
          start: "2018-11-21 16:00",
          end: "2018-11-21 19:00",
          title: "Another thing",
          content: '<i class="v-icon material-icons">thumb_up</i>',
          class: "blue-event",
        },
        {
          start: "2018-11-20 18:30",
          end: "2018-11-20 20:30",
          title: "Crossfit",
          content: '<i class="v-icon material-icons">fitness_center</i>',
          class: "sport",
        }, */
      ],

      /* specialHours: {
        1: dailyHours,
        2: dailyHours,
        3: [
          { from: 9 * 60, to: 12 * 60, class: "business-hours" },
          { from: 14 * 60, to: 18 * 60, class: "business-hours" },
        ],
        4: dailyHours,
        5: dailyHours,
      }, */
    };
  },
  methods: {
    onEventCreate(event, deleteEventFunction) {
      this.selectedEvent = event;
      this.deleteEventFunction = deleteEventFunction;

      return event;
    },
  },
  /* watch: {
    events() {
      this.events.forEach(element => {
        console.log(element);
      });
    }
  } */
};
</script>




