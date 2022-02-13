<template>
<!-- HTML ++ (vue/jsx) -->
  <div class='home'>
    <RestaurantRow v-for='(data, i) in data_restaurant' :key='i' :three_restaurant='data' />
  </div>
</template>

<script>
// INPORTS
import BDD from '../BDD'
import { onMounted, ref } from '@vue/runtime-core'

// COMPONENTS
import RestaurantRow from '../components/RestaurantRow.vue'


export default {
  name:'Home',
  components: { 
    RestaurantRow
  },
  setup() {
    // console.log(BDD)
    class Restaurant {
      constructor(name, note, image, drive_time) {
        this.name = name
        this.note = note
        this.image = image
        this.drive_time = drive_time
      }
    }

    let data_restaurant = ref([])

    const makeDataRestaurant = () => {
      let three_restaurant = []

      for(const restaurant of BDD) {
        const new_restaurant = new Restaurant(restaurant.name, restaurant.note, restaurant.image, restaurant.drive_time)

        if(three_restaurant.length === 2) {
          three_restaurant.push(new_restaurant)
          data_restaurant.value.push(three_restaurant)
          three_restaurant = []
        } else {
          three_restaurant.push(new_restaurant)
        }
      }
    }

    onMounted(makeDataRestaurant)
    // RETURN
    return {
      data_restaurant,
    }

  }
}
// ^^^ JS ^^^//
</script>

<style>

</style>