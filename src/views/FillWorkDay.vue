<template>
  <div class="content">
    <p>You need to click on the day, and drag the time that you want to mark as working. After some time, this filled area will become a different color.</p>
    <div class="row">
      <div class="col">
        <div class="block block--rounded">
          <vue-cal
            :time-from="10 * 60"
            :time-to="23 * 60"
            :disable-views="['years', 'year', 'month']"
            :editable-events="eventsParams"
            :min-event-width="minEventWidth"
            :events="events"
            :on-event-create="onEventCreate"
            :min-date="new Date()"
          ></vue-cal>
          <div class="block-content block-content--full d-flex justify-content-between">
            <div class="d-flex">
              <div class="btn btn-primary me-3" @click="pushTimes">Добавить</div>
              <div class="btn btn-primary">Редактировать</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
export default {
  components: { VueCal },
  data () {
    return {
      datas: null,
      selectedEvent: null,
      showEventCreationDialog: false,
      minEventWidth: 0,
      eventsParams: {
        title: false,
        drag: false,
        resize: true,
        delete: true,
        create: true
      },
      events: []
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
    }
  },
  methods: {
    onEventCreate (event, deleteEventFunction) {
      this.events.push(event)
      console.log(this.events)
      return event
    },
    /*  deleteEventFunctions() {
      this.deleteEventFunction();
    }, */
    async pushTimes () {
      this.$http
        .get('https://jsonplaceholder.typicode.com/todos/')
        .then((response) => console.log(response.data))
    }
  },
  watch: {
    events () {
      this.events.forEach((element) => {
        console.log(element)
      })
    }
  },
  computed: {}
}
</script>

<style lang="scss">
</style>
