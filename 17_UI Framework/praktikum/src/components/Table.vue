<template>
  <div class="Data">
    <h1>List Data</h1>
    <v-data-table
      :headers="headers"
      :items="desserts"
      item-key="name"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>
<script>
export default {
  name: "TablePage",
  data() {
    return {
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.9,
          carbs: 2.4,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.9,
          carbs: 2.4,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.9,
          carbs: 2.4,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.9,
          carbs: 2.4,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.9,
          carbs: 2.4,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.9,
          carbs: 2.4,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.9,
          carbs: 2.4,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.9,
          carbs: 2.4,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.9,
          carbs: 2.4,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.9,
          carbs: 2.4,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.9,
          carbs: 2.4,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.9,
          carbs: 2.4,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.9,
          carbs: 2.4,
          protein: 4.0,
          iron: "1%",
        },
      ],
    };
  },
  setup() {},
};
</script>
