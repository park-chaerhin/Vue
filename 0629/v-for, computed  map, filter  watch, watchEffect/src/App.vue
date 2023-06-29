<template>
  <!-- <div>
    <h2>** v-for **</h2>
    <ul>
      <li>{{ items }}</li>
      <hr />
      <li>{{ items[1] }}</li>
      <li>{{ items[2] }}</li>
      <li>{{ items[3] }}</li>
      <hr />
      <li v-for="(item, index) in items" v-bind:key="item.index">[{{ index }}] {{ item }}</li>
    </ul>
  </div> -->

  <!-- <div>
    <h1>** COMPUTED 사용 : Options API **</h1>
    <hr />
    <h3>- Small Item</h3>
    <p v-for="item in small" :key="item.id">{{ item.text }}</p>
    <hr />
    <h3>- Big Item</h3>
    <p v-for="item in big" :key="item.id">{{ item.text }}</p>
  </div> -->

  <!-- <div>
    <h1>** COMPUTED 사용 : Composition API **</h1>
    <hr />
    <h3>- Small Item</h3>
    <p v-for="item in small" :key="item.id">{{ item.text }}</p>
    <hr />
    <h3>- Big Item</h3>
    <p v-for="item in big" :key="item.id">{{ item.text }}</p>
  </div> -->

  <!-- <div>
    <h2>** WATCH **</h2>
    <hr />
    <p>First Name: {{ firstName }}</p>
    <hr />
    <p>
      <input type="text" v-model="firstName">
    </p>
  </div> -->

  <!-- <div>
    <h2>** 값 증가시키기 **</h2>
    <hr />
    <p>현재 값: {{ count }}</p>
    <hr />
    <p>
      <button @click="count++">값 증가</button>
    </p>
  </div> -->

  <!-- <div>
    <h2>** 값 증가시키기 : Watch **</h2>
    <hr />
    <p>현재 값: {{ count }}</p>
    <hr />
    <p>
      <button @click="count++">값 증가</button>
    </p>
  </div> -->

  <!-- <div>
    <h2>** WATCH??? **</h2>
    <hr />
    <p>
      First Name <input type="text" v-model="firstName"><br />
      Last Name <input type="text" v-model="lastName">
    </p> 
    <hr />
    <p>Full Name : {{ firstName }} {{ lastName }} </p><br />
  </div> -->

  <!-- <div>
    <h2>** WATCH **</h2>
    <hr />
    <p>
      First Name <input type="text" v-model="firstName"><br />
      Last Name <input type="text" v-model="lastName">
    </p> 
    <hr />
    <p>Full Name : {{ fullName }} </p>
  </div> -->

  <!-- <div>
    <h2>** COMPUTED **</h2>
    <hr />
    <p>
      First Name <input type="text" v-model="firstName"><br />
      Last Name <input type="text" v-model="lastName">
    </p> 
    <hr />
    <p>Full Name : {{ fullName }} </p>
  </div> -->

  <!-- <div>
    <p>현재 값: {{ count }}</p>
    <p><button @click="count++">값 증가</button> </p>
  </div> -->

  <!--<div>
    <h1>* Composition API : watch 사용 다중변수 *</h1>

    <p>현재 값: {{ count1 }}</p>
    <p><button @click="count1++">값 증가</button> </p>

    <hr />

    <p>현재 값: {{ count2 }}</p>
    <p><button @click="count2++">값 증가</button> </p>
  </div>-->

  <div>
    <h1>* Composition API : watcheffect 사용 다중변수 *</h1>

    <p>현재 값: {{ count }}</p>
    <p><button @click="count++">값 증가</button> </p>

    <p>감시 상태: {{ state }}</p>
    <p><button @click="onStop()">감시 중지</button> <!--composition 방식이라 onStop() 괄호 없으면 함수 아닌 변수--> 
    <button @click="onStart()">감시 시작</button></p>
  </div>

</template>

<!-- <script>
export default{
  setup(){
    const items = {
      1:"첫 번째 객체",
      2:"두 번째 객체",
      3:"세 번째 객체",
    }

    return {
      // items: items 값이 같으면 생략 가능
      items
    }
  }
  
}
</script> -->

<!-- <script>
/* 콘솔 : map1 */
export default{
  setup(){
    let arr1 = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun',]
    let map1 = arr1.map(item => '신나는' + item)
    return{
      map1
    }
  }
}
</script> -->

<!-- <script>
/* 콘솔 : map2 */
export default{
  setup(){
    let arr2 = [1,3,5,7,9]
    let map2 = arr2.map(item => item + 1)
    return{
      map2
    }
  }
}
</script> -->

