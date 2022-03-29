<template>
  <div class="hero-static d-flex align-items-center">
    <div class="content">
      <div class="row justify-content-center">
        <div class="col col-md-8 col-lg-6 col-xl-4">
          <div class="block block-rounded mb-0">
            <div class="block-header block-header-default">
              <h3 class="block-title">Sign In</h3>
            </div>
            <div class="block-content">
              <div class="p-sm-3 px-lg-4 px-xxl-5 py-lg-5">
                <h1>Just Cleaning</h1>
                <p class="fw-medium text-muted fs-6">
                  Welcome, please login, or
                  <a href="#">registration</a>
                </p>
                <form @submit.prevent="login">
                  <div class="pt-4">
                    <div class="mb-4">
                      <input
                        type="login"
                        class="form-control form-control-lg mb-2"
                        placeholder="Login"
                        v-model="email"
                        aria-label="Login"
                      />
                      <span
                        class="text-danger fw-medium fs-6"
                        aria-errormessage="Your login must be match format"
                      >Your login must be match format</span>
                    </div>
                    <div class="mb-4">
                      <input
                        type="password"
                        class="form-control form-control-lg mb-2"
                        placeholder="Password"
                        v-model="password"
                        aria-label="Password"
                      />
                      <span
                        class="text-danger fw-medium fs-6"
                        aria-errormessage="Your password must be at least 5 characters long"
                      >Your password must be at least 5 characters long</span>
                    </div>
                    <div class="form-check mb-4">
                      <input type="checkbox" class="form-check-input" />
                      <span>Remember me</span>
                    </div>
                  </div>
                  <div class="row mb-4">
                    <div class="col-md-6 col-xl-5">
                      <button type="submit" class="btn w-100 btn-primary">Sign In</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
      login: function () {
        let email = this.email 
        let password = this.password
        this.$store.dispatch('login', { email, password })
       .then(() => this.$router.push('/'))
       .catch(err => console.log(err))
      }
    }
};
</script>

<style lang="scss">
.hero-static {
  min-height: 100vh;
}
</style>