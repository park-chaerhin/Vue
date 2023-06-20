<template>
  <v-app>
    <!-- 앱바 테마를 primary로 설정 -->
    <v-app-bar app color="primary" dark>
      <!-- 좌측에 메뉴 아이콘 생성 -->
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>멀티 페이지</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <span class="mdi mdi-dots-vertical"></span>
      </v-btn>
    </v-app-bar>

    <!-- 내용영역에 라우터 페이지 렌더링 -->
    <v-main>
      <!-- 페이지 장면전환 효과 : transition=out-in -->
      <v-slide-x-transition mode="out-in">  <!--https://vuetifyjs.com/en/styles/transitions/ 참조-->
        <router-view></router-view>
      </v-slide-x-transition>
    </v-main>

    <!-- footer 영역 테마를 secondary로 설정 -->
    <v-footer color="secondary" fixed dark>
      <div class="mx-auto">Create By VueJS</div>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'App',

    data: () => ({
      //
    }),
  };
</script>