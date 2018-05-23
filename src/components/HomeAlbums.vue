<template>
  <div class="HomeAlbums">
    <h2>DISCOGRAPHY</h2>
    <span class="borderSpan"></span>
    <div class="buttons">
      <button type="button" class="btn btn-secondary" v-on:click='filter = "all"'>All</button>
      <button type="button" class="btn btn-secondary" v-on:click='filter = "vinyl"'>Vinyl</button>
      <button type="button" class="btn btn-secondary" v-on:click='filter = "studio"'>Studio</button>
      <button type="button" class="btn btn-secondary" v-on:click='filter = "mixtape"'>Mixtape</button>
      <button type="button" class="btn btn-secondary" v-on:click='filter = "compilation"'>Compilation</button>
      <button type="button" class="btn btn-secondary" v-on:click='filter = "EP"'>Ep</button>
    </div>
    <ul class='album-wrap'>
        <transition-group name="list" id='one' enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
      <li v-for='album in albumFilter' :key='album.img' v-on:click='album.menu = true;album.hideMenu = false'>
        <div class='view view-first'><img class="albumListImg" :src="album.img" alt="">
        <div class="mask">
      <h2>{{album.name}}</h2>
      <a href="#" v-on:click='album.menu = true;album.hideMenu = false'class="info">Click for more details</a>
       </div>
    </div>
     </li>
    </transition-group>
    </ul>
    <ul class='albumWindowList'>
      <li v-for='album in albumFilter' v-bind:class="{ albumWindow: album.menu, hideAlbumWindow: album.hideMenu}">
        <i class="cross fas fa-times" v-on:click='album.menu = false;album.hideMenu = true'></i>
        <h4>{{ album.name }}</h4>
        <div class="coverTracks">
          <div class="albumWindowImage">
            <img :src="album.img" alt="">
          </div>
          <ul class='tracklist'>
            <div class="info">
              <span class='released'><h5>Released:</h5> {{ album.released }}</span>
              <span class='order'><h5>Listen:</h5><i class="fab fa-spotify"></i> <i class="fab fa-apple"></i>  <i class="fab fa-amazon"></i></span>
              <h5>Tracklist:</h5>
              <li v-for='track in album.tracklist'><span class='track'>{{track}}</span></li>
            </div>
          </ul>
        </div>
      </li>
    </ul>

  </div>
</template>


<script>

import MDM from '@/assets/MDM.jpg'
import Starboy from '@/assets/Starboy.jpg'
import BBTM from '@/assets/BBTM.jpg'
import Kissland from '@/assets/Kissland.jpg'
import Echoes from '@/assets/Echoes.jpg'
import Thursday from '@/assets/Thursday.jpg'
import HOB from '@/assets/HOB.jpg'
import StarboyVinyl from '@/assets/StarboyVinyl.jpg'
import Trilogy from '@/assets/Trilogy.jpg'
import KisslandVinyl from '@/assets/KisslandVinyl.jpg'
import BBTMVinyl from '@/assets/BBTMVinyl.jpg'


