<template>
  <footer>
    <div class="footer-wrapper">
      <div class="footer-item">
        <ul>
          <router-link
            tag="li"
            to="/workshop"
            active-class="active"
          >
            <a href="#">Quality standards</a>
          </router-link>
          <router-link
            tag="li"
            to="/services"
            active-class="active"
          >
            <a href="#"
              @click="showWindows"
            >Sash Windows</a>
          </router-link>
          <router-link
            tag="li"
            to="/services"
            active-class="active"
          >
            <a href="#"
              @click="showWindows"
            >Casement Windows</a>
          </router-link>
          <router-link
            tag="li"
            to="/services"
            active-class="active"
          >
            <a href="#"
              @click="showWindows"
            >Doors</a>
          </router-link>
          <router-link
            tag="li"
            to="/services"
            active-class="active"
          >
            <a href="#"
              @click="showRefurb"
            >Refurbishment</a>
          </router-link>
          <router-link
            tag="li"
            to="/services"
            active-class="active"
          >
            <a href="#"
              @click="showBespoke"
            >Bespoke joinery</a>
          </router-link>
        </ul>
      </div>
      <div class="footer-item">
        <ul class="footer-contact">
          <li>
            <p><i class="fas fa-map-marker-alt"></i>Unit 8, Tallents Farm Industrial Estate, Kimpton Bottom, Hertfordshire. SG4 8EU</p>
          </li>
          <li>
            <p><i class="fas fa-phone"></i><a href="tel:01438 831058">01438 831058</a></p>
          </li>
          <li>
            <p><i class="fas fa-mobile-alt"></i><a href="tel:07970 060156">07970 060156</a></p>
          </li>
          <li>
            <p><i class="far fa-envelope"></i><a href="mailto:admin@nexusrestorations.com">admin@nexusrestorations.com</a></p>
          </li>
        </ul>
      </div>
      <Enquiry />
    </div>
    <div class="copyright">
      Y.S. 2020
    </div>
  </footer>
</template>

<script>
import {mapState} from 'vuex'
import Enquiry from '@/components/Enquiry.vue'
export default {
name: "Footer",
components: {Enquiry},
computed: mapState(["windows", "refurbishment", "bespoke"]),
methods: {
  showWindows() {
    this.$store.commit('showWindows')
  },
   showRefurb() {
    this.$store.commit('showRefurb')
  },
   showBespoke() {
    this.$store.commit('showBespoke')
  }
}
}
</script>

<style lang="sass" scoped>

$mainColor: rgba(39, 20, 109, 1)
$secondColor: #366dbf
$darkAccent: #146d14

.footer-wrapper
  max-width: 1200px
  margin: 0 auto
  padding: 20px 15px
  display: flex
  justify-content: space-between

footer
  width: 100%
  min-height: 200px
  background-color: #222
  color: #ffffff


  .footer-item
    opacity: .7

    ul
      list-style: none
      display: flex
      flex-direction: column
      max-width: 360px

      li
        margin-bottom: 10px

        i
          color: $darkAccent
          margin-right: 8px
          width: 15px

        a
          color: #fff

.copyright
  background-color: #111
  width: 100%
  text-align: center
  font-size: .9rem
  padding: 2px 0
  color: #ccc


@media screen and (max-width: 950px)
  .footer-wrapper
    flex-wrap: wrap
    justify-content: flex-end


@media screen and (max-width: 750px)
  .footer-wrapper
    display: flex
    flex-direction: column-reverse
    align-items: center

    ul
      align-items: start
      margin-bottom: 30px

    .footer-contact
      margin-top: 30px


@media screen and (max-width: 400px)
  .footer-wrapper
      display: flex
      flex-direction: column-reverse
      align-items: center

      ul
        width: 100%

      .footer-contact
        width: 100%
</style>