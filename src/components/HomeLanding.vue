<template>
  <div class="HomeLanding">
    <div class="landing">
      <iframe id="video" class="videoLoop" v-bind:src="playlistH + index + playlist" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
  </iframe>
<div class="overlay">
  <h3>THE WEEKND</h3>
  <a href="https://www.youtube.com/user/TheWeekndVEVO"><button class='checkOut' type="button" name="button" >Check out the music</button></a>
</div>
</div>
  </div>
</template>


<script>
export default {
  name: 'HomeLanding',
  data() {
    return {
      index:Math.floor((Math.random() * 5)),
      playlist:'&loop=1&mute=1&autoplay=1&rel=0&amp;controls=0&amp;showinfo=0&amd:rel=0&amp;start=62',
      playlistH:'https://www.youtube.com/embed/videoseries?list=PLQmClqWFEtBupZkRQ8qSef3FOkRnds7kh&rel=0&index=',
     }
   },
   methods:{
    muteVideo: function(){
      var myVideo = document.getElementByClass('video');
        alert('hehe');
        myVideo.volume = 0;
        myVideo.muted = true;
    }
   }
  }
</script>

<style scoped lang="scss">
@import '../assets/scss/main.scss';

.HomeLanding{
  margin-top: 4em;
}

.checkOut{
  background:rgba(0,0,0,0);
  border:3px solid white;
  color: white;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  font-size: 1.5em;
  text-transform: uppercase;
  border-radius: 2px;
  padding: 0.5em;
  @include padding-width(1.2em);
  margin-top: 1.3em;
  cursor: pointer;
  transition: all 0.3s ease;
}


.checkOut:hover{
  background-color: white;
  color:black;
}

.checkOut:focus{
  outline: none;
}

h3{
  // color: #B34720;
  color: #C60228;
  letter-spacing: 0.07em;
  @include desktop{
    font-size: 9em;
  };
  @include tabletAndPhone{
    font-size: 6em;
  }
  font-weight: bold;
  padding:0em;
  height: 100%;
  width: 100%;
  font-family: 'Assistant', sans-serif;
  line-height: 1;
}
.landing{
  height:95vh;
  width: 100vw;
  position: relative;
  @include tabletAndPhone{
        background-image:linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url('../assets/cover.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: scroll;
        background-size: cover;
  };
}
.videoLoop{
  height: 100%;
  width: 100%;
  pointer-events: none;
  // z-index:0;
  overflow:hidden;
  border:none;
  @include tabletAndPhone{
    display: none;
  }
}
p{
  color: blue;
}
.overlay{
  width: 100%;
  position:absolute;
  position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    // z-index:1;
}
</style>
