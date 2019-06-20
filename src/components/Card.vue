<template>

        <div :class="['card', 'notification', color]" :style="getWidth">
        <div class="card-content">
            <p class="title is-1">
                Co-Founder @ DeepNeuron, Monash University's AI Research Laboratory.
            </p>
        </div>
        <footer class="card-footer">
            <p class="card-footer-item">
                <span>
                    website
                </span>
            </p>
            <p class="card-footer-item">
                <span>
                    learn more
                </span>
            </p>
        </footer>
    </div>

    
</template>

<script>
export default {
    name: 'Card',
    props: [
        'color',
        'content',
        'isMobile'
    ],
    computed: {
        getWidth: function() {
            if (this.isMobile) {
                return "width: 100%"
            }
            else {
                return "width: 45%"
            }
        }
    }
}
</script>

<style scoped>

</style>
