<template>
  <div class="restaurant--card">
    <div :style="changeBg" class="restaurant--img">

    </div>
    <div class="restaurant--info">
      <div class="top">
        <p class="name">{{ info_restaurant.name }}</p>
        <p class="rate"><span>{{ info_restaurant.note}}</span></p>
      </div>
      <p class="time">{{ info_restaurant.drive_time }}</p>
    </div>
  </div>
</template>



<script>
import { computed } from 'vue'
export default {
 name: "RestaurantCard",
 props: {
   info_restaurant: Object
 },
  setup(props){
    console.log(props.info_restaurant)
    const changeBg = computed(() => {
      return {
        backgroundImage: `url(${props.info_restaurant.image}`
      }
    })
    return {
    changeBg
    }
  }
}  

</script>



<style lang='scss'>
.restaurant--card {
  width: 32%;
  height: 30vh;
}

.restaurant--img { 
  height: 70%;
    background-size: cover;
    background-position: center;
    background-image: url('../assets/ubereats_subway.png');
  }

  .restaurant--info{
    .top {
      margin: 10px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .rate {
        background-color: #eee;
        height: 30px;
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.8rem;
        border-radius: 50%;
      }
    }
    .time {
      font-size: 0.9rem;
    }
  }
</style>