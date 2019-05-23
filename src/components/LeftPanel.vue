<template>
    <div>
        <h1>
            Hello,<br />I'm Johnny
        </h1>
        <HeadShot id="headShot"/>
    </div>
</template>

<script>
import HeadShot from '../LeftPanelComponents/HeadShot.vue'

export default {
    components: {
        HeadShot
    },
    props: {
        msg: "hello world"
    },
    data: function() {
        return {
            message: "this is the left panel"
        }
    }
}
</script>

<style scoped>

div {
    
    text-align: right;
    width: 45vw;
    height: 100vh;
    float: left;
    /*border: 1px solid rgb(86, 180, 239); */
 
}

h1 {
    padding-top: 10%;
    font-size: 70px;
}

</style>
