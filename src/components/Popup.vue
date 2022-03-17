<template>
  <div class="overflow" v-if="show">
    <div class="boxses p-3 rounded">
      <div class="d-flex justify-content-between mb-3">
        <span class="mr-3 fs-3">Fill in the number</span>
        <b-button @click.stop="hideDialog" class="border-0 px-2 py-1 text-dark" variant="default">
          <!-- <font-awesome-icon
            :icon="['far', 'close']"
          />-->
          <font-awesome-icon :icon="['far', 'times-circle']" size="lg" />
        </b-button>
      </div>

      <input class="w-100 d-block px-1 py-2" type="number" />

      <div v-if="loading" class="d-flex mt-3">
        <font-awesome-icon size="lg" class="m-auto" :icon="['fas', 'spinner']" spin />
      </div>
      <div class="mt-3">
        <div class="d-flex justify-content-between border p-3">
          <div>
            <p class="fs-5 fw-bold m-0">Алекей</p>
            <span>89025180185</span>
          </div>
          <font-awesome-icon :icon="['fas', 'plus']" size="lg" />
        </div>
      </div>
      <div class="mt-3">
        <div class="d-flex justify-content-between border p-3">
          <div>
            <p class="fs-5 fw-bold m-0">Алекей</p>
            <span>89025180185</span>
          </div>
          <font-awesome-icon :icon="['fas', 'plus']" size="lg" />
        </div>
      </div>
      <div class="mt-3">
        <div class="d-flex justify-content-between border p-3">
          <div>
            <p class="fs-5 fw-bold m-0">Алекей</p>
            <span>89025180185</span>
          </div>
          <font-awesome-icon :icon="['fas', 'plus']" size="lg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
      show: {
          type: Boolean,
          required: false,
      }
},
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    hideDialog() {
        this.$emit('update', false)
    }
  },
  mounted() {
  }
};
</script>

<style>
</style>