<template>
<!--
  <section class="hero is-fullheight">
    <div class="hero-head">
        <h1 class="title is-size-1 is-family-sans-serif">Hi. I'm Johnny.</h1>
        <h2 class="subtitle">Deep Learning Engineer | Web Developer | Space Nerd</h2>
        <Tags />
    </div>
  </section>
-->

<section class="hero is-fullheight-with-navbar">
      <div class="columns is-vcentered" style="height: 100vh">
          <div class="column has-text-centered is-two-fifths">
            <h1 class="title is-size-1 is-family-sans-serif">Hi. I'm Johnny.</h1>
            <h2 class="subtitle">
              Deep Learning Engineer<br>
              Web Developer<br>
              Space Nerd
            </h2>
            <Tags />
        </div>
        <div class="column is-flex-mobile">
          <Card class="is-hidden-tablet" :color="'is-primary'" isMobile="true"/>
          <Card class="is-hidden-mobile" :color="'is-danger'"/>
        </div>
      </div>
</section>


</template>

<script>
/* eslint-disable */

import LeftPanel from './components/LeftPanel.vue'
import RightPanel from './components/RightPanel.vue'
import Tags from './components/Tags.vue'
import Card from './components/Card.vue'
import Headshot from './LeftPanelComponents/HeadShot.vue'

export default {
  name: 'App',
  components: {
    Tags,
    Headshot,
    Card
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style scoped>
column {
  display: flex
}
.image {
  margin: auto;
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>
