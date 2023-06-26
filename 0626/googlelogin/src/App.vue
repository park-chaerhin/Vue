<template>
  <v-app>
    <!--반응형 중단점이 데스크톱(lg) 이상일 때 탐색 서랍을 툴바 아래 출력-->
    <!--app 속성 설정 필수-->
    <v-navigation-drawer clipped v-model="drawer" app>
      <v-list>
        <!--items 배열을 읽어와서 차례로 메뉴로 바인딩 하여 표시함-->
        <!--- 로그인 전/후 컨텐츠가 바뀌니까 , for문으로 작성 --->
        <v-list-item value="true" v-for="(item, i) in fnGetMenuItems" :to="item.to" :key="i">
          <v-list-item-action>
            <!--html 엘리먼트의 값으로 바인딩할 때는 v-html 디렉티브 사용-->
            <v-icon v-html="item.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>

        <!--로그인 된 경우만 로그아웃 버튼을 표시함-->
        <v-list-item @click="fnDoLogout" v-if="fnGetAuthStatus">
          <v-list-item-action>
            <v-icon>mdi-aroow-right-bold-box-outline</v-icon>
          </v-list-item-action>
          <v-list-item-title>로그아웃</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!--탐색서랍이 툴바 아래에 위치할 때 메뉴 아이콘이 적절히 좌측에 배치되도록 app과 clipped-left 어트리뷰트 지정-->
    <v-app-bar app clipped-left color="orange" dark>
      <!--햄버거 아이콘은 반응형 크기가 sm이상일 때 숨김-->
      <!--- 탐색서랍 나타난 뒤에 눌리지 않도록 하기 위해서 click.stop --->
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-app-bar-nav-icon>
      <router-link to="/" style="cursor: pointer">
        <!--머티리얼디자인아이콘 사용 시 아이콘 이름에 'mdi-' 붙임-->
        <!--홈로고 아이콘은 반응형 크기가 xs일 때 숨김-->
        <v-icon class="hidden-xs-only" large color="#fff lighten-4">mdi-home</v-icon>
      </router-link>
      <v-toolbar-title class="headline">GoogleLogin</v-toolbar-title>
      <v-spacer></v-spacer>

      <!--툴바의 메뉴명을 표시할 때 xs일 때는 숨기고 나머지 크기에는 보이게 설정-->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text v-for="item in fnGetMenuItems" :key="item.title" :to="item.to">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <!--로그인 된 경우만 로그아웃 버튼을 메뉴에 표시함-->
        <v-btn text @click="fnDoLogout" v-if="fnGetAuthStatus">
          <v-icon left>mdi-arrow-right-bold-box-outline</v-icon>로그아웃
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main> <router-view /> </v-main>

    <v-footer app> <div class="mx-auto">&copy; VueJS</div> </v-footer>
</v-app>
</template>


<script>
  export default {
    name: 'App',
    data() {
      return {
        drawer: false /// = 탐색서랍 감춰라
      }
    },
    computed: {
      /// 인증처리
      // 스토어에서 현재 인증 상태인지 반환
      fnGetAuthStatus() {
        return this.$store.getters.fnGetAuthStatus
      },
      // 로그인 여부에 따라 다르게 탐색서랍과 툴바 메뉴명 항목 배열 반환
      fnGetMenuItems() {
        if(!this.fnGetAuthStatus){  /// 로그인X : 회원가입, register페이지로 이동
          return [{
            title: '회원가입',
            to: '/register',
            icon: 'mdi-lock-open-outline'
          }]
        } else{                    /// 로그인O : 메인페이지 나타나게 해
          return [{
            title: '메인 페이지',
            to: '/main',
            icon: 'mdi-account'
          }]
        }
      }
    },
    /// 이벤트 발생 시 필요한 기능 : methods에 만들어
    methods: {
    // 스토어의 로그아웃 기능사용
    fnDoLogout(){
        this.$store.dispatch('fnDoLogout')
      }
    }
  }
</script>

<style></style>