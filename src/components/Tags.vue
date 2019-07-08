<template>
    <div class="tags is-pulled-right">
        <span id="bulma" class="tag is-dark is-medium has-text-weight-bold">Bulma CSS</span>
        <span id="pytorch" class="tag is-info is-medium has-text-weight-bold ml">PyTorch</span>
        <span id="vue" class="tag is-primary is-medium has-text-weight-bold ml">Vue.JS</span>
        <span id="flask" class="tag is-link is-medium has-text-weight-bold	ml">Flask</span>
        <span id="firebase" class="tag is-danger is-medium has-text-weight-bold ml">Firebase</span>
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

<style>


div {
    padding-top: 30px;
}

.ml {
    margin-left: 10px;
}
.tag {
    padding-left: auto;
    padding-right: auto;
};

</style>
