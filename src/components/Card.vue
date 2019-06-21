<template>
    <div id="infoCard" :class="['card', 'notification', color]">
        <div class="card-content is-paddingless">
            <p class="title">
                {{getContent(title)}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: [
        'color',
        'title',
    ],
    methods: {
        getContent (title) {
            var para = this.$store.getters.content.filter(entry => {
                if (title == entry.title) {
                    return entry.para
                }
            })  
            return para[0].para
        }
    }
}
</script>

<style scoped>


</style>
