<template>
  <div class="content">
    <b-row>
      <b-col>
        <div class="block block-rounded">
          <div class="block-header d-flex">
            <h3 class="block-title">CURRENT ORDER</h3>
            <div class="block-options d-flex"></div>
          </div>
          <form class="block-content block-content-full">
            <b-row>
              <b-col md="6" sm="12">
                <div class="inner-signs-order mb-3">
                  <span class="text-muted">Addres</span>
                  <!-- Эту ссылку надо экранировать и вставить координаты пришедшие с бека. -->
                  <a
                    class="d-block fs-3 fw-medium"
                    target="_blank"
                    href="https://yandex.ru/maps/?ll=30.310182,59.951059&z=12&l=map"
                  >Владимирская 7, кв. 50, 2.п</a>
                </div>
                <div class="inner-signs mb-3">
                  <span class="text-muted">Telephone</span>
                  <a class="d-block fs-3 fw-medium" href="tel:89025180185">89025180185</a>
                </div>
                <div class="inner-signs mb-3">
                  <span class="text-muted">What to do</span>
                  <p class="fs-3 fw-medium">3 дивана, 2 подушки, 4 матраса</p>
                </div>
                <div class="inner-signs">
                  <span class="text-muted">Files</span>
                  <ImageUploadPreview></ImageUploadPreview>
                </div>
              </b-col>

              <b-col order="first" order-md="0" class="d-flex flex-wrap">
                <div class="inner-signs mr-4">
                  <span class="text-muted">Time</span>
                  <p class="fs-2">16:30</p>
                </div>
                <div class="inner-signs mr-4">
                  <span class="text-muted">Price</span>
                  <p class="fs-2">1080 ₽</p>
                </div>
                <div class="inner-signs">
                  <span class="text-muted">Level</span>
                  <p
                    class="fs-2"
                    :class="[goProper.clientStatus == 'regular' ? 'text-success' : '']"
                  >{{ goProper.clientStatus }}</p>
                </div>
              </b-col>
            </b-row>
          </form>
          <div class="block-content block-content-full d-flex justify-content-between">
            <div class="d-flex">
              <input type="submit" />
              <b-button variant="success" class="mr-2 d-flex">
                <span class="d-none d-sm-none d-md-inline">Complete</span>
                <font-awesome-icon
                  class="d-sm-inline-block d-md-none fs-4 m-auto"
                  :icon="['far', 'check-circle']"
                />
              </b-button>
              <b-button variant="setting d-flex">
                <span class="d-none d-sm-none d-md-inline">Cansel order</span>
                <font-awesome-icon
                  class="d-sm-inline-block d-md-none fs-4 m-auto"
                  :icon="['far', 'times-circle']"
                />
              </b-button>
            </div>
            <b-button variant="setting">
              <SystemIcons class="interface-icons" :name="'setting'" :width="20"></SystemIcons>
            </b-button>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ImageUploadPreview from '@/components/ImageUploadPreview.vue'
export default {
  components: {
    ImageUploadPreview,
  },
  props: ["goProper"],
  
};
</script>

