<template>
    <div>
        <h2>I'm a Web Developer and Deep Learning Engineer </h2>
        <h2>I Co-Founded DeepNeuron, Monash University's AI Research Laboratory</h2>
        <h2>I'm an Engineer on the Nova Rover Team. We're the first team in the southern hemisphere to qualify 
            and compete our Mars Rover at the University Rover Challenge, 
            the world's biggest space-themed robotics competition.
        </h2>
        <h2>I also surf, travel and ponder about the future of AI</h2>

        <span v-for="country in countries">
            <country-flag v-bind:country='country' size='big'/>
        </span>
    </div>
</template>


<script>
export default {
    data: function() {
        return {
            message: "this is the right panel",
            countries: ['it', 'us', 'gb', 'fr', 'be', 'nl', 'is',
                        'es', 'de', 'cz', 'at', 'hu', 'hr', 'pt', 
                        'cn', 'my', 'sg', 'il', 'jo', 'au', 'mo',
                        'hk', 'twfa']
        }
    }
}
</script>


<style scoped>
h2 {
    padding-top: 0;
    padding-bottom: 10%;
}

country-flag {
    border-radius: 10%;
}
</style>
