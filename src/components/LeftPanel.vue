<template>
    <div>
        <h1>
            Hello,<br />I'm Johnny
        </h1>
        <HeadShot class="headShot"/>
    </div>
</template>

<script>
import HeadShot from '../LeftPanelComponents/HeadShot.vue'


export default {
    components: {
        HeadShot
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
    padding-right: 20%;
    width: 45vw;
    height: 100vh;
    float: left;
    
    /*border: 1px solid rgb(86, 180, 239); */
 
}

h1 {
    padding-top: 10%;
    padding-bottom: 5%;
    font-size: 80px;
}

.headShot {
    margin-top: 15px;
}



</style>
