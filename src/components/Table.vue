<template>
  <BaseBlock :blockTitle="'Previous Orders'">
    <div class="table-responsive">
      <table class="table table-borderless table-striped table-responsive">
        <thead>
          <tr class="text-muted">
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody class="table-striped">
          <tr v-for="(item, index) of items" :key="index" class="text-light">
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
  </BaseBlock>
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