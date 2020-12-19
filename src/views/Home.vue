<template>
  <div class="home-page">
    <transition name="fade">
    <div 
      class="success"
      v-show="successEnquiry"
    >
      Request sent successfully
    </div>
    </transition>
    <div class="wrapper-heading">
      <div class="home-page__heading">
        <h1>One of Hertfordshire’s leading Window &amp; Joinery Specialists</h1>
        <h2>Offering high quality sash and casement windows at incredibly fair and reasonable prices</h2>  
      </div>
      <a href="#welcome" class="details">
        more details
        <i class="fas fa-chevron-down"></i>
      </a>
    </div>
    <div class="welcome" id="welcome">
      <div class="wrapper">
        <h3>Welcome to Nexus Restorations</h3>
        <p class="sub-head">One of Hertfordshire’s leading window and joinery specialists,
           we offer high quality sash and casement windows and external front 
          and back doors at incredibly fair and reasonable prices.
        </p>
        <p>
          We offer domestic and commercial customers from across North London and the surrounding Home Counties the complete sash and casement windows and joinery service.
          Combining competitive prices with over 30 years experience in joinery and the very best machinery in our workshop in Hertfordshire, we offer a versatile range of possibilities to all our customers.
        </p>
      </div>
      <p class="our-services">Our comprehensive range of bespoke joinery services includes:</p>
      <ul class="our-services-list">
        <router-link
          tag="li"
          to="/windows"
          active-class="active"
        >
          <a href="#"><img src="../assets/home-page-links/windows-doors.jpg" alt="Windows and Doors"></a>
          <div>Windows and Doors</div>
        </router-link>
        <router-link
          tag="li"
          to="/workshop"
          active-class="active"
        >
          <a href="#"><img src="../assets/home-page-links/refurb.jpg" alt="Windows and Doors"></a>
          <div>Refurbishment</div>
        </router-link>
        <router-link
          tag="li"
          to="/workshop"
          active-class="active"
        >
          <a href="#"><img src="../assets/home-page-links/bespoke.jpg" alt="Windows and Doors"></a>
          <div>Bespoke Joinery</div>
        </router-link>
        <router-link
          tag="li"
          to="/workshop"
          active-class="active"
        >
          <a href="#"><img src="../assets/home-page-links/drought.jpg" alt="Windows and Doors"></a>
          <div>Draught Proofing</div>
        </router-link>
        <router-link
          tag="li"
          to="/workshop"
          active-class="active"
        >
          <a href="#"><img src="../assets/home-page-links/repair.jpg" alt="Windows and Doors"></a>
          <div>Sash and Casement Window Repair</div>
        </router-link>
      </ul>
      <div class="wrapper">
        <div class="details-info">
          <div class="details-info__text">
            <p>Based in our specialist workshop in Hertfordshire, our highly skilled and experienced joiners will design and craft your beautiful new wooden windows or doors to your exact specifications and the recommended double glazed sealed units or single glazing. Whatever your requirements, we have the skills, capacity and expertise to provide a comprehensive and cost effective solution. Everything we make is fully painted by hand in our workshop to ensure good and thick coverage in advance before being fully installed.</p>
            <p>We have developed a reputation for quality work at competitive prices and take pride in the fact that so many of our customers either come back to us time and again or tell others about us.</p>
            <p>Still not convinced? You can see some examples of our work by visiting our Gallery page</p>
            <p>Based in Kimpton Bottom, Hertfordshire, we provide our window and joinery services to domestic and commercial customers across North London and the Home Counties, including Watford, Barnet, Enfield, Hendon, St Albans, Hatfield, Hitchin, Welwyn Garden City, Stevenage, Islington, Harpenden, Hampstead &amp; Potters Bar and North London.</p>
            <p>If your domestic or commercial property needs bespoke new sash or casement windows fitted, restored or refurbished or draught proofing added, look no further than the windows and joinery specialists here at Nexus Restorations.</p>
            <p>Contact us today to discuss your requirements with one of our helpful and friendly team. They are always on hand to answer any questions you may have and provide honest and impartial advice.</p>
          </div>
          <div class="details-info__img">
            <img src="../assets/nexus-cars.jpg" alt="Nexus_cars">
          </div>
        </div>
        <div class="contact-info">
          <h3>Contact us</h3>
          <p>If you would like any more information about us or the services that we offer, please contact us via the following methods:</p>
          <div class="contact-info__container">
            <ul>
              <li>
                <p><i class="fas fa-map-marker-alt"></i><span>Company Address:</span>Unit 8, Tallents Farm Industrial Estate, Kimpton Bottom, Hertfordshire. SG4 8EU</p>
              </li>
              <li>
                <p><i class="fas fa-phone"></i><span>Telephone:</span><a href="tel:01438 831058">01438 831058</a></p>
              </li>
              <li>
                <p><i class="fas fa-mobile-alt"></i><span>Mobile:</span><a href="tel:07970 060156">07970 060156</a></p>
              </li>
              <li>
                <p><i class="far fa-envelope"></i><span>Email:</span><a href="mailto:admin@nexusrestorations.com">admin@nexusrestorations.com</a></p>
              </li>
            </ul>
            <form action="" @submit.prevent="submitEnquiry">
              <p>Alternatively you can fill out an enquiry form below</p>
              <label for="name">
                Name:*
                <input id="name" type="text" required placeholder="Full Name..."
                  v-model="modalWindow.name"
                >
              </label>
              <label for="email">
                Email:*
                <input id="email" type="email" required placeholder="Email Address..."
                  v-model="modalWindow.email"
                >
              </label>
              <label for="tel">
                Telephone:*
                <input id="tel" type="tel" required placeholder="Telephone Number..."
                  v-model="modalWindow.tel"
                >
              </label>
              <label for="enquiry">
                Enquiry:*
                <textarea name="" id="enquiry" cols="40" rows="8" required
                  v-model="modalWindow.enquiry"
                ></textarea>
              </label>
                <button type="subbmit">Send Enquiry</button>
            </form>
          </div>
        </div>
      </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2464.865925366288!2d-0.3198327840656102!3d51.84514429377284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487639dbb85eaf5b%3A0x54be0ac5e3c43cd1!2zVGFsbGVudHMgRmFybSBLaW1wdG9uIEJvdHRvbSwgS2ltcHRvbiwgSGl0Y2hpbiBTRzQgOEVVLCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!5e0!3m2!1sru!2sru!4v1608200706340!5m2!1sru!2sru" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
    <div class="about-info">
      <h3 class="about">About the Company</h3>
      <img src="" alt="">
      <div class="about-info__text">
        <p>Based in Hertfordshire, we offer high quality bespoke windows and joinery to customers across North London and the surrounding Home Counties.</p>
        <p>Established in 1999 after a 15 year sole tradership, Nexus Restorations provide first class windows and doors to domestic and commercial customers. Many private homes, offices, factories, new builds, schools and shops from across the region have had sash windows and casement windows supplied and fitted by us.</p>
        <p>We work with private clients to restore homes and commercial clients to complete large properties and new builds; in every project it’s a complete service. We take timber into our workshop and beautifully finished bespoke pieces are created to our client’s exact specifications.</p>
      </div>
      <div class="collapse-wrapper">
        <div class="collapse-item">
          <h4>Previous Clients</h4>
          <i class="fas fa-plus" @click="toogleCollapse"></i>
          <div class="collapse-item__content">
            Nexus Restorations have been working on projects in the window &amp; joinery industry for over three decades, on a huge variety of domestic and commercial projects.
          </div>
        </div>
        <div class="collapse-item">
          <h4>Our Service</h4>
          <i class="fas fa-plus" @click="toogleCollapse"></i>
          <div class="collapse-item__content">
            With over three decades of experience in our skilled joinery team, we combine outstanding quality with competitive prices to provide a complete window &amp; joinery service.
          </div>
        </div>
        <div class="collapse-item">
          <h4>Our Workshop</h4>
          <i class="fas fa-plus" @click="toogleCollapse"></i>
          <div class="collapse-item__content">
            Our large workshop is manned by highly skilled &amp; experienced joiners who have the expertise and knowledge to create almost anything from high quality wood.
          </div>
        </div>
      </div>
    </div>
    <h3 class="testimonials">Testimonials</h3>
        <div class="testimonials-info">
          <div class="testimonials-info__item">
            <i class="fas fa-user-edit"></i>
            <p>"Many thanks for a great job, a very professional service. Lovely results and stress free!"</p>
            <span>Mrs L. Dillon, Harpenden</span>
          </div>
          <div class="testimonials-info__item">
            <i class="fas fa-user-edit"></i>
            <p>"Thanks for producing and installing our superb new sash windows and doors with no mess left behind! Our house looks new again."</p>
            <span>Mrs R. Smith, Finchley</span>
          </div>
          <div class="testimonials-info__item">
            <i class="fas fa-user-edit"></i>
            <p>"Thank you for our lovely new doors and windows. We couldn’t have asked for a more professional service. The finished appearance is superb."</p>
            <span>Mr and Mrs Harris, Potters Bar</span>
          </div>
          <div class="testimonials-info__item">
            <i class="fas fa-user-edit"></i>
            <p>"Dear Steve, Many thanks for the excellent work on our windows. We’re really pleased with them &amp; the audio glass was well worth it. Regards"</p>
            <span>Lorna, Crouch End, London</span>
          </div>
          <div class="testimonials-info__item">
            <i class="fas fa-user-edit"></i>
            <p>"Dear Steve I have just seen your fine handiwork in daylight for the first time, many thanks – it’s a great job. Kind regards"</p>
            <span>Mr Kellard, Hitchin</span>
          </div>
        </div>
  </div>
  
