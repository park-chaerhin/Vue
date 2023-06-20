<template>
    <div id="app">
        <h2>Vue 프로젝트에서 라우트 사용하기</h2>
        <h3>* 라우터 링크 사용</h3>
        <p>
            <router-link to="/main">메인 페이지</router-link>
            <router-link to="/sub">서브 페이지</router-link>
        </p>
        <hr>
        <router-view></router-view>
    </div>
</template>
  