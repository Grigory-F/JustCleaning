<template>
  <div>
    <div class="content">
      <div class="row">
        <div class="col">
          <div class="block block--rounded">
            <div class="block-header d-flex">
              <h3 class="block-header__title text-setting">CREATE ARTICLE</h3>
              <div class="block-header__options d-flex"></div>
            </div>
            <div class="block-content block-content--full">
              <div class="mb-4">
                <label class="mb-1 text-muted">Title</label>
                <input
                  v-model="content.title"
                  type="text"
                  class="d-block text-area form-control text-color-sss bg-transparent"
                />
              </div>
              <div class="mb-4">
                <label class="mb-1 text-muted">Subtitle</label>
                <input
                  type="text"
                  class="d-block text-area form-control bg-transparent text-body-color"
                  v-model="content.subtitle"
                />
              </div>
              <!-- <div class="mb-4">
                <label class="mb-1 text-muted">Employee level</label>
                <select class="d-block p-3 fs-5 w-100 bg-transparent text-body-bg">
                  <option class value="all">All</option>
                  <option class value="beginner">Beginner</option>
                  <option class="text-primary" value="middle">Middle</option>
                  <option class="text-success" value="profi">Profi</option>
                </select>
                <div>adwawdwad</div>
              </div>-->
              <label class="mb-1 text-muted">Content</label>
              <VueEditor :editor-toolbar="customToolbar" v-model="content.content"></VueEditor>
            </div>
            <div class="block-content block-content--full d-flex justify-content-between">
              <div class="d-flex">
                <button class="btn btn-success me-2 d-flex" @click="createArticle">
                  <span class="d-none d-sm-none d-md-inline">Create</span>
                  <font-awesome-icon
                    class="d-sm-inline-block d-md-none fs-4 m-auto"
                    :icon="['far', 'check-circle']"
                  />
                </button>
                <button class="btn btn-setting d-flex text-setting">
                  <span class="d-none d-sm-none d-md-inline">Cansel</span>
                  <font-awesome-icon
                    class="d-sm-inline-block d-md-none fs-4 m-auto"
                    :icon="['far', 'times-circle']"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="row">
        <div class="col" @click="logir">
          <div class="block block--rounded">
            <div class="block-content block-content--full">
              <div>adwawdwad</div>
            </div>
            <div class="block-content block-content--full d-flex justify-content-between"></div>
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
        [{ header: [3, 4, 5, 6, false] }],
      ],
      content: {
        title: null,
        subtitle: null,
        content: null,
      },
      id: 1,
    };
  },
  methods: {
    createArticle() {
      this.$http
        .post("/api/articles/", {
          data: { ...this.content },
        })
        .then((resp) => {
          console.log(resp);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    logir() {
      console.log(
        this.content.title,
        this.content.subtitle,
        this.content.content
      );
    },
  },
};
</script>

<style lang="scss">
.ql-snow {
  .ql-stroke {
    stroke: var(--bs-body-color) !important;
  }
  .ql-fill {
    fill: var(--bs-body-color) !important;
  }
  .ql-picker {
    color: var(--bs-body-color) !important;
  }
}

</style>
