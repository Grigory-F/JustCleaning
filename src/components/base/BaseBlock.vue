<template>
  <div class="content">
    <div class="row">
      <div class="col">
        <div class="block block--rounded">
          <div class="block-header d-flex">
            <h3 class="block-header__title">{{blockTitle}}</h3>
            <div class="block-header__options d-flex"></div>
          </div>
          <div class="block-content block-content--full">
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