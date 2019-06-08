<template>
  <v-app style="overflow: hidden; height: 100vh">
    <v-container>
      <v-layout row wrap>

        <v-flex xs12 sm6 md6>
          <LeftPanel />
        </v-flex>
        <v-flex xs12 sm6 md6>
          <RightPanel />
        </v-flex>

      </v-layout> 
    </v-container>
  </v-app>
</template>

<script>

import LeftPanel from './components/LeftPanel.vue'
import RightPanel from './components/RightPanel.vue'
import CountryFlag from 'vue-country-flag'


export default {
  name: 'App',
  components: {
    LeftPanel, 
    RightPanel
  },
  data () {
    return {
      //
    }
  }
}
</script>
