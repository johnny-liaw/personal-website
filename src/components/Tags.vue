<template>
    <div>
        <span class="tag is-dark is-medium has-text-weight-bold">Bulma CSS</span>
        <span class="tag is-info is-medium has-text-weight-bold ml">PyTorch</span>
        <span class="tag is-primary is-medium has-text-weight-bold ml">Vue.JS</span>
        <span class="tag is-link is-medium has-text-weight-bold	ml">Flask</span>
        <span class="tag is-danger is-medium has-text-weight-bold ml">Firebase</span>
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
    padding-top: 30px;
}

.ml {
    margin-left: 10px;
}
</style>
