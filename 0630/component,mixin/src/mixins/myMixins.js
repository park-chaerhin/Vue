let myMixin = {
    props: {},
    created(){
        console.log(this.data)
    },
    methods: {
        onRightclick: function(){
            this.data--
        }
    }
}

export default myMixin