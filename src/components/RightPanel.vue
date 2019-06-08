<template>
    <div>
        <div class="nav-buttons">
            <v-btn flat outline ripple round v-on:click="pageToShow = 'About'">About</v-btn>
            <v-btn flat outline ripple round v-on:click="pageToShow = 'Nova'">Nova Rover</v-btn>
            <v-btn flat outline ripple round v-on:click="pageToShow = 'AI'">AI Research</v-btn>
            <v-btn flat outline ripple round v-on:click="pageToShow = 'Web'">Web-dev Projects</v-btn>
        </div>

        <About class="content-card" v-show="pageToShow == 'About'"/>
        <AI class="content-card" v-show="pageToShow == 'AI'" />
        <Nova class="content-card" v-show="pageToShow == 'Nova'" />
        <Webdev class="content-card" v-show="pageToShow == 'Web'" />
    </div>
</template>


<script>
import About from '../RightPanelComponents/About.vue';
import AI from '../RightPanelComponents/AI.vue';
import Resume from '../RightPanelComponents/Resume.vue';
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
