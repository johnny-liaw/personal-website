<template>
    <div id="infoCard" :class="['notification', color]" style="max-width: 310px">
        <p class="title">
            {{getContent(title)}} 
        </p>
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

<style>


</style>
