<template>
    <div>
        <h1 class="intro-title">Hi, I'm Johnny.</h1>
        <h2 class="intro-subtitle">
            Deep Learning Engineer<br>
            Web Developer<br>
            Space Nerd
        </h2>
        <Tags />
    </div>
</template>

<script>
import Tags from '@/components/Tags.vue'

export default {
    name: 'Intro',
    components: {
        Tags
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Exo&display=swap');

.intro-title {
    color: #584A65;
    font-weight: 700;
    font-size: 4.5em;
    font-family: Roboto;
}

.intro-subtitle {
    color: #584A65;
}
</style>

