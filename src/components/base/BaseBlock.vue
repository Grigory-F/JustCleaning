<template>
  <div class="content">
    <div class="row">
      <div class="col">
        <div class="block rounded-3">
          <div class="block-header d-flex">
            <h3 class="block-title">{{blockTitle}}</h3>
            <div class="block-options d-flex"></div>
          </div>
          <div class="block-content block-content-full">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        blockTitle: {
            type: String
        }
    },
data: () => ({
    
})
}
</script>

<style>

</style>