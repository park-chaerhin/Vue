<template>
  <v-container>
    <div class="text-center display-1 my-4">서브 페이지</div>
    <v-divider></v-divider>
    <!-- 라우터로 전달받은 두 개의 매개변수 값을 데이터 속성에 저장한 뒤에 가져와서 출력 -->
    <div class="text-center display-3 my-4">{{ sTitle1 }}</div>
    <div class="text-center display-3 my-4">{{ sTitle2 }}</div>
    <div class="text-center">
      <v-btn fab class="mt-5" color="teal" dark to="/main">
        <v-icon>mdi-replay</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  // 라우터로 전달받은 값을 가져와서 데이터 속성에 저장함
  data: function(){  // data(){} = data: function(){} = data: ()=>{}
    return {
      sTitle1: this.$route.params.p_param1,
      sTitle2: this.$route.params.p_param2
    } // localhost:8080/sub?p_param1=입력값&p_param2=입력값 으로 전달
  }
}
</script>
