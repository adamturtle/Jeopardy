<template>
    <div id="app">
        <img class="logo" src="./assets/logo.png">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        components: {
        }
    }
</script>

<style>
    html {
        height: 100%;
    }

    body {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    #app {
        margin-top: -100px;
        max-width: 600px;
        font-family: Helvetica, sans-serif;
        text-align: center;
    }

    .logo {
        width: 100px;
        height: 100px
    }
</style>
