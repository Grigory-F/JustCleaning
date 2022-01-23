<template>
  <div class="container">
    <div class="large-12 medium-12">
      <div>
        <img v-for="file of files" :key="file" v-bind:src="imagePreview" />
      </div>
      <label>
        File Preview
        <input
          type="file"
          id="file"
          ref="file"
          accept="image/*"
          multiple
          v-on:change="handleFileUpload()"
        />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: [],
      imagePreview: "",
      shows: false,
    };
  },
  methods: {
    handleFileUpload() {
      let reader = new FileReader();
    },
  },
};
</script>

<style>
</style>