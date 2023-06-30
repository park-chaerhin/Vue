<!-- <script>
import Header from './components/Header.vue'

export default{
  data(){
    return{
      rtn_title: 'Binding Title :)'
    }
  },

  components:{
    Header,
  },

  methods: {
    changeTitle: function(){
      return this.rtn_title = 'Event Title :('
    }
  }
}
</script> -->

<!-- <template>
  <div>
    <Header></Header>

    <Header title="Header Content!" style="color:black"></Header>

    <Header :title="rtn_title"></Header>

    <button @click.prevent="changeTitle">Change</button>
  </div>
</template> -->

<!-- <template>
  <div>
    <p>{{ `[${msg1}] : [${msg2}]` }}</p>
    <ExComponent v-model:msg1="msg1" v-model:msg2="msg2"></ExComponent>
  </div>
</template>

<script>
import ExComponent from './components/ExComponent.vue'

export default{
  data(){
    return{
      msg1: '초기 데이터1',
      msg2: '초기 데이터2'
    }
  },

  components: {
    ExComponent
  }
}
</script> -->

<!-- <template>
  <div>
    <ExComponent></ExComponent>
  </div>
</template>

<script>
import ExComponent from './components/ExComponent.vue'

export default{
  provide: {      
    msg1: '데이터 공유하기1',
    msg2: '데이터 공유하기2',
  },

  components: {
    ExComponent,
  }
}
</script> -->

<template>
  <div id="main" @click="onlick" @contextmenu.prevent="onRightclick">
    <div class="sub">
      COUNT : {{ data }}
    </div>
    <div class="tips">
      TIPS<br />
      Increase Count : Mouse left click<br />
      Decrease Count : Mouse right click<br />
    </div>
  </div>
</template>
<script>
import ExComponent from './components/ExComponent.vue'
import myMixin from './mixins/myMixins.js'

export default{
  mixins: [myMixin],
  data(){
    return{
      data: 10
    }
  },
  created(){
    console.log('Component')
    console.log('MixIn')
  },
  methods:{
    onlick: function(){
      this.data++
    },
  },
}
</script>
<style>
  .sub{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: orange;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tips{
    width: 250px;
    height: 65px;
    font-size: 14px;
    font-weight: bold;
    background: #fff;
    color: orangered;
    position: fixed;
    left: 0;
    top: 0;
  }
</style>