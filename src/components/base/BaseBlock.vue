<template>
  <div class="content">
    <slot name="block-description">Some-description</slot>
    <div class="row">
      <div class="col">
        <div class="block block--rounded">
          <div class="block-loading" v-if="isLoading">
            <BaseSystemIcons class="interface-icons" :name="'setting'" :width="20"></BaseSystemIcons>
          </div>
          <div v-if="blockHeader" class="block-header d-flex">
            <h3 class="block-header__title">
              <slot name="block-title"></slot>
            </h3>
            <div class="block-header__options d-flex">
              <BaseButton variant="primary">
              </BaseButton>
              <div class=""></div>
              <slot name="block-header-options"></slot>
            </div>
          </div>
          <div class="block-content block-content--full">
            <slot name="block-content"></slot>
          </div>
          <div v-if="blockFooter" class="block-content block-content--full">
            <slot name="block-footer"></slot>
          </div>
          <!-- <div v-for="(item, index) of items" :key="index">
            <slot name="todo" :item="item">{{item[index]}}</slot>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseBlock",
  props: {
    blockFooter: {
      type: Boolean,
      required: false,
    },
    blockHeader: {
      type: Boolean,
      required: false,
    },
    items: {
      type: Array,
      required: false,
      default: [1, 2, 3, 4, 5],
    },
    isLoading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data: () => ({}),
};
</script>

