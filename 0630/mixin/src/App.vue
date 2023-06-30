<template>
  <div>
    <p>
      ID
      <input type="text" placeholder="ID" v-model="result.id"/>
    </p>
    <p>
      PASSWORD
      <input type="password" placeholder="P.W" v-model="result.pw"/>
    </p>
    <p>
      GENDER
      <input type="radio" name="gender" value="male" v-model="result.gender" />Male
      <input type="radio" name="gender" value="female" v-model="result.gender" />Female
    </p>
    <p>
      SUBJECT
      <span v-for="subject in subject_options" :key="subject">
        <input type="checkbox" v-bind:value="subject" v-model="result.subject" />
        {{subject}}
      </span>
      <!--
      <input type="checkbox" value="HTML"/>HTML
      <input type="checkbox" value="CSS"/>CSS
      <input type="checkbox" value="JAVASCRIPT"/>JAVASCRIPT
      <input type="checkbox" value="VUE JS"/>VUE JS
      <input type="checkbox" value="REACT JS"/>REACT JS
      -->
    </p>
    <p>
      JOB
      <select v-model="result.job">
        <option v-for="option in job_options" :key="option" :value="option">{{ option }}</option>
      </select>
      <!-- <select name="" id="">
        <option value="웹 퍼블리셔">웹 퍼블리셔</option>
        <option value="백엔드 개발자">백엔드 개발자</option>
        <option value="프론트엔드 개발자">프론트엔드 개발자</option>
      </select> -->
    </p>

    <hr />
    <div class="rst">
      <p>ID : {{ result.id }}</p>
      <p>PW : {{ result.pw }}</p>
      <p>GENDER : {{ result.gender }} </p>
      <p>SUBJECT : {{ result.subject }} </p>
      <p>JOB : {{ result.job }} </p>
    </div>
  </div>
</template>

<script>
import {reactive} from 'vue'

export default{
  setup(){
    const id = ''
    const pw = ''
    const gender = 'female'
    const subject = ['JAVASCRIPT']
    const job = '프론트엔드 개발자'

    const subject_options = ['HTML', 'CSS', 'JAVASCRIPT', 'VUE', 'REACT']
    const job_options = ['웹 퍼블리셔', '백엔드 개발자', '프론트엔드 개발자']

    const result = reactive({ id, pw, gender, subject, job })

    return{
      subject_options,
      job_options,
      result,
    }
  }
}
</script>

<style>
p{
  margin-bottom: 10px;
  padding-bottom: 10px;
}
.rst p{
  border: 0 none;
  margin-bottom: 10px;
  padding: 10px 0 0 0;
}
</style>