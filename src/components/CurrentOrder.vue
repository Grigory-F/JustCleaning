<template>
  <div class="content">
    <div class="row">sss
      <div class="col">
        <div class="block block-rounded">
          <div class="block-header d-flex">
            <h3 class="block-title">CURRENT ORDER</h3>
            <div class="block-options d-flex"></div>
          </div>
          <form class="block-content block-content-full">
            <div class="row">
              <div class="col col-12 col-md-6">
                <div class="inner-signs-order mb-3">
                  <span class="text-muted">Addres</span>
                  <!-- Эту ссылку надо экранировать и вставить координаты пришедшие с бека. -->
                  <a
                    class="d-block fs-3 fw-medium text-decoration-none"
                    target="_blank"
                    href="https://yandex.ru/maps/?ll=30.310182,59.951059&z=12&l=map"
                  >Владимирская 7, кв. 50, 2.п</a>
                </div>
                <div class="inner-signs mb-3">
                  <span class="text-muted">Telephone</span>
                  <a class="d-block fs-3 fw-medium text-decoration-none" href="tel:89025180185">89025180185</a>
                </div>
                <div class="inner-signs mb-3">
                  <span class="text-muted">What to do</span>
                  <p class="fs-3 fw-medium">3 дивана, 2 подушки, 4 матраса</p>
                </div>
                <div class="inner-signs">
                  <span class="text-muted">Files</span>
                  <ImageUploadPreview></ImageUploadPreview>
                </div>
              </div>

              <div class="col col-12 col-md-6 order-first order-md-0 d-flex flex-wrap">
                <div class="inner-signs me-4">
                  <span class="text-muted">Time</span>
                  <p class="fs-2">16:30</p>
                </div>
                <div class="inner-signs me-4">
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
              </div>
            </div>
          </form>
          <div class="block-content block-content-full d-flex justify-content-between">
            <div class="d-flex">
              <button class="btn btn-success me-2 d-flex">
                <span class="d-none d-sm-none d-md-inline">Complete</span>
                <font-awesome-icon
                  class="d-sm-inline-block d-md-none fs-4 m-auto"
                  :icon="['far', 'check-circle']"
                />
              </button>
              <button class="btn btn-setting d-flex">
                <span class="d-none d-sm-none d-md-inline">Cansel order</span>
                <font-awesome-icon
                  class="d-sm-inline-block d-md-none fs-4 m-auto"
                  :icon="['far', 'times-circle']"
                />
              </button>
            </div>
            <button class="btn btn-setting">
              <BaseSystemIcons class="interface-icons" :name="'setting'" :width="20"></BaseSystemIcons>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageUploadPreview from "@/components/ImageUploadPreview.vue";
export default {
  components: {
    ImageUploadPreview,
  },
  props: ["goProper"],
};
</script>

