<template>
  <div>
    <div class="radio-wrapper">
      <label for="doors-radio" :class="{active: choice=='doors'}">
        Doors
        <input id="doors-radio" type="radio" name="filter" value="doors" @change="changeFilter">
      </label>
      <label for="windows-radio" :class="{active: choice=='windows'}" >
        Windows
        <input id="windows-radio" type="radio" name="filter" value="windows" @change="changeFilter">
      </label>
      <label for="others-radio" :class="{active: choice=='others'}" >
        Others
        <input id="others-radio" type="radio" name="filter" value="others" @change="changeFilter">
      </label>
      <label for="all-radio" :class="{active: choice=='all'}">
        All
        <input id="all-radio" type="radio" name="filter" value="all" @change="changeFilter" checked>
      </label>
    </div>
    {{ }}
    <div class="gallery">
      <ul>
        <li v-for="img in images" :key=img.id>
          <img 
            :src="getImgUrl(img.id)" 
            :alt="img.type"
            v-if="img.type==choice || choice == 'all'"
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
name: "Gallery",
computed: mapState(["images", "choice"]),
methods: {
  getImgUrl(pic) {
    return require('../assets/gallery/' + pic + ".jpg");
  },
  changeFilter(ev) {
    this.$store.commit("changeFilter", ev.target.value)
  }

}
}
</script>

<style lang="sass" scoped>
$mainColor: rgba(39, 20, 109, 1)
$secondColor: #366dbf
$darkAccent: #146d14

.radio-wrapper
  margin-top: 20px
  margin-bottom: 10px
  background-color: #fff
  display: flex
  flex-wrap: wrap
  justify-content: center

  .active
    background-color: $secondColor
    color: #fff

  label
    padding: 10px
    width: 150px
    border-bottom: 1px solid $darkAccent
    text-align: center
    position: relative
    cursor: pointer
    transition: all .3s ease
    font-weight: 500
    text-transform: uppercase
   
    input
      position: absolute
      width: 1px
      opacity: 0

  label:hover
    background-color: $secondColor
    color: #fff



.gallery
  padding: 50px 0px
  ul
    list-style: none
    display: grid
    gap: 20px
    justify-items: center
    align-items: center
    grid-template-columns: repeat(5, 1fr)
    

    li
      max-width: 400px
      max-height: 400px
      overflow: hidden
      transition: all .3s ease
 
      &:hover
        transform: scale(1.3)
      img
        width: 100%

@media screen and (max-width: 1050px)
  .gallery
    ul
      display: flex
      flex-wrap: wrap
      justify-content: space-evenly





</style>