<template>
  <!-- <div>
    <h2>** V-pre **</h2>
    <div class="Opt">
      <h2>Options API</h2>
      <p>{{ vpre }}</p>
      <p v-pre>{{ vpre }}</p>
    </div>
    <hr />
    <div class="Comp">
      <h2>Composition API</h2>
      <p>{{ vpre2 }}</p>
      <p v-pre>{{ vpre2 }}</p>
    </div>
  </div> -->

  <!-- <div>
    <h2>** v-bind & v-model **</h2>
    <hr />
    <div class="vbind">
      <h2>1. v-bind</h2>
      <p>입력 상자의 값을 변경해 보세요.</p>
      <p>
        입력 : 
        <input type="text" v-bind:value="vbind" />
      </p>
      <p>출력 : {{ vbind }}</p>
    </div>
    <hr />
    <div class="vmodel">
      <h2>2. v-model</h2>
      <p>입력 상자의 값을 변경해 보세요.</p>
      <p>
        입력 : 
        <input type="text" v-model="vmodel" />
      </p>
      <p :title="vmodel">출력 : {{ vmodel }}</p>
    </div> 
  </div> -->

  <!-- <div>
    <h2> **v-on** </h2>
    <hr />
    <p>출력 : {{counter}}</p>
    <p>
      <button @click.prevent="onClick">함수 호출하여 값 증가시키기</button>
      <button @click="onClick">함수 호출하여 값 증가시키기</button>
    </p>
  </div> -->

  <!-- <div>
    <h2> **v-on** </h2>
    <hr />
    <p>출력 : {{counter}}</p>
    <p>
      <button @click.prevent="onClick">함수 호출하여 값 증가시키기</button>
      <button @click="counter++">함수 호출하여 값 증가시키기</button>
    </p>
  </div> -->

  <!-- <div>
    <h2> **v-on** </h2>
    <hr />
    <p>출력 : {{counter}}</p>
    <p>
      <button @click.prevent="onClick">함수 호출하여 값 증가시키기</button>
      <button @click="onClick">함수 호출하여 값 증가시키기</button>
    </p>
  </div> -->

  <!-- <div>
    <h2> **v-on** </h2>
    <hr />
    <p>출력 : {{counter}}</p>
    <p>
      <button @click.prevent="onClick">함수 호출하여 값 증가시키기</button>
      <button @click="onClick">함수 호출하여 값 증가시키기</button>
    </p>
  </div> -->

  <!-- <div>
    <h2>** v-if **</h2>
    <hr />
    <p>현재 값 : {{counter}}</p>
    <p v-if="counter<5">현재 값이 5보다 작습니다.</p>
    <p v-else-if="counter == 5">현재 값이 5 입니다.</p>
    <p v-else>현재 값이 5보다 큽니다.</p>
    <p>
      <button @click="counter++">함수 호출하여 값 증가시키기</button>
    </p>
  </div> -->

  <!-- <div>
    <h2>** v-if **</h2>
    <hr />
    <p>현재 값 : {{counter}}</p>
    <p v-if="counter<5">현재 값이 5보다 작습니다.</p>
    <p v-else-if="counter == 5">현재 값이 5 입니다.</p>
    <p v-else>현재 값이 5보다 큽니다.</p>
    <p>
      <button @click="onClick">함수 호출하여 값 증가시키기</button>
    </p>
  </div> -->

  <div>
    <h2>** v-for **</h2>
    <hr />
    <ul>
      <li v-for="item in items" key="item.key">{{item}}</li>
    </ul>
  </div>

</template>

<!-- <script>
export default{
  // 같은 문법이지만 차이점 확인!
/// Options API
data(){
  return {
    vpre: '<i> Options API TEXT </i>'
  }
},
/// Composition API
setup(){
  const vpre2 = '<i> Composition API TEXT </i>'
  return{
    // vpre2:vpre2
    vpre2
  }
}
}
</script> -->

<!-- <script>
import {ref} from 'vue'
export default{
  setup(){
    const vbind = ref('Print Text!!')
      /// const vmodel = 'Print Text!!'  출력란에 반영 안됨!
      /// const vmodel = ref('Print Text!!')  ref사용못해, 사용전에 가져와야해
    const vmodel = ref('Print Text!!')

    return{
      vbind,
      vmodel
    }
  }
}
</script> -->

<!-- <script>
export default{
  // Options API
  data(){
    return{
      counter: 0
    }
  },
  methods:{
      /*
      onClick: function(){}
      onClick: () => {}
      onClick(){}
      */
    onClick(e){
      /*
      위에
      <button type='button' @click='' />
      <button @click.prevent='' />
      이렇게 썼으면 if~ 쓰지 않아도 됨
      */
      if(e){
        e.preventDefault(); // 실행하지마 = @click.prevent=''
      }
      this.counter++
    }
  }
}
</script> -->

<!-- <script>
export default{
  // Options API
  data(){
    return{
      counter: 0
    }
  },
}
</script> -->

<!-- <script>
import {ref} from 'vue'
export default{
  // Composition API
  setup(){
    let counter= ref(0)

    const onClick=(evt)=>{
      if(evt){
      evt.preventDefault();
      }
      counter.value++
    }
    return{
      counter,
      onClick
    }
  }
}
</script> -->

<!-- <script setup>
//Composition API 
import {ref} from 'vue'

let counter = ref(0)
const onClick = (evt) => {
  if(evt){
    evt.preventDefault();
  }
  counter.value++
}
</script> -->

<!-- <script>
import {ref} from 'vue'
export default{
  //Options API
  // data(){
  //   return{
  //     counter: 0
  //   }
  // }

  //Composition API
  setup(){
    let counter = ref(0)

    const onClick = (e) => {
      if(e){
        e.preventDefault();
      }
      counter.value++
    }

    return{
      counter,
      onClick
    }
  }
}
</script> -->

<script>
import {ref} from 'vue'
import {reactive} from 'vue'

export default{
  setup(){
    let items = reactive({
      /*
      'first':{
        name:'hong',
        age: 20,
        job: 'student'
      } 실제로는 이런 형식~
      */
      1: '첫 번째 객체',
      2: '두 번째 객체',
      3: '세 번째 객체',
      4: '네 번째 객체',
    })

    return{
      items
    }
  }
}
</script>
