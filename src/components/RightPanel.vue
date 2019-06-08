<template>
    <div>
        <div class="nav-buttons">
            <v-btn flat v-on:click="pageToShow = 'About'">About</v-btn>
            <v-btn flat v-on:click="pageToShow = 'Projects'">Projects</v-btn>
            <v-btn flat v-on:click="pageToShow = 'Interests'">Interests</v-btn>
            <v-btn flat v-on:click="pageToShow = 'Travel'">Travel</v-btn>
            <v-btn flat v-on:click="pageToShow = 'Resume'">Resume</v-btn>
        </div>

        <About class="content-card" v-show="pageToShow == 'About'"/>
        <Interests class="content-card" v-show="pageToShow == 'Interests'" />
        <Projects class="content-card" v-show="pageToShow == 'Projects'" />
        <Resume class="content-card" v-show="pageToShow == 'Resume'" />
        <Travel class="content-card" v-show="pageToShow == 'Travel'" />
    </div>
</template>


<script>
import About from '../RightPanelComponents/About.vue';
import Interests from '../RightPanelComponents/Interests.vue';
import Resume from '../RightPanelComponents/Resume.vue';
import Projects from '../RightPanelComponents/Projects.vue';
import Travel from '../RightPanelComponents/Travel.vue';

export default {
    components: {
        About, 
        Interests, 
        Resume, 
        Projects, 
        Travel
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
