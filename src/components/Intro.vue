<template>
    <div>
        <h1 class="intro-title"><span style="font-size: 0.5em">Hi,</span> I'm Johnny.</h1>
        <h2 class="intro-subtitle">
            Deep Learning Engineer<br>
            Web Developer<br>
            Space Nerd
        </h2>
        <Tags class="tags"/>
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

<style>
@import url('https://fonts.googleapis.com/css?family=Exo&display=swap');

.intro-title {
    /* color: #584A65; */
    font-weight: 700;
    font-size: 4.5em;
    font-family: Roboto;
}
@media (max-width: 512px) {
    .intro-title {
        font-size: 3.5em;
        align-items: center;
    }
}

.intro-subtitle {
    /* color: #584A65; */
    font-size: 1.25em;
}

.tags {
    font-size: 3em;
}
@media (max-width: 512px) {
    .tags {
        align-items: right;
    }
}
</style>

