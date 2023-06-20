<template>
  <v-app>
    <v-main>
      <!-- fill-height는 브라우저 높이를 100%, 수직으로 가운데 정렬 -->
      <v-container fluid fill-height>  <!--fluid :화면 전체-->
        <v-row>
          <!--text-center는 수평 가운데 정렬-->
          <v-col cols="12" class="text-center">
            <!--타이포 스타일은 title, 글자색은 흰색으로 설정-->
            <h1 class="title white--text">HELLO</h1>
            <p class="caption">by VueJS</p>
            <img src="./assets/hello-pwa.png" alt="">  <!--assets = images 폴더?-->
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  created(){ //= $document.ready 
    //배경색을 다크모드로 함
    this.$vuetify.theme.dark=true
  }
});
</script>
