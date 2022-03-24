<template>
  <div class="content">
    <b-row>
      <b-col>
        <div class="block block-rounded">
          <div class="block-header d-flex">
            <h3 class="block-title">CURRENT ORDER</h3>
            <div class="block-options d-flex"></div>
          </div>
          <div class="block-content block-content-full">
            <div class="mb-4">
              <label class="mb-1">Title</label>
              <textarea class="d-block text-area form-control bg-transparent text-main" maxlength="140"></textarea>
            </div>
            <VueEditor :editor-toolbar="customToolbar"></VueEditor>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  components: {
    VueEditor,
  },
  data() {
    return {
      customToolbar: [
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["image", "code-block"],
      ],
    };
  },
};
</script>

<style>
.text-area {
    resize: none;
    /* height: 70px; */
    width: 100%;
    outline: none;
}
</style>