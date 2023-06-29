import { createApp, ref, } from 'vue'

// 애플리케이션 인스턴스 생성
const app = createApp({})

// 신규 컴포넌트를 app에 등록
app.component('counter', {
    inject: ['counter_header'],
    setup(){
        /// script내용
        const count = ref(0)
        return {count}
    },
    template: `
        <span>{{ counter_header }}</span>
        <button @click="count++" v-text="count" />
    `
})

// 생성한 인스턴스(app)를 #app 엘리먼트에 장착 
app.config.globalProperties = "Vue 3 App"
app.provide('counter_header','Counter')
app.mount('#app')