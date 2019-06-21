import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        content: [
            {
                title: "DeepNeuron",
                para: "Co-Founder @ DeepNeuron, Monash University's AI Research Laboratory."
            },
            {
                title: "NovaRover",
                para: "Software Engineer @ Nova Rover, an engineering team building a prototype Mars Rover."
            },
            {
                title: "GLH",
                para: "1st Place @ Global Legal Hackathon Melbourne"
            },
            {
                title: "Infocentric",
                para: "Developer @ Infocentric"
            }
        ]
    },
    getters: {
        content: state => state.content
    }
})