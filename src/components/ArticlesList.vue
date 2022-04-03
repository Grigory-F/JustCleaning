<template>
  <div class="content">
    <div class="row">
      <div class="col">
        <div class="block block-rounded">
          <div class="block-header d-flex">
            <h3 class="block-title">CURRENT ORDER</h3>
            <div class="block-options d-flex"></div>
          </div>
          <div class="block-content block-content-full">
            <article class="d-flex flex-md-wrap">
              <div class="me-4">
                <picture>
                  <!-- <source type="image/avif" :srcset="require('@/assets/kiska.avif')" />
                  <source type="image/webp" :srcset="require('@/assets/kiska.webp')" /> -->
                  <img class="" :src="require('@/assets/kiska.jpg')" alt />
                </picture>
              </div>
              <div class>
                <div class="d-flex justify-content-between mb-3">
                  <h3
                    class="me-4 fs-4 m-0"
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, commodi.</h3>
                  <time class="text-muted fs-6">29.06.2022</time>
                </div>
                <p
                  class="fs-5"
                >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed dolorum corporis sit laboriosam suscipit necessitatibus magni quos quidem maxime amet.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    sers: "Wars trt",
  }),
};
</script>

<style>
</style>