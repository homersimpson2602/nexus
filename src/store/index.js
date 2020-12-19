import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    windows: true,
    refurbishment: false,
    bespoke: false,
    modalWindow: { isShow: false, name: null, email: null, tel: null, enquiry: null},
    successEnquiry: false,
    mobileMenu: { isShow: false},
    choice: "all",
    images: [
      {id: 1, url: "../assets/gallery/doors/1.jpg", type: "doors"},
      {id: 2, url: "../assets/gallery/doors/2.jpg", type: "doors"},
      {id: 3, url: "../assets/gallery/doors/3.jpg", type: "doors"},
      {id: 4, url: "../assets/gallery/doors/4.jpg", type: "doors"},
      {id: 5, url: "../assets/gallery/doors/5.jpg", type: "doors"},
      {id: 6, url: "../assets/gallery/doors/6.jpg", type: "windows"},
      {id: 7, url: "../assets/gallery/doors/7.jpg", type: "windows"},
      {id: 8, url: "../assets/gallery/doors/8.jpg", type: "windows"},
      {id: 9, url: "../assets/gallery/doors/9.jpg", type: "windows"},
      {id: 10, url: "../assets/gallery/doors/10.jpg", type: "windows"},
      {id: 11, url: "../assets/gallery/doors/11.jpg", type: "others"},
      {id: 12, url: "../assets/gallery/doors/12.jpg", type: "others"},
      {id: 13, url: "../assets/gallery/doors/13.jpg", type: "others"},
      {id: 14, url: "../assets/gallery/doors/14.jpg", type: "others"},
      {id: 15, url: "../assets/gallery/doors/15.jpg", type: "others"}

    ]

  },
  mutations: {
    showWindows(state, windows, refurbishment, bespoke) {
      state.refurbishment = false
      state.bespoke = false
      state.windows = true
    },
    showRefurb(state, windows, refurbishment, bespoke) {
      state.windows = false
      state.bespoke = false
      state.refurbishment = true
    },
    showBespoke(state, windows, refurbishment, bespoke) {
      state.windows = false
      state.refurbishment = false
      state.bespoke = true
    },
    showWindow(state) {
      state.modalWindow.isShow = true
    },
    hideWindow(state) {
      state.modalWindow.isShow = false
    },
    clearForm(state){
      state.modalWindow.name = null
      state.modalWindow.email = null
      state.modalWindow.tel = null
      state.modalWindow.enquiry = null
    },
    showSucces(state) {
      state.successEnquiry = true
    },
    hideSuccess(state) {
      state.successEnquiry = false
    },
    showMobileMenu(state) {
      state.mobileMenu.isShow = true
    },
    hideMobileMenu(state) {
      state.mobileMenu.isShow = false
    },
    changeFilter(state, value) {
      state.choice = value
    }
  },
  actions: {

  },
  modules: {
  }
})
