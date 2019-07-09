<template>
    <div>
        <span style="font-size: 2.5em; font-weight: 700px">Hi,</span>
        <span class="intro-title"> I'm Johnny.</span>
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