export default {
  name: 'HomeAlbums',
  data() {
    return {
      display:'flex',
      filter:'all',
      showDiv:false,
      albums:[
        {img:MDM, dissapear:'no', all:'yes', vinyl:'no', studio:'no', mixtape:'no', compilation:'no', EP:'yes', name:'My Dear Melancholy', menu:false, hideMenu:true, released:'2018', tracklist:['1.Call Out My Name', '2.Try Me']},
        {img:Starboy, dissapear:'no', all:'yes', vinyl:'no', studio:'yes', mixtape:'no', compilation:'no', EP:'no', name:'Starboy', menu:false, hideMenu:true, released:'2016', tracklist:['1.Starboy','2.Party Monster', '3.False Alarm', '4.Reminder', '5.Rockin', '6.Secrets', '7.True Colors', '8.Stargirl Interlude', '9.Sidewalks', '10.Six Feet Under', '11.Love To Lay', '12.Lonely Night', '13.Attention','14.Ordinary Life', '15.Nothing Without You', '16.All I Know', '17.Die for You', '18.I feel it Coming']},
        {img:BBTM, dissapear:'no', all:'yes', vinyl:'no', studio:'yes', mixtape:'no', compilation:'no', EP:'no', name:'Beauty Behind the Madness', menu:false, released:'2015', hideMenu:true, tracklist:['1.Real Life', '2.Losers','3.Tell Your Friend','4.Often','5.The Hills', '6.Acquainted', "7.Can't Feel My Face", '8.Earned It', '9.In the Night', '10.As You Are', '11.Dark Times', '12.Prisoner', '13.Angel']},
        {img:Kissland, dissapear:'no', all:'yes', vinyl:'no', studio:'yes', mixtape:'no', compilation:'no', EP:'no', name:'Kissland', menu:false, hideMenu:true, released:'2013', tracklist:['1.Proffesional', '2.The Town', '3.Adaptation', '4.Love in the Sky', '5.Belong to the World', '6.Live For', '7.Wanderlust', '8.Kissland', '9.Pretty', '10.Tears in the Rain']},
        {img:Echoes, dissapear:'no', all:'yes', vinyl:'yes', studio:'no', mixtape:'yes', compilation:'no', EP:'no', name:'Echoes Of Silence', menu:false, hideMenu:true, released:'2011', tracklist:['1.Call Out My Name', '2.Try Me']},
        {img:Thursday, dissapear:'no', all:'yes', vinyl:'yes', studio:'no', mixtape:'yes', compilation:'no', EP:'no', name:'Thursday', menu:false, hideMenu:true, released:'2011', tracklist:['1.Call Out My Name', '2.Try Me']},
        {img:HOB, dissapear:'no', all:'yes', vinyl:'no', studio:'no', mixtape:'yes', compilation:'no', EP:'no', name:'House Of Balloons', menu:false, hideMenu:true, released:'2011', tracklist:['1.Call Out My Name', '2.Try Me']},
        {img:StarboyVinyl, dissapear:'no', all:'yes', vinyl:'yes', studio:'yes', mixtape:'no', compilation:'no', EP:'no', name:'Starboy', menu:false, hideMenu:true, released:'2016', tracklist:['1.Starboy','2.Party Monster', '3.False Alarm', '4.Reminder', '5.Rockin', '6.Secrets', '7.True Colors', '8.Stargirl Interlude', '9.Sidewalks', '10.Six Feet Under', '11.Love To Lay', '12.Lonely Night', '13.Attention','14.Ordinary Life', '15.Nothing Without You', '16.All I Know', '17.Die for You', '18.I feel it Coming']},
        {img:Trilogy, dissapear:'no', all:'yes', vinyl:'yes', studio:'no', mixtape:'no', compilation:'yes', EP:'no', name:'Trilogy', menu:false, hideMenu:true, released:'2011', tracklist:['1.Call Out My Name', '2.Try Me']},
        {img:KisslandVinyl, dissapear:'no', all:'yes', vinyl:'yes', studio:'yes', mixtape:'no', compilation:'no', EP:'no', name:'Kissland', menu:false, hideMenu:true, released:'2013', tracklist:['1.Proffesional', '2.The Town', '3.Adaptation', '4.Love in the Sky', '5.Belong to the World', '6.Live For', '7.Wanderlust', '8.Kissland', '9.Pretty', '10.Tears in the Rain']},
        {img:BBTMVinyl, dissapear:'no', all:'yes', vinyl:'yes', studio:'yes', mixtape:'no', compilation:'no', EP:'no', name:'Beauty Behind the Madness', menu:false, released:'2015', hideMenu:true, tracklist:['1.Real Life', '2.Losers','3.Tell Your Friend','4.Often','5.The Hills', '6.Acquainted', "7.Can't Feel My Face", '8.Earned It', '9.In the Night', '10.As You Are', '11.Dark Times', '12.Prisoner', '13.Angel']},
      ],
     }
   },
     computed:{
    albumFilter: function() {
      var filter = this.filter;
      return this.albums.filter(function(album) {
        return album[filter] == 'yes';
      })
    },
    // classChanger: function(){
    //     var theClass = 'classB';
    //     if(this.conversation.minimized == false){
    //         theClass = 'classA';
    //     }
    //     return theClass:
    // }
  },
  methods:{
 }
}

