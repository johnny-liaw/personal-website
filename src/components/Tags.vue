<template>
    <div>
        <span class="tag is-dark has-text-weight-bold">Bulma CSS</span>
        <span class="tag is-info has-text-weight-bold">PyTorch</span>
        <span class="tag is-primary has-text-weight-bold">Vue.JS</span>
        <span class="tag is-link has-text-weight-bold	">Flask</span>
        <span class="tag is-danger has-text-weight-bold">Firebase</span>
    </div>
</template>

<script>
export default {
    name: 'Tag', 
    props: [
        'img',
        'skill'
    ],
    data () {
        return {

        }
    }
}
</script>

<style scoped>
div {
    margin-top: -14px;
}
span {
    margin-right: 10px;
}
</style>
