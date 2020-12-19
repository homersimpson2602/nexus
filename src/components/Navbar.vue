<template>
  <nav id="nav">
    <div class="phone-menu-icon"
    >
      <i 
        v-show="!mobileMenu.isShow" 
        @click="showMenu"
      class="fas fa-bars"></i>
      <i 
        v-show="mobileMenu.isShow"
        @click="hideMenu"
      class="fas fa-times"></i>
    </div>
    <transition name="fade">
    <div class="mobile"
      v-show="mobileMenu.isShow"
    >
      <ul>
        <router-link
          tag="li"
          to="/"
          exact
          active-class="active"
        >
          <a href="#"
            @click="hideMenu"
          >Home</a>
        </router-link>

        <router-link
          tag="li"
          to="/services"
          active-class="active"
        >
          <a href="#"
            @click="hideMenu"
          >Our Services</a>
        </router-link>

        <router-link
          tag="li"
          to="/workshop"
          active-class="active"
        >
          <a href="#"
            @click="hideMenu"
          >Workshop</a>
        </router-link>
        <router-link
          tag="li"
          to="/gallery"
          exact
          active-class="active"
        >
          <a href="#"
            @click="hideMenu"
          >Gallery</a>
        </router-link>
      </ul>
    </div>
    </transition>
    <div class="wrapper desctop">
      <ul>
        <router-link
          tag="li"
          to="/"
          exact
          active-class="active"
        >
          <a href="#">Home</a>
        </router-link>

        <router-link
          tag="li"
          to="/services"
          active-class="active"
        >
          <a href="#">Our Services</a>
        </router-link>

        <router-link
          tag="li"
          to="/workshop"
          active-class="active"
        >
          <a href="#">Workshop</a>
        </router-link>
        <router-link
          tag="li"
          to="/gallery"
          exact
          active-class="active"
        >
          <a href="#">Gallery</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
import {mapState} from "vuex";

export default {
name: "Navbar",
computed: mapState(["mobileMenu"]),
methods: {
  showMenu() {
    this.$store.commit("showMobileMenu")
  },
  hideMenu() {
    if(this.mobileMenu.isShow) {
      this.$store.commit("hideMobileMenu")
    }
  },
  fixedOnTop() {

  }
}
}

window.addEventListener("scroll", () => {
  const $navBar = document.querySelector("#nav")
  const $header = document.querySelector("#header")
  if (scrollY > 700) {
    $navBar.style.position = "fixed"
    $navBar.style.top = "0px"
  } else {
    $navBar.style.position = "static"
  }
})
</script>

<style lang="sass" scoped>

$mainColor: #27146D
$secondColor: #366dbf
$darkAccent: #146d14


nav
  background-color: $mainColor
  width: 100%
  z-index: 1000


.phone-menu-icon
  display: none

  i
    color: $mainColor
    font-size: 3rem

.wrapper
  max-width: 1200px
  padding: 0 15px
  margin: 0 auto


ul
  list-style: none
  display: flex

  a
    display: block
    text-decoration: none
    text-transform: uppercase
    padding: 10px 20px
    color: #fff
    height: 100%
    transition: all .2s ease

    &:hover
      background-color: $secondColor
    

  

.active
  color: red
  background-color: $darkAccent


@media screen and (max-width: 650px)
  .desctop
    display: none

  .phone-menu-icon
    display: block
    position: fixed
    top: 8px
    right: 8px
    background-color: #fff
    padding: 5px
    border-radius: 5px
    

  .mobile
    z-index: 1000
    position: fixed
    top: 10px
    right: 60px
    
    ul
      display: flex
      flex-direction: column
      background-color: $mainColor

.fade-enter-active, .fade-leave-active
  transition: all .3s
  top: 10px
.fade-enter, .fade-leave-to
  opacity: 0
  top: -200px

</style>