</script>

<style scoped lang="scss">
@import '../assets/scss/main.scss';
@import '../assets/animate.css/animate.css';

.albumWindowList{
  //  z-index: 1;
  // position: fixed;
  // width: 50vw;
  // height: 50vh;
  // background-color: black;
  // // position: absolute;
  // left: 0;
  // right: 0;
  // top: 0; /* Stay at the top */
  //  left: 0;
  // margin-left: auto;
  // margin-right: auto;
  // display: flex;
  flex-direction: column;
  margin: 0;
}

.albumWindow{
z-index: 1;
 position: fixed;
 width: 71vw;
 // height: 70vh;
 background-color: black;
 // position: absolute;
 left: 0;
 right: 0;
 top: 10%; /* Stay at the top */
  left: 0;
 margin-left: auto;
 margin-right: auto;
 display: flex;
   flex-direction: column;
   border: 1px solid #333333;
   @include phone{
     align-items: center;
     width: 80vw;
   };
}

.coverTracks{
  display: flex;
  flex-direction: row;
  // margin-right: 15em;
  margin-top: 3em;
  margin-bottom: 7em;
  // align-items: center;
  justify-content: center;
  font-family: 'Assistant', sans-serif;
  @include tabletAndPhone{
    flex-direction: column;
    align-items: center;
    margin-bottom: 1em;
    margin-top: 0.5em;
  }
  color: #C60228;
    font-weight: bold;
}

.track{
  @include padding-height(0.3em);
}

.albumWindowImage{
  overflow: hidden;
  height: 400px;
  width: 400px;
  @include tabletAndPhone{
    height: 200px;
    width: 200px;
    margin: 0;
  }
  @include phone{
    height: 150px;
    width: 150px;
    margin: 0;
  }
  border: 1px solid #333333;
}

.albumWindowImage img{
  width: auto;
   max-height: 100%;
}

.hideAlbumWindow{
  display: none;
}

h4{
  font-size: 2.5em;
  text-transform: uppercase;
  color: #fff;
  font-family: Raleway, serif;
  font-family: 'Assistant', sans-serif;
  @include tabletAndPhone{
    margin: 0;
  }
}

h5{
  margin: 0;
  @include padding-height(0.2em);
  font-size: 1.7em;
  font-weight: bold;
  @include tabletAndPhone{
    font-size: 1.2em;
  }
}

.order{
  display: flex;
  flex-direction: row;
  align-items: center;
}

.fab{
  font-size: 2em;
  @include padding-width(0.3em);
  cursor: pointer;
}

.fa-amazon{
  color: #FBB321;
}

.fa-apple{
  color: #666;
}

.fa-spotify{
  color: #1ED760;
}

.released{

}

.tracklist{
  @include phone{
    padding: 0;
  }
}

.info{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
}

.info li{
  @include tabletAndPhone{
    font-size: 0.8em;
  };
}

.cross{
  color: white;
  display: flex;
  align-self: flex-start;
  font-size: 4.5em;
  padding-top:0.2em;
  padding-left: 0.3em;
  transition: all 0.3s ease;
  @include phone{
    font-size: 3em;
    align-self: center;
    padding-left: 0;
  }
  cursor: pointer;
}

.cross:hover{
  transform: scale(1.2);
}


// .list-enter-to{
//   transition: all 2s ease;
// }
//
// .list-leave-to{
//   transition: all 2s ease;
// }

.list-leave-to, list-enter-to{
//   opacity: 0;
// height: 0;
width: 0;
  transition: all 1.2s ease;
}

.HomeAlbums{
  background-color: #111111;
	overflow: hidden;
  border-top: 1px solid #333333;
}

h2{
  padding-top: 2.5em;
  padding-bottom: 0.3em;
  font-size: 3em;
  @include phone{
    // font-size: 5em;
    padding-top: 1.5em;
  }
  color: #C60228;
  letter-spacing: 0.05em;
  font-weight: bold;
}

