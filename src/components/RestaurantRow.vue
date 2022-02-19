<template>
  <div class="restaurant--row">
    <h2 class="title">Nos Restaurant</h2>
    <div class="wrapper--card">
      <RestaurantCard  v-for='(card, i) in three_restaurant' :key='i' :info_restaurant='card'/>
    </div>
  </div>
</template>



<script>
import RestaurantCard from './RestaurantCard.vue'

export default {
  name: "RestaurantRow",
  components: { 
    RestaurantCard, 
  },
  props:{
    three_restaurant: Array
  }
}
</script>



<style lang='scss'>
.restaurant--row {
  .title {
    margin: 1.5rem 0;
    font-size: 2rem;
  }
  .wrapper--card {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>