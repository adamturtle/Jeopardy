<template>
    <link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900,300italic,400italic,600italic,700italic,900italic' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>
    <!-- <div class="container">
        <img src="./assets/img/logo-jeopardy.jpg" height="204" width="600" alt="Jeopardy" class="logo" />
    </div> --><!-- /.container -->
    <div id="app" class="main-content-wrapper main-content-toggle-left">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        components: {
        }
    }
</script>

<style lang="scss">
    @import "./assets/bootstrap/css/bootstrap.min.css";
    @import "./assets/bootstrap/css/bootstrap-theme.css";

    .logo {
        max-height: 70px;
        width: auto;
    }
</style>
