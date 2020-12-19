<template>
  <div id="app">
    <header id="header">
      <div class="wrapper">
        <div class="info">
          <div class="info__contacts">
            <div class="phone">
              <p>Telephone:</p>
              <a href="tel:01438 831058">01438 831058</a>
            </div>
           <div class="email">
              <p>Email:</p>
              <a href="mailto:admin@nexusrestorations.com">admin@nexusrestorations.com</a>
           </div> 
          </div>
          <div class="info__logo">
            <a href="/">
              <img src="./assets/site_logo.png" alt="">
            </a>
          </div>
          <Enquiry />
        </div>
      </div>
      <Navbar />
    </header>
    <section>
      <router-view/>
    </section>
    <Footer />
    <div class="to-up">
      <a href="#header"><i class="fas fa-chevron-up"></i></a>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import Enquiry from "@/components/Enquiry.vue"
import Footer from "@/components/Footer.vue"


export default {
name: "app",
components: {
  Navbar,
  Enquiry,
  Footer
}
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500&family=Raleway:wght@400;500&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital@1&display=swap')

$mainColor: rgba(39, 20, 109, 1)
$secondColor: #366dbf
$darkAccent: #146d14



*
  padding: 0
  margin: 0
  box-sizing: border-box
  font-family: 'Fira Sans', sans-serif
  scroll-behavior: smooth

h1, h2, h3, h4
  font-family: 'Raleway', sans-serif
  text-transform: uppercase
  letter-spacing: .2rem


a
  text-decoration: none

button
  min-width: 180px
  padding: 10px
  font-size: 1rem
  text-transform: uppercase
  cursor: pointer
  color: #fff
  background-color: $darkAccent
  outline: none
  border: none
  border-radius: 5px
  transition: all .2s ease

  &:hover
    transform: translateY(-2px)
    box-shadow: 1px 1px 4px 2px #ccc
    filter: saturate(200%)

.wrapper
  max-width: 1200px
  padding: 0 15px
  margin: 0 auto

header
  width: 100%
  border-bottom: 1px solid $mainColor

  .info
    display: grid
    grid-template-columns: 250px 1fr 250px
    align-items: center
    padding: 15px

    &__contacts
      
      .phone
        margin-bottom: 10px
        position: relative
        

      .phone::after
        content: ''
        position: absolute
        bottom: -3px
        left: 0
        width: 100%
        background-color: $darkAccent
        height: 1px

      .email
        position: relative

      .email::after
        content: ''
        position: absolute
        bottom: -3px
        left: 0
        width: 100%
        background-color: $darkAccent
        height: 1px    


    p
      text-transform: uppercase
      font-size: .8rem
      font-weight: 500
      letter-spacing: 1px

    a
      color: $mainColor
      font-size: 1.1rem


    &__logo
      justify-self: center

      a
        displa: block
        text-align: center

        span
          display: block

          &:first-child
            font-family: 'Raleway', sans-serif
            text-transform: uppercase
            font-size: 4rem
            font-weight: 500

          
          &:last-child
            font-family: 'Raleway', sans-serif
            text-transform: uppercase
            font-weight: 500
            font-size: 1.8rem
            color: $darkAccent


.to-up
  position: fixed
  border-radius: 5px
  bottom: 10px
  right: 10px
  background-color: #ccc
  padding: 0 5px
  transition: all .3s ease
  cursor: pointer
  i
    transition: all .3s ease
    font-size: 3rem
    color: #777

.to-up:hover
  background-color: #eee
  i
    font-size: 3rem
    position: relative
    top: -2px
    color: $darkAccent

@media screen and (max-width: 850px)
  header
    .info
      display: flex
      flex-wrap: wrap
      justify-content: space-between

        
@media screen and (max-width: 750px)
  header
    .info
      display: grid
      grid-template-columns: 1fr
      justify-items: center
      gap: 20px

  

      
      
</style>
