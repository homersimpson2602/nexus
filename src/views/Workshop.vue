<template>
  <div class="workshop">
    <h1>Our Workshop</h1>
    <div class="workshop-info">
      <div class="workshop-info__img">
        <img src="../assets/workshop/workshop-bg.jpg" alt="workshop">
      </div>
      <div class="workshop-info__text">
        <p>Our fully equipped and large workshop is manned by highly skilled and experienced joiners who have the expertise and knowledge to create almost anything from high quality wood.</p>
        <p>We offer some of the most competitive prices around and our quality speaks for itself. We invest in the best people and the highest quality equipment to ensure endless flexibility and versatility and we are proud to have become one of the market leaders in joinery.</p>
        <p>Whilst traditional bespoke joinery, such as doors and windows, prove to be some of our most popular products, we are proud to be able to offer endless variations alongside a whole range of one-offs like staircases.</p>
        <p class="list-head">Our typical product range includes:</p>
      </div>
      <ul>
        <li>Interior and exterior doors</li>
        <li>Sash and casement windows</li>
        <li>Window fasteners and locks</li>
        <li>French doors</li>
        <li>Staircases</li>
        <li>Bespoke joinery</li>
        <li>Commercial contract projects</li>
        <li><img src="../assets/workshop/cog-solid.svg" alt=""></li>
      </ul>
    </div>
    <div class="more-info">
      <p>Quality standards are very important to us and we always use the very best materials. All our work also comes with quality accessories and extras, from concealed draught proofing, beads, cords and weights in almost any colour to hardwood sills and hand or spray finishes.</p>
      <p>Whatever your bespoke joinery or wood product requirements, look no further than Nexus Restorations for expert restoration and new builds to the very highest quality.</p>
      <p>
        Based in Kimpton Bottom, Hertfordshire, our workshop enables us to provide domestic and commercial customers from across North London and the Home Counties with the finest bespoke pieces. We regularly work with customers in Watford, Barnet, Enfield, Hendon, St Albans, Hatfield, Hitchin, Welwyn Garden City, Stevenage, Islington, Harpenden, Hampstead &amp; Potters Bar and North London.
      </p>
      <p>If your domestic or commercial property needs bespoke new windows fitted or windows restored and refurbished, look no further than the windows and joinery specialists here at Nexus Restorations.</p>
      <p>Contact us today to discuss your requirements with one of our helpful and friendly team. They are always on hand to answer any questions you may have and provide honest and impartial advice.</p>
      
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>


$mainColor: rgba(39, 20, 109, 1)
$secondColor: #366dbf
$darkAccent: #146d14
.workshop
  

h1
  display: block
  text-align: center
  margin: 30px auto

.workshop-info
  max-width: 1200px
  padding: 15px
  margin: 0 auto
  display: grid
  grid-grid-template-columns: repeat(3, 1fr)
  grid-template-rows: 1fr 1fr

  &__text
    padding: 0 15px
    grid-column-start: 2

    .list-head
      font-weight: 500

    p
      margin: 10px
      line-height: 1.4rem

  &__img
    grid-row-start: 1
    grid-row-end: 3
    img
      max-width: 100%
      border-radius: 5px

  ul
    grid-column-start: 2
    grid-row-start: 2
    list-style: none
    display: grid
    grid-template-columns: 1fr 1fr
    grid-template-rows: repeat(4, 1fr)
    background-color: $mainColor
    margin: 0 20px
    padding: 15px
    border-radius: 5px

    li
      font-weight: 500
      text-transform: uppercase
      color: #fff

    img
      max-width: 40px
      animation: rotating 2s ease-in-out infinite

.more-info
  max-width: 1200px
  padding: 15px
  margin: 0 auto

  p
    margin: 10px
    line-height: 1.4rem
// animations

@keyframes rotating 
  0%
    transform: rotate(-360deg)

  100%
    transform: rotate(0deg)


@media screen and (max-width: 1000px)
  .workshop-info
    display: flex
    flex-wrap: wrap

    &__img
      flex-grow: 2
      img
        display: block
        margin: 0 auto


    ul
      flex-grow: 2

@media screen and (max-width: 650px)
  .workshop-info
    &__text
      margin: 0px
      padding: 0px
    ul
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      margin: 0px
        
      li
        margin-bottom: 20px

        img 
          width: 40px

</style>