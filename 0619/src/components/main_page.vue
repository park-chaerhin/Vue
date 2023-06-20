<template>
  <v-container>
      <div class="text-center" display-3 my-4>메인 페이지</div>
      <v-row>
        <v-col sm="10" offset-sm="1">
          <!-- 제목을 입력받으면 sParam 데이터와 바인딩 시켜 저장 -->
          <v-text-field label="매개변수1" v-model="sParam1">
          </v-text-field>
          <v-text-field label="매개변수2" v-model="sParam2">
          </v-text-field>
        </v-col>
      </v-row>
      <div class="text-center">
        <!--확인 단추를 누르면 매개변수값을 가지고 서브페이지로 이동 -->
        <v-btn large class="mt-5" color="purple" dark @click="fnGoSub">확인</v-btn>
      </div>
  </v-container>
</template>

<script>
export default {
  // 두 개의 매개변수 데이터를 저장
  data: function(){ //data: ()=>{}, 특별한 선언이 없다면=load event에 실행 // function(){return~}과 data:a='1'~의 차이 : 값을 인식할 수 있다/없다 // component내에 데이터는 함수형식! return 필수!
    return{
      sParam1:'',
      sParam2:'',
    }
  },
  methods:{
      // 입력받은 두 개의 데이터를 라우터에 저장하여 서브페이지로 이동 및 전달
      /*
        <router-link to='--path에 지정할 이름'
      */
      fnGoSub: function(){
        this.$router.push({  //다른 속성에 있는 값 사용 시 = this, 전역변수 전달 = $, 함수 방식으로 전달 = push
          name:'sub_page',  // name 대신 path 사용 가능 // but name 속성 사용 한 이유 : 똑같은 component라도 다른 주소로 사용하고 싶어서 
          params: {  //params 정해져있어~
            p_param1: this.sParam1,
            p_param2: this.sParam2
          }
        })
    }
  }
}
</script>
