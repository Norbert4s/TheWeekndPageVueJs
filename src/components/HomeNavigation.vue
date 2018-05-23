<template>
  <div class="HomeNavigation">
    <nav id="topScroll" class="navbar navbar-light bg-light navbar-expand-lg">
      <a class="navbar-brand" href="#">THE WEEKND</a>
      <button class="navbar-toggler hamburger" type="button" id="hamburger-5" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
  </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="menu-button"><a v-scroll-to="'#topScroll'" class="link menu-tag" href="#">HOME</a></li>
          <li class="menu-button"><a v-scroll-to="'.HomeAlbums'" class="link menu-tag" href="#">MUSIC</a></li>
          <li class="menu-button lastButton"><a v-scroll-to="'.HomeHistory'" class="link menu-tag" href="#">ABOUT</a></li>
          <li class="menu-button" style="display:none"><a class="icon menu-tag" v-bind:href="links.facebook"><i class="fab fa-facebook-f"></i></a></li>
          <li class="menu-button" style="display:none"><a class="icon menu-tag" v-bind:href="links.twitter"><i class="fab fa-twitter"></i></a></li>
          <li class="menu-button" style="display:none"><a class="icon menu-tag" v-bind:href="links.youtube"><i class="fab fa-youtube"></i></a></li>
          <!--  -->
          <li class="spotify" style="display:none"><iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ&size=basic&theme=dark&show-count=0" width="200" height="25" scrolling="no" frameborder="0" style="border:none; overflow:hidden;" allowtransparency="true"></iframe></li>
        </ul>
      </div>
    </nav>
    </div>

</template>


<script>
export default {
  name: 'HomeNavigation',
  props: {
  },
  data() {
    return {
      active:true,
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


.HomeNavigation{

}

@include desktop{
  .spotify{
    display: flex !important;
  }
  .menu-button{
    display: flex !important;
  }
  .navbar-expand-lg{
    flex-flow:row nowrap;
    justify-content: flex-start;
  }
}

.collapse {
  transition:all 0.3s ease-out 0s;
    justify-content: flex-end;
}

.show, .collapsing{
  // background-color: #282828;
  background-color: black;
}


ul{
  height: 100%;
  display:flex;
  @include tabletAndPhone{
    justify-content: flex-start !important;
    text-align: left;
  }
}
.navbar-nav{
  height: 100%;

}

.navbar{
  top:0;
  z-index: 999;
  position: fixed;
  margin:0 auto;
  width: 100%;
  @include desktop{
    @include padding-height(0em);
    padding-left: 12vw;
    padding-right: 10vw;
  }
  @include tabletAndPhone{
    padding: 0em;
  }
  border-bottom: 1px solid #333333;
  background-color: black !important;
}

.navbar-brand{
  // color: #B34720 !important;
  color:#C60228 !important;
  letter-spacing: 0.1em;
  font-size: 2.5em;
  font-weight: bold;
  padding:0em;
  height: 100%;
  font-family: 'Assistant', sans-serif;

  @include tabletAndPhone{
    padding-left: 0.5em;
    line-height: 2em;
  }
}

.navbar-toggler{
  margin-right: 3em;
}

a{
  display: block;
  height: 100%;
}
.menu-button, .spotify{
  @include desktop{
    height: 4em;
    line-height:4em;
    align-items: center;
    @include padding-width(1em);
  }
  @include tabletAndPhone{
    height: 4em;
    line-height:4em;
    border-bottom: 2px dotted #cecece;
    @include margin-width(8em);
  }
  @include tabletAndPhone{
    justify-content: flex-start;
  }

}

.lastButton{
  @include tabletAndPhone{
    border: none;
  }
}

@include tabletAndPhone{
  .last-menu-button{
    border-bottom: none;
  }
}

@include desktop{
  .menu-button:hover{
    border-bottom: 2px solid white;
    a{
      color:white;
    }
    .fab{
      color:white
    }
  }
}

.spotify{
  padding-left: 1em;
  padding-bottom: 0.3em;
}

iframe{
  width: 10em;
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


.link{
  font-family: 'Lato', sans-serif;
  @include desktop{
    color: gray;
    font-size: 0.9em;
    @include padding-width(0.8em);
  };
  @include tabletAndPhone{
    font-size: 1.1em;
    color: #CACACA;
  }
    transition:all 0.3s ease-out 0s;
}

.link:hover{
  text-decoration: none;
  color:white;
}



.row .three{
  padding: 80px 30px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #2c3e50;
  color: #ecf0f1;
  text-align: center;
}

.hamburger .line{
  width: 25px;
  height: 4px;
  background-color: #ecf0f1;
  display: block;
  margin: 4px auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.hamburger:hover{
  cursor: pointer;
}






</style>
