<template>
    <v-container flow>
        <v-row>
            <v-col cols="12" class="text-center my-5">
                <h1 class="display-1">회원가입 페이지</h1>
            </v-col>
        </v-row>

        <v-row>
            <!--반응형에 따라 다르게 너비 조절-->
            <v-col class="text-center" cols="8" offset="2" sm="6" offset-sm="3">
                <!--양식의 입력이 제출되면 페이지를 다시 로드하지 않도록 prevent 사용 : <a>,<button type="submit" 동작 작동하지마!-->
                <form @submit.prevent="fnRegisterUser">
                    <!--필수 입력사항이 되도록 required 어트리뷰트 적용-->
                    <v-text-field name="Email" label="email" type="email" v-model="sEmail" required></v-text-field>
                    <v-text-field name="Password" label="password" type="password" v-model="sPassword" required></v-text-field>
                    
                    <!--비밀번호 확인이 맞는지 검사하도록 rules 어트리뷰트 사용-->
                    <!--- rules: 비밀번호 입력칸/확인칸 내용이 일치하는지 검사 --->
                    <v-text-field name="ConfirmPassword" label="ConfirmPassword" type="password" v-model="sConfirmPassword" required :rules="[fnComparePassword]"></v-text-field>
                    
                    <!--시간지연상태인 경우 버튼은 사라지게 함-->
                    <v-btn type="submit" v-if="!fnGetLoading" color="orange" dark>Join</v-btn>
                    <!--시간지연의 경우 회전 프로그레스 원 표시-->
                    <v-progress-circular v-if="fnGetLoading" indeterminate :width="7" :size="70" color="grey lighten-1"></v-progress-circular>

                    <!--오류 메시지가 있을 경우 표시-->
                    <v-alert type="error" dismissible v-model="bAlert">{{ fnGetErrMsg }}</v-alert>
                </form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default{
    data(){ /// 초기값은 비워두기~
        return{
            bAlert: false,  //오류 메시지 표시 여부
            sEmail: '',  //이메일 입력값 임시 저장
            sPassword: '',  //비밀번호 입력값 임시 저장
            sConfirmPassword: '',  //비밀번호 입력 확인값 임시 저장
        }
    },
    computed: { /// 비밀번호 값이 일치하지 않거나 에러코드 일 때 나타날 내용 작성
        //비밀번호와 비밀번호 확인 값이 일치하는지 여부 검사
        fnComparePassword(){
            if(this.sPassword == this.sConfirmPassword) return true
            else return '비밀번호가 일치하지 않습니다!'
        },
        //오류메시지 스토어에서 읽어서 반환
        fnGetErrMsg(){
            return this.$store.getters.fnGetErrorMessage
        },
        //시간지연상태 스토어에서 읽어서 반환
        fnGetLoading(){
            return this.$store.getters.fnGetLoading
        }
    },
    methods: {
        //스토어에 이메일 회원가입 처리 요청
        fnRegisterUser(){
            if(this.fnComparePassword == true){
                this.$store.dispatch('fnRegisterUser', {
                    pEmail: this.sEmail,
                    pPassword: this.sPassword
                })
            }
        }
    },
    /// 오류처리? monitoring = watch 속성
    watch: {
        //fnGetErrMsg 함수가 오류메시지를 반환하면 오류 메시지 표시
        fnGetErrMsg(pMsg){
            if(pMsg) this.bAlert = true
        },
        //bAlert 값이 false로 바뀌면 에러메시지 초기화
        bAlert(pValue){
            if(pValue == false) this.$store.commit('fnSetErrorMessage', '')
        }
    }
}
</script>