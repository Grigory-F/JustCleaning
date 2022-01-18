<template>
  <div id="app">
    <header class="header px-3 d-flex align-items-center">
      <div class="d-flex justify-content-between w-100">
        <SystemIcons :name="'logo'" :width="130"></SystemIcons>
        <div class="d-flex">
          <b-button variant="success" class="mr-2">
            <span class="button-text">Create order</span>
            <font-awesome-icon :icon="['far', 'plus-square']" />
          </b-button>
          <b-button variant="success">
            <font-awesome-icon :icon="['far', 'moon']" />
          </b-button>
        </div>
      </div>
    </header>
    <b-container fluid tag="main" class="content">
      <b-row>
        <b-col>
          <div class="block block-rounded">
            <div class="block-header d-flex">
              <h3 class="block-title">CURRENT ORDER</h3>
              <div class="block-options d-flex">awddwa</div>
            </div>
            <div class="block-content block-content-full">
              <b-row>
                <b-col>
                  <div class="inner-signs">
                    <span class="text-muted">Addres</span>
                    <a target="_blank" href="https://yandex.ru/maps/?ll=30.310182,59.951059&z=12&l=map">Карта Санкт-Петербурга</a>
                    <p>awawdawdwad</p>
                  </div>
                  <div class="inner-signs">
                    <span>Addres</span>
                    <p>awawdawdwad</p>
                  </div>
                  <div class="inner-signs">
                    <span>Addres</span>
                    <p>awawdawdwad</p>
                  </div>
                </b-col>
                <b-col>
                  <div class="inner-signs">
                    <span>Addres</span>
                    <p>awawdawdwad</p>
                  </div>
                  <div class="inner-signs">
                    <span>Addres</span>
                    <p>awawdawdwad</p>
                  </div>
                  <div class="inner-signs">
                    <span>Addres</span>
                    <p>awawdawdwad</p>
                  </div>
                </b-col>
              </b-row>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>



<script>
export default {
  data() {
    return {
      likes: 0,
    };
  },
  mounted() {
    console.log(process.env.VUE_APP_SOMEKEY);
  }
};
</script>


<style lang="scss">
.header {
  height: 60px;
  background-color: rgba(225, 225, 225, 0.75);
  & > .main-title {
  }
  & .button-text {
    margin-right: 0.5rem;
  }
}

@media (max-width: 480px) {
  .header {
    & .button-text {
      display: none;
    }
  }
}
.content {
  padding: 20px 0 0 0;
}
</style>
