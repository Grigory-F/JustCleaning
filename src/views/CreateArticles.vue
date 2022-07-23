<template>
  <BaseBlock blockHeader blockFooter :items="someArray">
    <template #block-description>
      <p>Some description...</p>
    </template>

    <template #block-title>CREATE ARTICLE</template>
    <template #block-header-options>
      <div class="btn btn-primary">awdadda</div>
      <div class="btn btn-transparent str">awdadda</div>
    </template>
    <template #block-content>
      <div class="mb-4">
        <label class="mb-1 text-muted">Title</label>
        <input
          v-model="content.title"
          type="text"
          class="d-block text-reset form-control bg-transparent"
        />
      </div>
      <div class="mb-4">
        <label class="mb-1 text-muted">Subtitle</label>
        <input
          type="text"
          class="d-block text-reset form-control bg-transparent"
          v-model="content.subtitle"
        />
      </div>
      <div class="mb-4">
        <label class="mb-1 text-muted">Poster</label>
        <ImageUploadPreview :uploadConfig="uploadConfig"></ImageUploadPreview>
      </div>
      <div class="mb-4">
        <label class="mb-1 text-muted">Description image</label>
        <div class="d-flex">
          <input
            type="text"
            class="d-block text-reset form-control bg-transparent"
            v-model="content.imageAlt"
          />
          <div @click="copyTitle" class="ms-2 btn btn-setting">Copy title</div>
        </div>
      </div>
      <label class="mb-1 text-muted">Content</label>
      <VueEditor :editor-toolbar="customToolbar" v-model="content.content"></VueEditor>
    </template>
    <template #block-footer>
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
    </template>
  </BaseBlock>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import ImageUploadPreview from '@/components/ImageUploadPreview.vue'
export default {
  components: {
    VueEditor,
    ImageUploadPreview
  },
  data () {
    return {
      uploadConfig: {
        onceImage: true
      },
      someArray: [
        1, 3, 4, 231, 23, 5345, 2323, 75687, 85, 46545645, 6786677565443,
        434354
      ],
      customToolbar: [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['image', 'code-block'],
        [{ header: [3, 4, 5, 6, false] }]
      ],
      content: {
        title: null,
        subtitle: null,
        content: null,
        image: null,
        imageAlt: null
      },
      id: 1
    }
  },
  methods: {
    createArticle () {
      console.log(this.content.content);
      this.$http
        .post('/api/articles/', {
          data: { ...this.content }
        })
        .then((resp) => {
          console.log(resp)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    copyTitle () {
      this.content.imageAlt = this.content.title
    }
  }
}
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
  .ql-picker-options {
    background-color: var(--bs-body-bg) !important;
  }
}
/* .ql-picker {
  .ql-picker-item {
    color: var(--bs-body-color) !important;
  }
} */
</style>