</template>

<script>
import {mapState} from "vuex"
export default {
  name: 'Home',
  computed: mapState(["successEnquiry", "modalWindow"]),
  methods: {
    submitEnquiry() {
      this.$store.commit("clearForm")
      this.$store.commit("hideWindow")
      setTimeout(() => {
        this.$store.commit("showSucces")
      }, 300)
      setTimeout(() => {
        this.$store.commit("hideSuccess")
      }, 2000)
    },
    toogleCollapse(ev) {
      if (ev.target) {
        if (ev.target.parentNode.classList == "collapse-item") {
          ev.target.parentNode.classList.add("isOpen")
          ev.target.parentNode.style.height = "145px"
          ev.target.classList = "fas fa-minus"
        } else if  (ev.target.parentNode.classList == "collapse-item isOpen") {
          ev.target.parentNode.style.height = "45px"
          ev.target.classList = "fas fa-plus"
          ev.target.parentNode.classList.remove("isOpen")
        }
      }
    },
    hideMore(ev) {
      if (ev.target && ev.target.classList == "fas fa-minus") {
        console.log(ev.target.parentNode)
        ev.target.parentNode.style.height = "45px"
        ev.target.classList = "fas fa-plus"
      }
    }
  }
}
</script>

<style lang="sass" scoped>

