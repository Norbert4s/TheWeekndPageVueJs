<template>
  <div class="HomeHistory">
  <div class="paralax">
    <h2>THE WEEKND TIMELINE</h2>
    <ul class='list'>
      <li v-for='item in history'><span class='date'>{{ item.date }}</span><span class='line'>{{ item.line }}</span></li>
    </ul>
  </div>
  </div>
</template>


<script>
export default {
  name: 'HomeHistory',
  data() {
    return {
        history:[
          {date:'February 16, 1990 ' ,line:'Abel Makkonen Tesfaye is born in Toronto, Ontario'},
          {date:'2007 ' ,line:'Dropped out of highschool, left home and moved to moved to the neighbourhood of Parkdale, Toronto.'},
          {date:'2010 ' ,line:'Tesfaye met Jeremy Rose, a producer who had an idea for a dark R&B musical project.'},
          {date:'2010 ' ,line:'Rose produced three songs – "What You Need", "Loft Music", and "The Morning" – and others that Tesfaye had rapped on, which were ultimately scrapped. Rose let Tesfaye keep the tracks he had produced under the condition that he would ultimately be credited for them.'},
          {date:'December 2010 ' ,line:'Tesfaye uploaded "What You Need", "Loft Music" and "The Morning" to YouTube under his stage name, although his identity was initially unknown. The songs drew some attention online, and were later included in a blog post from Drake. The songs subsequently received coverage from various media outlets, including Pitchfork and The New York Times.'},
          {date:'March 21, 2011 ' ,line:'Tesfaye self-released his debut mixtape House of Balloons. The mixtape included production from Canadian producers Illangelo and Doc McKinney, and included the tracks produced by Rose, although, he did not receive production credits.'},
          {date:'2011 ' ,line:'House of Balloons was met with critical acclaim. It was named as one of ten shortlisted nominees for the 2011 Polaris Music Prize.'},
          {date:'Summer 2011 ' ,line:"Tesfaye contributed to five songs on Drake's Take Care, both as a writer and a featured artist."},
          {date:'August 11, 2011 ' ,line:'Tesfaye second mixtape Thursday, was released'},
          {date:'December 21, 2011' ,line:"Tesfaye's third mixtape Echoes of Silence was released"},
          {date:'April 2012 ' ,line:'Tesfaye began his first tour of the United States, with a performance at the Coachella Festival. The tour culminated in New York with back-to-back sold-out shows, which were positively reviewed by Rolling Stone.'},
          {date:'September 2012 ' ,line:'Tesfaye signed with Republic Records in a joint venture with his own imprint XO. The compilation album for the mixtapes entitled Trilogy, was released two months later, and consisted of several remastered versions of songs, as well as three additional ones.'},
          {date:'September 10, 2013 ' ,line:'Studio album Kissland was released'},
          {date:'August 28, 2015 ' ,line:'Beauty Behind the Madness was released and debuted atop the Billboard 200, earning 412,000 album equivalent units in its first week.[69][70] It reached the top 10 in over ten countries, as well as reaching number one in Canada, Australia, Norway, and the United Kingdom.'},
          {date:'November 24, 2016 ' ,line:'He released a 12-minute short film, titled M A N I A'},
          {date:'November 25, 2016 ' ,line:'Studio album Starboy was released'},
          {date:'March 30, 2018 ' ,line:'the extended play My Dear Melancholy, was released.'},
        ]
     }
    }
   }
</script>

<style scoped lang="scss">
@import '../assets/scss/main.scss';

.paralax{
   background-image:linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url('../assets/blackWhite.jpg');
   /* text-align: center; */
background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-attachment: fixed !important;
height: 100%;
}

@include paralax{
 .paralax {
    background-position: center top !important;
    background-attachment: scroll !important;
    height: auto;
    margin: 0 auto;
    width: 100%;
 }
}

// @media only screen and (max-width: 1366px) {
//     .parallax {
//     }
// }

h2{
  font-size: 3em;
  // @include phone{
  //   font-size: 5em;
  // }
  color: #C60228;
  letter-spacing: 0.05em;
  font-weight: bold;
  padding-top: 2.5em;
  padding-bottom: 0.5em;
}

.list{
  margin: 0 auto;
  text-align: center;
  width: 75vw;
  @include phone{
    width: 90vw;
  }
  padding-bottom: 10em;
}

.date{
  font-weight: bold;
}

li{
  color: #CACACA;
  text-align: left;
  padding: 0.3em;
  font-size: 1.2em;
  @include phone{
    font-size: 1.9em;
  }
}

</style>
