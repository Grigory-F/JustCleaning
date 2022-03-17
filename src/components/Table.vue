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
                <b-table borderless striped responsive :items="items" :fields="fields">
                  <template #cell(name)="name">
                    <a class="fw-medium" href="#" style="white-space:nowrap">{{ name.value}}</a>
                  </template>

                  <template #cell(was_the)="was" md="5">
                    <span>{{ was.value }}</span>
                  </template>
                  <template #cell(priceDiscount)="data">
                    <div style="white-space:nowrap">
                      <span class="fw-medium">{{ data.item.price }} ₽</span>
                      <span class="text-muted">- {{data.item.discount}}%</span>
                    </div>
                  </template>
                  <template #cell(status)="status">
                    <div
                      class="d-flex"
                      :class="[status.value == 'canselled' ? 'text-danger' : 'text-success']"
                    >
                      <span class="status-sign d-none d-md-block" href="#">{{ status.value }}</span>

                      <font-awesome-icon
                        :icon="['far', status.value == 'canselled' ? 'times-circle' : 'check-circle']"
                        class="d-md-none m-auto"
                        size="lg"
                      />
                    </div>
                  </template>
                </b-table>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
</template>

<script>
export default {
data() {
    return {
        fields: [
        {
          key: "name",
          label: "Name",
          formatter: "fullName",
        },
        {
          key: "was_the",
          label: "What was there",
        },

        { key: "priceDiscount", label: "Price" },
        "status",
      ],
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
            "Ipsum molestias autem earum at rerum, aliquam unde maxime modi cumque.",
          price: 42,
          discount: 10,
          status: "canselled",
        },
        {
          name: { first: "Jane", last: "Doe" },
          was_the:
            "Ipsum molestias autem earum at rerum, aliquam unde maxime modi cumque.",
          price: 42,
          discount: 10,
          status: "succses",
        },
      ],
    }
}
}
</script>

<style>

</style>