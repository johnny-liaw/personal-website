<template>
    <div>
        <div class="nav-buttons is-marginless">
            <v-btn flat outline ripple round v-on:click="pageToShow = 'About'">About</v-btn>
            <v-btn flat outline ripple round v-on:click="pageToShow = 'Nova'">Nova Rover</v-btn>
            <v-btn flat outline ripple round v-on:click="pageToShow = 'AI'">AI Research</v-btn>
            <v-btn flat outline ripple round v-on:click="pageToShow = 'Web'">Web-dev Projects</v-btn>
        </div>
        <About v-if="pageToShow == 'About'"/>
    </div>
</template>


<script>
/* eslint-disable */
import About from '../RightPanelComponents/About.vue';
import AI from '../RightPanelComponents/AI.vue';
import Nova from '../RightPanelComponents/Nova.vue';
import Webdev from '../RightPanelComponents/Webdev.vue';


export default {
    components: {
        About, 
        AI, 
        Nova, 
        Webdev
    }, 
    data() {
        return {
            message: "this is the right panel", 
            pageToShow: 'About'
        }
    }, 
}
</script>


<style scoped>

.nav-buttons { 
    padding-top: 10%;
}

.content-card {
    margin-top: 5%;
    overflow: scroll;
    height: 70vh;
    width: 75vh;
}


</style>
