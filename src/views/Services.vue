<template>
  <div>
    <h1>Services</h1>
    <div class="services-tab">
      <ul class="serv-nav">
        <li 
          @click="showWindows"
          :class="{active : windows}"
        >Window and Doors</li>
        <li 
          @click="showRefurb"
          :class="{active : refurbishment}"
        >Refurbishment and Draught Proofing</li>
        <li 
          @click="showBespoke"
          :class="{active : bespoke}"
        >Bespoke joinery</li>
      </ul>
      <div class="view-tab">
        <transition name="fade">
        <div class="content-item" v-show="windows">
          <h2>Windows and Doors</h2>
          <p class="subhead">Bespoke sash windows, casement windows and doors have been a speciality of ours for over 30 years.</p>
          <div class="main-info">
            <div class="main-info__text">
              <p>Combining the vast experience and expertise of our specialist joiners with truly competitive prices and high quality timber, we provide a complete joinery service to domestic and commercial customers across London.</p>
              <p>We offer a service like no other. We create beautiful new sash windows, casement windows and doors, including sliding folding doors, for a variety of different requirements and whether you need pieces for a new build project, a property renovation or you just want expertly crafted timber windows and doors to replace existing ones, we will be able to provide an attractive and effective solution.</p>
              <p>With over three decades of experience as specialist joiners, we have the expertise and skills to create an incredible range of door and window styles and sizes.</p>
              <p>As a customer focused company, we always provide our doors and wooden windows alongside installation so that we can make sure the fit is carried out to the same standard as the manufacture.</p>
              <p>Using traditional and modern techniques, our specialist joiners can build windows and doors to last for decades and we are proud of the level of workmanship that goes into every creation.</p>
              <p>Although we are more than happy to provide individual bespoke timber window and door services, we usually find ourselves replacing everything across an entire building or fascia to get a consistent, attractive and fitted look.</p>
              <p>Our fully equipped workshop in Kimpton Bottom, Hertfordshire, enables us to provide our window and joinery services to domestic and commercial customers across North London and the Home Counties, including Watford, Barnet, Enfield, Hendon, St Albans, Hatfield, Hitchin, Welwyn Garden City, Stevenage, Islington, Harpenden, Hampstead &amp; Potters Bar and North London.</p>
              <p>For high quality and competitively priced wooden windows and doors that you know will last you for many years to come, speak to the experts here at Nexus Restorations.</p>
              <p>Contact us today to discuss your requirements with one of our helpful and friendly team. They are always on hand to answer any questions you may have and provide honest and impartial advice.</p>
            </div>
            <div class="main-info__img">
              <img src="../assets/services/window.jpg" alt="window">
            </div>
          </div>
        </div>
        </transition>
        <transition name="fade">
        <div class="content-item" v-show="refurbishment">
          <h2>Refurbishment and Draught Proofing</h2>
          <div class="main-info">
            <div class="main-info__text">
              <p>We work alongside private domestic homeowners and housing developers to effectively and accurately refurbish and restore joinery and install draught proofing in homes and businesses across North London.</p>
              <p>As specialist joiners with over 30 years experience in the industry, we utilise the latest techniques and equipment to expertly restore joinery to complement existing property features or install energy efficient and money saving draught proofing on wooden windows and doors.</p>
              <h4>Joinery Restoration</h4>
              <p>We know how to restore joinery back to its original best. We have been doing so for many customers throughout North London and we count ourselves as one of the industry's leading specialists.</p>
              <p>We have over three decades of experience in expertly restoring and renovation existing joinery so that it perfectly complements your property's decor and style. If you need your doors completely replaced, you can rely on us to take care of everything for you.</p>
              <h4>Draught Proofing</h4>
              <p>Let us draught proof your home or business and save yourself a fortune in energy bills.</p>
              <p>You may not realise it but warm air could be escaping from your property. If so, you are wasting vast sums of money. We can draught proof your home or commercial building and prevent cold air getting in and warm air getting out.</p>
              <p>Not only will this make your heating systems more effective, it will also keep your property warmer and lower your energy bills dramatically.</p>
              <p>We also provide domestic and commercial customers from across North London and the Home Counties with a wide variety of restoration services, ranging from single restoration elements to complete re-builds.</p>
              <p>Based in Kimpton Bottom, Hertfordshire, we help commercial and domestic customers from across North London and the Home Counties refurbish their properties. Our work regularly takes us to Watford, Barnet, Enfield, Hendon, St Albans, Hatfield, Hitchin, Welwyn Garden City, Stevenage, Islington, Harpenden, Hampstead &amp; Potters Bar and North London.</p>
              <p>If your domestic or commercial property needs refurbishment and you require beautifully restored joinery or installations of draught proofing, look no further than the timber windows and joinery specialists here at Nexus Restorations.</p>
              <p>Contact us today to discuss your requirements with one of our helpful and friendly team. They are always on hand to answer any questions you may have and provide honest and impartial advice.</p>
            </div>
            <div class="main-info__img">
              <img src="../assets/services/refurb.jpg" alt="window">
            </div>
          </div>
        </div>
        </transition>
        <transition name="fade">
        <div class="content-item" v-show="bespoke">
          <h2>Bespoke Joinery</h2>
          <p class="subhead">We guarantee beautiful and functional new joinery, whether it is a new window, door or piece of furniture.</p>
          <div class="main-info">
            <div class="main-info__text">
              <p>Our superbly equipped workshop is manned by experienced and highly skilled joiners who receive raw timber in one door and output beautifully crafted new products at the other end.</p>
              <p>We work to plans from architects and designers or match our work to other sash and casement windows, doors and fittings already in situ. This is important in maintaining the look and feel of your property.</p>
              <p>Although we are happy to work to plans and designs from architects, our real expertise and speciality lies in creating bespoke designs and creations from the finest timber.</p>
              <p>Whatever your joinery requirements, our skilled and specialist joiners will be able to meet them and even exceed your expectations. Combining competitive prices, vast expertise and the highest quality materials, we offer domestic and commercial customers the complete bespoke joinery service.</p>
              <p>We believe in providing the same level of quality and service at all times and our bespoke joinery is suitable for corporate properties, businesses, offices and grand homes as well as traditional two storey homes and conversion projects.</p>
              <p>At Nexus Restoration you get the best of everything; specialist design that can fit sash and casement windows, doors and furniture into any space, high accuracy and fast turnaround cutting that’s hand finished by expert craftsmen, excellent manufacturing of high quality custom made furniture and frames and our comprehensive service that includes delivery and installation.</p>
              <p>Based in Kimpton Bottom, Hertfordshire, we provide expert bespoke joinery services to domestic and commercial customers across North London and the Home Counties, including Watford, Barnet, Enfield, Hendon, St Albans, Hatfield, Hitchin, Welwyn Garden City, Stevenage, Islington, Harpenden, Hampstead &amp; Potters Bar and North London.</p>
              <p>First class joinery at incredibly fair and competitive prices - that is the Nexus Restorations difference. If you are in need of beautiful and exquisitely crafted joinery for your domestic or commercial property, look no further than a well known joinery company with over 30 years experience.</p>
              <p>Contact us today to discuss your requirements with one of our helpful and friendly team. They are always on hand to answer any questions you may have and provide honest and impartial advice.</p>
            </div>
            <div class="main-info__img">
              <img src="../assets/services/bespoke.jpg" alt="window">
            </div>
          </div>
        </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
