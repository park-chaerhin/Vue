<template>
  <v-container>
    <p class="display-1 my-4">새로운 페이지</p>
    <v-divider></v-divider>
    <p class="display-2 my-4">새로운 페이지입니다.</p>

    <v-card>
      <v-list>
        <v-list-title></v-list-title>
      </v-list>
    </v-card>

    <div class="text-center">
      <!-- 버튼에서 fab, large 어트리뷰트를 사용해서 큰 원으로 설정 -->
      <v-btn fab large class="mt-10" color="purple" dark to="/main">
        <span class="mdi mdi-arrow-left">main</span>
      </v-btn>
      <v-btn fab large class="mt-10" color="purple" dark to="/sub">
        <span class="mdi mdi-arrow-left">sub</span>
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
