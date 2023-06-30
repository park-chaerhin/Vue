import { createApp, ref } from 'vue'

const app = createApp({}) 

// component('컴포넌트 이름', {스크립트})
app.component('MyComp',{
    props:{
        title: {
            type: String,
            default: 'Default Title',
            required: true,
            validator: function(value){
                return typeof value == String
            }
        },
        data: {
            type: Object,
            default: () => {
                return []
            },
        }
    },

    setup() {
        const count = ref(0)
        return {count}
    },


    template:`
        <h3 v-text="title" />
        <span v-for="i in data" :key="i"> {{ i }} </span>
        <p>{{count}}</p>
    `
})


app.mount('#app')
