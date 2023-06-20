
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  // sTitle 값을 상태값으로 정의
  state: {  //component에서 변경된 값 기억해야하는 건 저장해줘(component에서 공유해야 할 변수들 모아둬)
    sTitle:''
  },
  getters: {  //바뀐 값을 저장
    // store의 상태값을 반환함
    fnGetData(state){
      return state.sTitle;
    }
  },
  mutations: { 
    // 매개변수로 전달받은 값을 store에 저장
    fnSetData: function(state, payload){  // = fnsetData(state,payload){return state.sTitle=payload}
      return state.sTitle = payload // 'state에 있는 sTitle값을 payload로 바꿔죠!'
    }
  },
  actions: {
  },
  modules: {
  }
})
