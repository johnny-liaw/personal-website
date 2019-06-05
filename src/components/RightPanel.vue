<template>
    <div>
        <button v-on:click="pageToShow = 'About'">About</button>
        <button v-on:click="pageToShow = 'Projects'">Projects</button>
        <button v-on:click="pageToShow = 'Interests'">Interests</button>
        <button v-on:click="pageToShow = 'Travel'">Travel</button>
        <button v-on:click="pageToShow = 'Resume'">Resume</button>

        <Intro v-show="pageToShow == 'About'"/>
        <Interests v-show="pageToShow == 'Interests'" />
        <Projects v-show="pageToShow == 'Projects'" />
        <Resume v-show="pageToShow == 'Resume'" />
        <Travel v-show="pageToShow == 'Travel'" />
    </div>
</template>


<script>
import Intro from '../RightPanelComponents/Intro.vue';
import Interests from '../RightPanelComponents/Interests.vue';
import Resume from '../RightPanelComponents/Resume.vue';
import Projects from '../RightPanelComponents/Projects.vue';
import Travel from '../RightPanelComponents/Travel.vue';

export default {
    components: {
        Intro, 
        Interests, 
        Resume, 
        Projects, 
        Travel
    }, 
    data() {
        return {
            message: "this is the right panel", 
            pageToShow: null
        }
    }, 
}
</script>


<style scoped>
div { 
    text-align: left;
	width: 50vw;
    height: 100vh;
    float: left;
    /*border: 1px solid rgb(86, 20, 239); */
 
}

h2 {
    padding-left: 20%;
    padding-right: 20%;
    padding-top: 15%;
}

</style>
