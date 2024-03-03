<script>
export default {
    data(){
        return{
            isActive: false
        }    
    },

    methods: {
        toggle(){
            this.isActive = !this.isActive
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="item item_clickable" :class="{'item_active': isActive}" @click="toggle">+</div>
    </div>
</template>

<style>
body {
    margin: 0;
    user-select: none;
}

.container {
    max-width: 600px;
    padding: 20px;
    gap: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
}

div {
    text-align: center;
}

.item {
    width: 100px;
    height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: white;
    background-color: black;
}

.item_active {
    background-color: blueviolet;
}

</style>