$mainColor: rgba(39, 20, 109, 1)
$darkAccent: #146d14
$secondColor: #366dbf

.wrapper-heading
  text-align: center
  min-height: 80vh
  display: flex
  flex-direction: column
  justify-content: center
  align-content: center

.home-page
  width: 100%
  background: no-repeat
  background-image: url("../assets/home-bg.jpg")
  background-size: cover
  background-attachment: fixed

  &__heading
    background-color: rgba(39, 20, 109, .9)
    max-width: 1170px
    margin: 0 auto
    padding: 15px
    position: relative
    text-align: center


  .details
    display: block
    color: #ffffff
    background-color: $mainColor
    font-size: 1rem
    text-transform: uppercase
    padding: 10px
    border-radius: 5px
    margin: 100px auto
    max-width: 180px
    text-align: center

    i
      margin-left: 4px
      position: relative
      animation: down 1s ease infinite

    &:hover
      transform: translateY(1px)
      background-color: $secondColor

  h1, h2
    color: #fff

  h1
    margin-bottom: 20px
    font-size: 3rem

  h2
    font-size: 1rem

.welcome
  background-color: #fff
  padding: 20px 0

  h3
    position: relative
    margin-bottom: 25px

  .sub-head
    font-weight: 500

  h3::after
    content: ''
    position: absolute
    bottom: -10px
    left: 0
    width: 100%
    background-color: $darkAccent
    height: 1px
  
  p
    margin: 15px 0
    line-height: 1.4rem

  .our-services
    font-size: 1rem
    font-weight: 500
    text-align: center
    display: block
    margin: 25px auto 0
    padding: 20px
    background-color: $mainColor
    font-size: 1.6rem
    color: #fff


