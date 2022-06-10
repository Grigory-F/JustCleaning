<template>
  <header class="header d-flex align-items-center">
    <div class="d-flex justify-content-between w-100">
      <router-link to="/">
        <BaseSystemIcons :name="'logo'" :width="125"></BaseSystemIcons>
      </router-link>
      <div class="d-flex">
        <!-- @click="$router.push('/work-days')" -->
        <router-link role="button" to="/work-days" class="btn-success btn me-2 d-flex">
          <span class="d-none d-sm-none d-md-inline">Create order</span>
          <font-awesome-icon
            class="d-flex d-sm-flex d-md-none fs-4 align-self-center"
            :icon="['far', 'plus-square']"
          />
        </router-link>
        <router-link role="button" to="/create-article" class="btn-success btn me-2 d-flex">
          <span class="d-none d-sm-none d-md-inline">Create articles</span>
          <font-awesome-icon
            class="d-flex d-sm-flex d-md-none fs-4 align-self-center"
            :icon="['far', 'plus-square']"
          />
        </router-link>
        <button
          type="button"
          @click="toggleTheme"
          :class="this.$store.getters.getTheme == 'dark' ? 'bg-light': 'bg-dark'"
          class="border-0 btn"
        >
          <font-awesome-icon
            class="fs-4 d-flex align-items-center"
            :class="this.$store.getters.getTheme == 'dark' ? 'text-dark': 'text-light'"
            :icon="['fas', 'moon']"
          />
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import Popup from './Popup.vue'
export default {
  components: { Popup },
  methods: {
    toggleTheme () {
      this.$store.dispatch('toggleTheme')
    }
  }
}
</script>