name: "Services",
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

h1
  display: block
  text-align: center
  margin: 30px auto

.services-tab
  max-width: 1200px
  padding: 15px 0
  margin: 0 auto

  ul
    list-style: none
    display: flex

    li
      padding: 10px
      margin-right: 5px
      border: 1px solid $mainColor
      border-bottom: none
      border-top-left-radius: 5px
      border-top-right-radius: 5px
      background-color: #fff
      cursor: pointer
    


    .active
      position: relative
      top: 1px
      color: $darkAccent
      transition: all .3s ease

.view-tab
  border: 1px solid $mainColor
  border-radius: 5px
  border-top-left-radius: 0px
  padding: 20px

  .content-item
    h2
      margin-bottom: 20px
      border-bottom: 1px solid $darkAccent
    
    .subhead
      font-weight: 500
      margin-bottom: 10px
      

    .main-info
      display: flex
      flex-wrap: wrap
      align-items: center
      justify-content: space-between

      &__text
        max-width: 70%
        padding: 15px

        h4
          margin: 30px 0px 10px
    
        p
          line-height: 1.4rem
          margin-bottom: 10px
        
      &__img
        max-width: 360px

        img
          border-radius: 5px
          width: 100%



// Vue animations 
.fade-enter-active, .fade-leave-active
  transition: opacity .3s

.fade-enter, .fade-leave-to
  opacity: 0


@media screen and (max-width: 1050px)
  .view-tab

    .content-item
      .main-info
        flex-direction: column-reverse
        &__text
          max-width: 100%
          padding: 10px 0px

</style>