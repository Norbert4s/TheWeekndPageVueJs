<template>
  <div class="HomeFooter">
 <div class="icons">
   <ul>
     <li class="menu-button"><a class="icon menu-tag" v-bind:href="links.facebook"><i class="fab fa-facebook-f"></i></a></li>
     <li class="menu-button"><a class="icon menu-tag" v-bind:href="links.twitter"><i class="fab fa-twitter"></i></a></li>
     <li class="menu-button"><a class="icon menu-tag" v-bind:href="links.youtube"><i class="fab fa-youtube"></i></a></li>
   </ul>
 </div>
 <div class="buttonWrap">
   <button v-scroll-to="'#topScroll'" classtype="button" class="scrollButton" name="button"><i class="fas fa-angle-double-up"></i></button>
 </div>
  </div>
</template>


<script>
export default {
  name: 'HomeFooter',
  data() {
    return {
      links:{
        facebook:'https://www.facebook.com/theweeknd/',
        twitter:'https://twitter.com/theweeknd',
        youtube:'https://www.youtube.com/user/TheWeekndVEVO'
      },
     }
    }
   }
</script>

<style scoped lang="scss">
@import '../assets/scss/main.scss';



.HomeFooter{
  background-color: black;
  position: relative;
}

ul{
  margin-bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  // justify-content: center;
  list-style-type: none;
  align-items: center;
  padding: 0;
}

li{
  @include padding-width(1em);
  padding-bottom: 2em;
  padding-top: 2em;
  font-size: 2.5em;
}

.fas{
  font-size: 2.5em;
  color:#C60228;
  padding: 0.2em;
  transition: all 0.3 ease;
}

.fas:hover{
  // transform: scale(1.2)
}

.buttonWrap{
  position: absolute;
  top: -12%;
  left: 48%;
  @include phone{
    left: 42%;
  }
  @include tablet{
    left: 44%;
  }

}

.scrollButton{
  cursor: pointer;
  // width: 100px; /* Need a specific value to work */
  background-color: black;
  border: 2px solid #333333;
  border-radius: 3px;
  margin-bottom: 2em;
}

.scrollButton:hover{
  border: 2px solid white;
}

.scrollButton:focus{
  outline: none;
}

.fab{
  // color:#B34720;
  color: #C60228;
  transition:all 0.3s ease-out 0s;
  font-size: 1.1em;
}

.fab:hover{
  color:white;
}

</style>