.borderSpan{
  text-align: center;
  border-bottom: 2px solid #787878;
  width: 10em;
  height: 2px;
  margin: 0 auto;
  display: flex;
  align-self: center;
}

.buttons{
  padding-top: 6em;
  padding-bottom: 2em;
  @include phone{
    display: flex;
    flex-direction: column;
    @include margin-width(4em);
    padding-top: 4em;
  }
}

.btn{
  background-color:#2E2E2E;
  border:none;
  color: #CACACA;
  @include margin-width(0.5em);
  padding: 0.7em 1em;
  border-radius: 3px;
  font-size: 1em;
  text-transform: uppercase;
  @include phone{
    @include margin-height(0.3em);
  }
}

.btn:hover,.btn:active,.btn:focus{
  color:white;
  background-color: grey;
  border: none;
  box-shadow: none;
}

.btn-secondary:not(:disabled):not(.disabled):active{
  border: none;
}


.album-wrap{
    overflow: hidden;
    padding-left: 0;
    flex-direction: row;
    align-content: flex-start;
    width:100vw;
    height: 100%;
    text-align: left;
    margin-bottom: 0;
    line-height: 0;
}
li{
  align-content: flex-start;
    // overflow: hidden;
    display: inline-block;
    @include desktop{
      width: 20vw;
    }
    @include tablet{
      width: 25vw;
    }
    @include phone{
      width: 33.333vw;
    }

}
.albumListImg{
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.view {
  float: left;
  overflow: hidden;
  position: relative;
  text-align: center;
  box-shadow: 1px 1px 2px #e6e6e6;
  cursor: default;
  -webkit-box-shadow: none;
}

.view .mask,
.view .content {
  width: 100%;
  height: 100%;
  position: absolute;
  // overflow: hidden;
  top: 0;
  left: 0
}

.view img {
  display: block;
  position: relative
}

.view h2 {
  text-transform: uppercase;
  color: #fff;
  // text-align: center;
  position: relative;
  font-size: 2.5em;
  padding-top: 2.5em;
  @include tabletAndPhone{
    font-size: 1.5em;
    padding-top: 1.5em;
  }
  font-family: Raleway, serif;
  // padding-top: 2.5em;
  /*background: rgba(0, 0, 0, 0.8);*/
  // margin: 20px 0 0 0;
  // display: flex;

}

.view p {
  font-family: Merriweather, serif;
  font-style: italic;
  font-size: 14px;
  position: relative;
  color: #fff;
  padding: 0px 20px 0px;
  text-align: center
}

.view a.info {
  display: inline-block;
  text-decoration: none;
  padding: 7px 14px;
  background: #000;
  color: #fff;
  font-family: Raleway, serif;
  text-transform: uppercase;
  box-shadow: 0 0 1px #000
}

.view a.info:hover {
  box-shadow: 0 0 5px #000
}


/*1*/

.view-first img {
  /*1*/
  transition: all 0.2s linear;
}

.view-first .mask {
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.7);
  transition: all 0.4s ease-in-out;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  // align-content: center;
  cursor: pointer;
}

.view-first h2 {
  transform: translateY(-100px);
  opacity: 0;
  font-family: Raleway, serif;
  transition: all 0.2s ease-in-out;
  display: flex;
}

.view-first p {
  transform: translateY(100px);
  opacity: 0;
  transition: all 0.2s linear;
}

.view-first a.info {
  opacity: 0;
  transition: all 0.2s ease-in-out;
}


/* */

.view-first:hover img {
  transform: scale(1.8);
}

.view-first:hover .mask {
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.view-first:hover h2,
.view-first:hover p,
.view-first:hover a.info {
  opacity: 1;
  transform: translateY(0px);
}

.view-first:hover p {
  transition-delay: 0.1s;
}

.view-first:hover a.info {
  transition-delay: 0.2s;
}

// @keyframes zoom-in {
// 0% {
//   transform: scale(0);
// }
// 50% {
//   transform: scale(1.5);
// }
// 100% {
//   transform: scale(1);
// }
// }
</style>
