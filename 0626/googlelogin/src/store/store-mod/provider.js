//파이어베이스 앱 객체 모듈 가져오기
import firebase from 'firebase/compat/app'
//파이어베이스 패키지 모듈 가져오기
import 'firebase/compat/auth'
import router from '@/router'

export default{
    state:{
        /// 사용자 정보를 담을 개체(변수) 생성/저장
        oUser: null //사용자 정보를 담을 '객체'   /// 객체={key: value}
    },
    mutations:{
        /// state에서 생성한 변수에 값 설정,변경/저장
        ///????????????????????????????? fnSetUser함수 첫번째 자리=무조건state , 함수 실행 시 매개변수(인자)는 payload 자리에 들어와!
        //사용자 객체를 저장
        fnSetUser(state, payload){
            state.oUser = payload
        }
    },
    getters:{
        /// state에 저장된 값 가져와(이벤트활용해서 불러와=함수형식)
        //사용자 객체를 반환
        fnGetUser(state){
            return state.oUser
        },
        //사용자 객체의 값의 유무로 로그인 여부 반환
        fnGetAuthStatus(state){
            return (state.oUser != null)
        }
    },
    actions:{
        /// 외부 API 연동~
        /// 함수내부 내용: 1/상태변경(기다려~)  2/then, 해야할 일  3/catch, 오류발생 시 전달내용
        
        //이메일 회원 가입 처리
        fnRegisterUser({commit}, payload) {
            commit('fnSetLoading', true) //스토에어 시간걸림으로 상태변경  
            /// component에서 actions으로 전달: dispatch  //  (외부API 일처리 ->) action이 commit 이용해서 mutation에 값 저장  //  state에 저장  //  저장된 값 getter가 가져가~

            //파이어베이스에 이메일 회원 생성 및 저장
            /// to firebase : 사용자 이메일/비번 데이터 저장
            firebase.auth().createUserWithEmailAndPassword(payload.pEmail, payload.pPassword)
            .then(pUserInfo => {
                //신규 회원 이메일 정보를 스토어에 저장
                commit('fnSetUser', {
                    email: pUserInfo.user.email  //firebase에 user추가
                })
                commit('fnSetLoading', false)  //스토어에 시간완료 상태 변경
                commit('fnSetErrorMessage', '')  //스토어 에러메시지 초기화   /// 초기화하지 않으면 정상작동시에도 계속 에러메시지 떠있어
                router.push('/main')  //로그인 후 첫 화면으로 이동
            })
            .catch(err => {
                ///회원가입 실패 시 전달내용
                commit('fnSetErrorMessage', err.message)
                commit('fnSetLoading', false)
            })
        },

        //이메일 회원 로그인
        fnDoLogin({commit}, payload) {
            commit('fnSetLoading', true) //스토어에 시간걸림으로 상태변경

            //파이어베이스에 이메일 회원 로그인 인증 처리 요청
            firebase.auth().signInWithEmailAndPassword(payload.pEmail, payload.pPassword)
            .then(pUserInfo => {
                //로그인이 성공하면 스토어에 계정정보 저장
                commit('fnSetUser', {
                    id: pUserInfo.user.uid,  
                    name: pUserInfo.user.displayName,
                    email: pUserInfo.user.email,
                    photoURL: pUserInfo.user.photoURL
                })
                commit('fnSetLoading', false)  //시간걸림 상태 해제
                commit('fnSetErrorMessage', '')  //에러메세지 초기화
                router.push('/main')  //로그인 후 화면으로 이동 (=메인화면으로 리디렉션)
            })
            .catch(err => {
                commit('fnSetErrorMessage', err.message)
                commit('fnSetLoading', false)
            })
        },

        //구글 계정 회원 로그인(팝업)
        fnDoGoogleLogin_Popup({commit}) {
            commit('fnSetLoading', true)  //스토어에 시간걸림으로 상태변경

            //파이어베이스에 구글회원 로그인 인증 처리 요청
            //로그인제공자객체를 생성
            var oProvider = new firebase.auth.GoogleAuthProvider();

            //오픈 계정의 범위를 설정
            //https://developers.google.com/identity/protocols/googlescopes
            oProvider.addScope('profile');
            oProvider.addScope('email');
            firebase.auth().signInWithPopup(oProvider)
            .then(pUserInfo => {
                commit('fnSetUser', {
                    id: pUserInfo.user.uid,  
                    name: pUserInfo.user.displayName,
                    email: pUserInfo.user.email,
                    photoURL: pUserInfo.user.photoURL
                })
                commit('fnSetLoading', false)  //시간걸림 상태 해제
                commit('fnSetErrorMessage', '')  //에러메세지 초기화
                router.push('/main')  //로그인 후 화면으로 이동 (=메인화면으로 리디렉션)
            })
            .catch(err => {
                commit('fnSetErrorMessage', err.message)
                commit('fnSetLoading', false)
            })
        },

        //자동 로그인 처리
        fnDoLoginAuto({commit}, pUserInfo) {
            /// 상태정보 -> vuex에 저장
            /// 정보구조 : 자동로그인 사용자 정보->사용자1->...->사용자n  /  자동로그인은 다른 사용자와 구분할 필요 없어서 사용자(.user) 삭제 -> pUserInfo.uid

            /// 자동로그인은 페이지 이동X

            //자동 로그인 시 스토어에 계정정보 저장
            commit('fnSetUser', {
                id: pUserInfo.uid,  
                name: pUserInfo.displayName,
                email: pUserInfo.email,
                photoURL: pUserInfo.photoURL
            })
            commit('fnSetLoading', false)  //시간걸림 상태 해제
            commit('fnSetErrorMessage', '')  //스토어 에러메시지 초기화
        },

        //로그아웃 처리
        /// 로그아웃 = '세션정보 없애!'-> 로그아웃 완료 페이지로 이동
        fnDoLogout({commit}) {
            //파이어베이스에 로그아웃 요청
            firebase.auth().signOut()  /// 사용자'만' 로그아웃~
            commit('fnSetUser', null)  //스토어에 계정정보 초기화
            router.push('/')  //첫 화면으로 이동
        }
    }
}