<!-- <script>
/* 콘솔 : map3 */
export default{
  setup(){
    let arr3 = [1,3,5,7,9]
    let map3 = arr2.map(item => item * 2)
    return{
      map3
    }
  }
}
</script> -->

<!-- <script>
/* 콘솔 : map4 */
export default{
  setup(){
    let fruit = [
      {color: 'yellow', name: 'banana'},
      {color: 'red', name: 'tomato'},
      {color: 'orange', name: 'orange'},
      {color: 'green', name: 'grape'},
      {color: 'red', name: 'apple'}      
    ]
    let fruitColor = fruit.map(item => item.color)
      /// fruit.map(item == v-for='item in fruit'같은 뜻..
    return{
      fruitColor  /// color만 모아놓은 새로운 배열 생성!
    }
  }
}
</script> -->

<!-- <script>
/* 콘솔 : map5 */
export default{
  setup(){
    const color = ['yellow', 'red', 'orange', 'green', 'red']
    const rtn = color.map( (item, index) => {
      return {
        id: index,
        name: item 
      }  /// 실행문이 한 개 이상이니까 중괄호, return 생략X
    })
    return{
      rtn
    }
    /// {id:0, name:'yellow'},...로 출력!
  }
}
</script> -->

<!--<script>
/* 콘솔 : map6 */
export default{
  setup(){
    let arr4 = [1,3,5,7,9]
    let map4 = arr2.map(item => item > 5)
    return{
      map4
    } /// [false, false, false, true, true] 로 출력!!! 다 가져옴
  }
}
</script> -->

<!-- <script>
/* 콘솔 : filter1 */
export default{
  setup(){
    let arr5 = [1,3,5,7,9]
    let map5 = arr2.filter(item => item > 5)
    return{
      map5
    } /// [7, 9] 로 출력!
  }
}
</script> -->

<!-- <script>
/* 콘솔 : filter2 */
export default{
  setup(){
    let fruits = ['kiwi', 'banana', 'apple', 'peach', 'pineapple', 'strawberry', 'watermelon']
    let rst = fruits.map(item => item.length > 6)
    return{
      rst
    } /// [false, false, false,...] 로 출력!
  }
}
</script> -->

<!-- <script>
/* 콘솔 : filter3 */
export default{
  setup(){
    let fruits = ['kiwi', 'banana', 'apple', 'peach', 'pineapple', 'strawberry', 'watermelon']
    let rst = fruits.filter(item => item.length > 6)
    return{
      rst
    } /// [pineapple, strawberry, watermelon] 로 출력!
  }
}
</script> -->

<!-- <script>
/* 콘솔 : filter4 */
export default{
  setup(){
    let fruits = ['kiwi', 'banana', 'apple', 'peach', 'pineapple', 'strawberry', 'watermelon']
    let search = (query) => {
      return fruits.filter( (item) => 
      item.toLowerCase().includes( query.toLowerCase() ) )  /// 대문자,소문자 상관없이 검색결과 추출하기위해 다 소문자로 바꿔버림!
    }
    search('');  ///''에 담을 변수 = query로 설정
  }
  /// search('ea') => ['peach', 'pineapple'] 출력됨!!!!!!!!!!!!!!!
}
</script> -->

<!-- <script>
export default{
  //Options API
  data(){
    return{
      arr: [
        {id:1, text: '1번 아이템'},
        {id:2, text: '2번 아이템'},
        {id:3, text: '3번 아이템'},
        {id:4, text: '4번 아이템'},
        {id:5, text: '5번 아이템'},
      ]
    }
  },
  computed: {
    small(){
      return this.arr.filter( (f_item) => f_item.id < 3)
    }, 
    /// item.id<3의 결과값 small()에 저장 
    /// -> {id:1, text: '1번 아이템'},{id:2, text: '2번 아이템'} 값이 두 개! : v-for 필요
    big(){
      return this.arr.filter( (f_item) => f_item.id >= 3)
    }
  }
  /*
  함수사용!
    methods : event handler로 불러오기 가능
    computed : 필요할 때 바로 사용

  computed & data 공통점 : template에 데이터 전달
  */
}
</script> -->

<!-- <script>
  //Composition API
import {computed} from 'vue'

export default{
  setup(){
    const arr = [
        {id:1, text: '1번 아이템'},
        {id:2, text: '2번 아이템'},
        {id:3, text: '3번 아이템'},
        {id:4, text: '4번 아이템'},
        {id:5, text: '5번 아이템'},
    ]
    const small = computed(
      /// 위에 있는 변수 '계산'해서 집어넣어야해! -> function(){}만 갖고는 안됨 -> computed()
      /// computed함수 없이 function(){} 하면 오류없이(문법문제X) 아무것도 안뜸
      function(){
        return arr.filter( (f_item) => f_item.id < 3)
      }
    )
    const big = computed(
      function(){
        return arr.filter( (f_item) => f_item.id >= 3)
      }
    )
    return{small, big}
  },
}
</script> -->

