<template>
    <h1>{{message}}</h1>
    <main></main>
</template>
<script>


export default {
    name: "Game",
    data(){
        return{
            message: "Remember your cards!"
        }
    }
}
</script>

<style lang="scss" scoped>
    main{
        width: 75%;
        height: 50%;
        background-color: aliceblue;
    }
</style>
