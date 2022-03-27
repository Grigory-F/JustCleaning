<template>
  <div class="content">
    <div class="row">
      <div class="col">
        <div class="block block-rounded">
          <div class="block-header d-flex">
            <h3 class="block-title">CURRENT ORDER</h3>
            <div class="block-options d-flex"></div>
          </div>
          <div class="block-content block-content-full">
            <div class="table-responsive">
              <table class="table table-borderless table-striped table-responsive">
                <thead>
                  <tr>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody class="table-striped">
                  <tr v-for="(item, index) of items" :key="index">
                    <td style="min-width: 250px" class="p-4">{{item.was_the}}</td>
                    <td class="p-4">{{item.price}}</td>
                    <td
                      class="p-4"
                      :class="[item.status == 'canselled' ? 'text-danger' : '']"
                    >{{item.discount}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: { first: "John", last: "Doe" },
          was_the: "Male",
          price: 42,
          discount: 10,
          status: "canselled",
        },
        {
          name: { first: "Jane", last: "Doe" },
          was_the:
            "Ipsum molestias autem earum at rerum, aliquam unde maxime modi cumquew.",
          price: 42,
          discount: 10,
          status: "canselled",
        },
        {
          name: { first: "Jane", last: "Doe" },
          was_the:
            "Ipsum molestias autem earum at rerum, aliquam unde maxime modi cumquee.",
          price: 42,
          discount: 10,
          status: "succses",
        },
      ],
    };
  },
};
</script>

<style>
</style>