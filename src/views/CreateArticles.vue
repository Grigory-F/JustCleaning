<template>
  <div>
    <div class="content">
      <div class="row">
        <div class="col">
          <div class="block block--rounded">
            <div class="block-header d-flex">
              <h3 class="block-header__title">CREATE ARTICLE</h3>
              <div class="block-header__options d-flex"></div>
            </div>
            <div class="block-content block-content--full">
              <div class="mb-4">
                <label class="mb-1 text-muted">Title</label>
                <textarea
                  v-model="content.title"
                  class="d-block text-area form-control bg-transparent text-body-color"
                  maxlength="140"
                ></textarea>
              </div>
              <div class="mb-4">
                <label class="mb-1 text-muted">Subtitle</label>
                <input type="text" v-model="content.subtitle" />
              </div>
              <div class="mb-4">
                <label class="mb-1 text-muted">Employee level</label>
                <select class="d-block p-3 fs-5 w-100 bg-transparent text-body-bg">
                  <option class value="all">All</option>
                  <option class value="beginner">Beginner</option>
                  <option class="text-primary" value="middle">Middle</option>
                  <option class="text-success" value="profi">Profi</option>
                </select>
                <div @click="logConsole">adwawdwad</div>
              </div>
              <VueEditor :editor-toolbar="customToolbar" v-model="content.body"></VueEditor>
            </div>
            <div class="block-content block-content--full d-flex justify-content-between">
              <div class="d-flex">
                <button class="btn btn-success me-2 d-flex" @click="logConsole">
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
              <div @click="logConsole">adwawdwad</div>
            </div>
            <div class="block-content block-content--full d-flex justify-content-between">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
        body: null,
      },
      id: 1,
    };
  },
  methods: {
    logConsole() {
      axios({
        url: `/api/articles/`,
        method: "POST",
        data: this.content,
      })
        .then((resp) => {
          console.log(resp);
          let newData = resp.json();
          console.log(newData);
        })
        .catch((err) => {});
    },
    logir() {
      console.log(this.content.title, this.content.subtitle, this.content.body);
    },
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