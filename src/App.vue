<template>
  <div class="grid-parent ">
    <div id="intro" >
      <Intro class="Intro"/>
    </div>
    <div id="resume" class="Resume">
      <Card id="dn" color="is-danger" title="NovaRover"/>
      <Card id="nr" color="is-info" title="DeepNeuron" />
      <Card id="glh" color="is-warning" title="GLH" class="has-text-black" />
      <Card id="ic" color="is-dark" title="Infocentric" />
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import Tags from './components/Tags.vue'
import Card from './components/Card.vue'
import Intro from './components/Intro.vue'

export default {
  name: 'App',
  components: {
    Tags,
    Card,
    Intro
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>

#intro { grid-area: intro; }
#resume { grid-area: resume; }
#dn { grid-area: dn; }
#nr { grid-area: nr; }
#glh { grid-area: glh; }
#ic { grid-area: ic; }

/* == == == == Grid Parent CSS == == == == */
.grid-parent {
  align-items: center;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
    "intro resume";
}
@media (max-width: 512px) {
    .grid-parent {
        margin-top: 20px;
        max-height: 250px;
        grid-template-columns: 1fr;
        grid-template-areas:
            "intro"
            "resume";
    }
}



/* == == == == intro CSS == == == == */
#intro {
  text-align: right;
  color: black;
  margin-right: 5%;
  /* color: #584A65; */
}
@media (max-width: 512px) {
    .Intro {
      text-align: center;
    }
}

/* == == == == resume CSS == == == == */
.Resume {
  margin-left: 5%;
}
@media (max-width: 512px) {
    .Resume {
      margin-left: auto;
      margin-right: auto;
    }
}





</style>
