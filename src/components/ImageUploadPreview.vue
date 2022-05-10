<template>
  <div class="drop-grid">
    <div class="box-images" v-for="image of arrayFiles" :key="image">
      <picture>
        <img class="box-images__images box-images__images--square" :src="image" />
      </picture>
      <div class="box-images__coverage">
        <div @click="deleteImage(image)" class="box-images__inner-icon">
          <SystemIcons :name="'close'" :width="30"></SystemIcons>
        </div>
      </div>
    </div>
    <label class="drop-zone mb-0">
      <input type="file" class="d-none" accept="image/*" @change="changeImages" multiple />
      <span
        class="drop-zone__sign fs-2 text-muted text-center"
      >{{ !arrayFiles.length ? "Drop or select files" : '+'}}</span>
    </label>
    <!-- <div @click="onsubmit">Отправить</div>
    <progress max="100" min="10"></progress> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      arrayFiles: [],
      files: null,
      unraw: null,
    };
  },
  methods: {
    /* async fething() {
      const fethingg = await fetch("/api/posts");
      const data = await fethingg.json();
      console.table(data);
    }, */
    changeImages(e) {
      this.unraw = e.target.files;
      this.files = Array.from(e.target.files);
      this.files.forEach((file) => {
        console.log(this.unraw.name);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
          this.arrayFiles.push(event.target.result);
          this.arrayFiles.filter((item, index) => {
            console.log(item);
            return this.arrayFiles.indexOf(item) == index;
          });
        };
      });
    },
    async onsubmit() {
      let formData = new FormData();
      this.unraw.forEach((thatFile, index) => {
        let file = this.unraw[index];
        formData.append(thatFile.name, file);
      });

      axios
        .post("/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          console.log("SUCCESS!!");
        });
    },
    deleteImage(images) {
      this.arrayFiles.splice(this.arrayFiles.indexOf(images), 1);
    },
  },
};
</script>