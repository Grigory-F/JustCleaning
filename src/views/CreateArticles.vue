<template>
  <div class="content">
    <div class="row">
      <div class="col">
        <div class="block block-rounded">
          <div class="block-header d-flex">
            <h3 class="block-title">CREATE ARTICLE</h3>
            <div class="block-options d-flex"></div>
          </div>
          <div class="block-content block-content-full">
            <div class="mb-4">
              <label class="mb-1 text-muted">Title</label>
              <textarea
                class="d-block text-area form-control bg-transparent text-body-color"
                maxlength="140"
              ></textarea>
            </div>
            <div class="mb-4">
              <label class="mb-1 text-muted">Employee level</label>
              <select class="d-block p-3 fs-5 w-100 bg-transparent text-body-bg">
                <option class value="all">All</option>
                <option class value="beginner">Beginner</option>
                <option class="text-primary" value="middle">Middle</option>
                <option class="text-success" value="profi">Profi</option>
              </select>
            </div>
            <VueEditor :editor-toolbar="customToolbar"></VueEditor>
          </div>
        </div>
      </div>
    </div>
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