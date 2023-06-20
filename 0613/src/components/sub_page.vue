<!--서브 페이지 마크업-->
<template>
    <div>
        <h2>서브 페이지 입니다.</h2>
        <button type='button' v-on:click.prevent='fnMainPage'>메인 페이지로 이동(라우터 함수 사용)</button>
    </div>
</template>
<script>
    export default{
        methods:{
            // 라우터 함수로 이동(push)할 때는 $router 글로벌 객체에 이동할 주소 입력
            fnMainPage: function(){
                this.$router.push('/main')
            }
        }
    }
</script>