<!-- <script>
export default{
  //Options API
  data(){
    return{
      firstName: 'John'
    }
  },
  watch: {
    firstName: (firstName) => {
      console.log('First Name: '+ firstName)
    }
  }
}
</script> -->

<!-- <script>
  /* 값 증가시키기 */
export default{
  data(){
    return{
      count: 0
    }
  }
}
</script> -->

<!-- <script>
/* 값 증가시키기 : Watch */
export default{
  data(){
    return{
      count: 0
    }
  },
  watch:{
    count: (cur, prev) => {
      console.log('이전 값 :' + prev + ' || ' + '변경된 값 :' + cur)
    }
  }
}
</script> -->

<!-- <script>
  /* */
export default{
  data(){
    return{
      firstName: '',
      lastName: '',
    }
  }
}
</script> -->

<!-- <script>
  /* watch 사용해보기~~~ */
export default{
  data(){
    return{
      firstName: '',
      lastName: '',
      //fullName: firstName +''+ lastName  ///TypeError: instance.update is not a function
      fullName: ''
    }
  },
  watch:{ /// 화살표함수 사용하면 -> error! ;(
    firstName: function(newName){
      this.fullName = newName + '' + this.lastName;
    },
    lastName: function(newName){
      this.fullName = this.firstName + '' + newName;
    }
  }
}
</script> -->

<!-- <script>
  /* 더 간단하게 computed 사용하기 */
export default{
  data(){
    return{
      firstName: '',
      lastName: '',
      /// fullName: '' 값 초기화하지 않아도 됨~
    }
  },
  computed:{
    fullName: function(){
      return this.firstName + ' ' + this.lastName
    }
  }
}
</script> -->

<!-- <script>
  /* Composition API */
import {ref, watch} from 'vue'

export default{
  setup(){
    const count = ref(0)
  
    watch(
      /// 값을 감지할 변수, 변경 후 실행할 함수
      count,
      (newValue, oldValue) => {
        console.log( '현재 값: ' + newValue + ' || ' + '이전 값: ' + oldValue )
      }
    )

    return{
      count
    }
  }
}
</script> -->

<!-- <script>
  /* Composition API : watch 사용 다중변수 */
import {ref, watch} from 'vue'

export default{
  setup(){
    const count1 = ref(0)
    const count2 = ref(0)
  
    watch(
      /// 값을 감지할 변수, 변경 후 실행할 함수
      count1,
      (newValue, oldValue) => {
        console.log( '현재 값: ' + newValue + ' || ' + '이전 값: ' + oldValue )
      },
      {
        immediate: true
      }
    )
    watch(
      // 인자2개 : 감지할 변수, 변수값이 바뀌었을 때 실행할 함수
      count2,
      (newValue, oldValue) => {
        console.log( '현재 값: ' + newValue + ' || ' + '이전 값: ' + oldValue )
      },
    )
    /* =>
      watch(
        [count1, count2], /// 두번째 자리엔 함수 와야하는데 이건 다 인자 -> 인자2개 묶어
        (newValue, oldValue) => {
          console.log( '현재 값: ' + newValue + ' || ' + '이전 값: ' + oldValue )
        }
      )

    */
      
    return{
      count1,
      count2
    }
  }
}
</script> -->

<script>
  /* watchEffect */
import {ref, watch, watchEffect} from 'vue'

export default{
  setup(){
    const count = ref(0)
    const state = ref('감시 중')

    watch(
      count,
      (newValue, oldValue) => {
        console.log(
          '이전 값 : ' + oldValue + ' || ' + '변경된 값 : ' + newValue
          )
      },
      {immediate:true}
    )

    const onStop = () => {
      //alert('test')
      state.value = '감시 중지'
      stop()  //stop함수 실행
    }

    const onStart = () => {
      state.value = '감시 시작'
      start()  
    }

    ///감시 중지 상태 담은 함수 생성
    const stop = watchEffect(() => {
      console.log(
        'Composition API watchEffect Call => count: ' + count.value
      )
    },{
      // flush : pre
      flush: 'post'
    })

    const start = watchEffect( () => {
      console.log(
        'Composition API watchEffect Call => count: ' + count.value
      )
    },{
      flush: 'pre'
    })


    return{
      count,
      state
    }
  }
}
</script>