.our-services-list
  background-color: $mainColor
  padding: 20px
  display: flex
  flex-wrap: wrap
  justify-content: space-between

  li
    border: 2px solid #fff
    border-radius: 10px
    overflow: hidden
    background-color: #fff
    text-align: center
    max-width: 340px
    margin-bottom: 20px

    div
      margin: 10px
      font-weight: 500
      font-size: 1.6rem

    img
      transition: all .3s ease
    img:hover
      transform: scale(1.1)

.details-info
  display: flex
  margin-top: 20px
  align-items: center

  &__text
    padding: 20px


  &__img
    img
      max-width: 360px
      border-radius: 5px


.contact-info

  &__container
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    align-items: center

  ul
    list-style: none
    display: flex
    flex-direction: column
    max-width: 45%
    
    li
      border-bottom: 1px solid #ccc

      a
        color: $mainColor

      span
        text-transform: uppercase
        font-weight: 500
        margin: 0 10px
        color: #000

      i
        color: $darkAccent

  form
    max-width: 45%
    background-color: #eee
    display: flex
    flex-direction: column
    padding: 20px
    border-radius: 5px

    p
      font-weight: 500

    label
      margin: 10px
      display: flex
      justify-content: space-between

      input, textarea
        border: none
        outline: none
        padding: 5px
        resize: none
        border-radius: 3px

      input:focus, textarea:focus
        box-shadow: 0 0 2px 1px $secondColor

iframe
  margin-top: 20px

.about

.about-info

  h3
    text-align: center
    margin-top: 20px
    color: #000
    background-color: #fff
    max-width: 1200px
    margin: 30px auto -20px
    padding: 15px 0px

    &::after
      content: ""
      display: block
      margin: 20px auto
      width: 200px
      border-bottom: 1px solid $darkAccent



  &__text
    background-color: #fff
    max-width: 1200px
    padding: 0px 15px 15px 
    margin: 0 auto


    p
      padding: 10px

  .collapse-wrapper
    background-color: #fff
    text-align: center
    max-width: 1200px
    padding: 15px
    margin: 0 auto 20px
    display: flex
    flex-wrap: wrap
    justify-content: space-evenly



    .collapse-item
      max-width: 360px
      background-color: $mainColor
      color: #fff
      padding: 15px
      height: 45px
      position: relative
      overflow: hidden
      transition: all 1s ease

      i
        position: absolute
        top: 6px
        right: 17px
        font-size: 2rem
        cursor: pointer
        transition: all .3s ease

      h4
        margin-bottom: 10px

.testimonials
  font-size: 1rem
  font-weight: 500
  text-align: center
  display: block
  margin: 0 auto 0
  padding: 20px
  background-color: $mainColor
  font-size: 1.6rem
  color: #fff

.testimonials-info
  background-color: $mainColor
  padding: 15px
  margin-bottom: 25px
  display: flex
  flex-wrap: wrap
  justify-content: space-evenly

  &__item
    max-width: 350px
    background-color: #fff
    border-radius: 8px
    padding: 10px
    margin: 10px
    text-align: center

    i
      font-size: 4rem
      color: $darkAccent
      margin-bottom: 10px

    p
      font-family: 'Raleway', sans-serif
      font-style: italic
      margin-bottom: 10px
    
    span
      display: block
      font-weight: 500
    

// animations
@keyframes down
  0%
    opacity: 0
    top: -5px
  
  50%
    opacity: 1
    top: 0

  100%
    opacity: 0
    top: 5px



@media screen and (max-width: 750px)

  .home-page
    &__heading
      h1
        font-size: 2rem

      h2
        font-size: .9rem

  .our-services-list
    justify-content: center  

  .details-info
    flex-direction: row-reverse
    flex-wrap: wrap

  .contact-info

    &__container
      display: flex
      flex-direction: column

      ul
        max-width: 100%

      form
        max-width: 100%
        padding: 5px


@media screen and (max-width: 400px)

  .home-page
    &__heading
      h1
        font-size: 1rem

      h2
        font-size: .7rem

</style>