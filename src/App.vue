<template>
  <div id="app">
    <LeftPanel />
    <RightPanel />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LeftPanel from './components/LeftPanel.vue'
import RightPanel from './components/RightPanel.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    LeftPanel, 
    RightPanel
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}


</style>
