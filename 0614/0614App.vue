<template>
    <div id="app">
        <div id="header"></div>
        <div id="main"></div>
        <div id="footer"></div>
    </div>
</template>
<style>
 html, body{height: 100%;}
 body{margin: 0; padding: 0;}
 #app{height: 100%;}
 #header{background: rgb(255,170,170); height: 100px;}
 #main{background: rgb(165,250,165); height: calc(100% - 150px);}
 #footer{background: rgb(156,156,255); height: 50px;}
</style>