<!--메인 페이지 디자인-->
<template>
  <v-container> <!--app.vue/<router-view />에 로드 / 최상위루트는1개 : container여러개 만들어야하면 div로 묶어-->
    <p class="display-1 my-4">메인 페이지</p> <!--접근성 높이기 위해서는 <h1~6>로 대체해서 사용!-->
    <v-divider></v-divider>
    <p class="display-2 my-4">메인 페이지입니다.</p>
    <div class="text-center">
      <!-- 버튼에서 fab, large 어트리뷰트를 사용해서 큰 원으로 설정 -->
      <!-- 
          내부링크 : <router-link to='/sub'></router-link> 
            -> <element href=""> 사용가능 
      -->
      <v-btn fab large class="mt-10" color="purple" dark to="/sub">
        <span class="mdi mdi-arrow-right">sub</span> 
      </v-btn>
      <v-btn fab large class="mt-10" color="purple" dark to="/new">
        <span class="mdi mdi-arrow-right">new</span> 
      </v-btn>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'main_page',

    data: () => ({

    }),
  }
</script>
