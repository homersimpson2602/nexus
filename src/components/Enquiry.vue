<template>
  <div class="quote">
    <button 
      @click.prevent="showModal"
    >Get A FREE Quote</button>
    <transition name="fade">
    <div class="form-wrapper"
      id="form-wrapper"
      @click="closeModal"
      v-show="modalWindow.isShow"
    >
      <form  action="" 
        @submit.prevent="submitEnquiry"
      >
        <i class="fas fa-times" 
          id="close-btn"
          @click="closeModal"
        ></i>
        <p>If you have any questions or would like to arrange 
        for a free quotation and site survey, 
        please don’t hesitate to contact us today.</p>
        <label for="name-enquiry">
          Name:*
          <input type="text" required placeholder="Full Name..."
            v-model="modalWindow.name"
          >
        </label>
        <label for="email-enquiry">
          Email:*
          <input type="email" required placeholder="Email Address..."
            v-model="modalWindow.email"
          >
        </label>
        <label for="tel-enquiry">
          Telephone:*
          <input type="phone" required placeholder="Telephone Number..."
            v-model="modalWindow.tel"
          >
        </label>
        <label for="enquiry-modal">
          Enquiry:*
          <textarea name="" cols="46" rows="10" required
            v-model="modalWindow.enquiry"
          ></textarea>
          <button type="subbmit">Send Enquiry</button>
        </label>
      </form>
    </div>
    </transition>
    <transition name="fade">
    <div 
      class="success"
      v-show="successEnquiry"
    >
      Request sent successfully
    </div>
    </transition>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
name: 'Enquiry',
computed: mapState(["modalWindow", "successEnquiry"]),
methods: {
  showModal(ev) {
    this.$store.commit("showWindow")
  },
  closeModal(ev) {
    if (ev.target.id == "form-wrapper" || ev.target.id == "close-btn") {
      this.$store.commit("hideWindow")
    }
  },
  submitEnquiry() {
    this.$store.commit("hideWindow")
    setTimeout(() => {
      this.$store.commit("showSucces")
    }, 300)
    setTimeout(() => {
      this.$store.commit("hideSuccess")
    }, 2000)
  }
}
}
</script>

<style lang="sass" scoped>

$mainColor: rgba(39, 20, 109, 1)
$secondColor: #366dbf
$darkAccent: #146d14

.form-wrapper
  z-index: 1001
  position: fixed
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  min-height: 100vh
  top: 0
  left: 0
  background-color: rgba(230, 230, 230, 0.5)

form
  display: flex
  position: relative
  flex-direction: column
  justify-content: flex-start
  align-items: start
  max-width: 360px
  background-color: $mainColor
  padding: 20px 20px 10px
  border-radius: 5px
  box-shadow: 1px 0 2px 1px #555

  i
    color: $darkAccent
    position: absolute
    display: block
    text-align: center
    top: 5px
    width: 30px
    height: 30px
    cursor: pointer
    right: 5px
    font-size: 1.8rem
    border-radius: 50%
    background-color: #fff
    transition: all .2s ease

  i:hover
    color: #ffffff
    background-color: $darkAccent

  p
    margin-bottom: 15px

  label
    margin-bottom: 15px
    display: flex
    flex-direction: column
    justify-content: flex-start
    align-items: start
    
    input, textarea
      padding: 5px
      border-radius: 4px
      border: none
      outline: none

    input:focus, textarea:focus
      box-shadow: 0 0 3px 2px $secondColor

    textarea
      margin-bottom: 15px
      resize: none

    button
      align-self: flex-end
    
    button:hover
      box-shadow: 0 0 2px 1px $secondColor

.success
  position: fixed
  top: 40%
  left: 44% 
  background: $darkAccent
  padding: 20px
  border-radius: 10px

// Vue animations 
.fade-enter-active, .fade-leave-active
  transition: opacity .3s

.fade-enter, .fade-leave-to
  opacity: 0
</style>