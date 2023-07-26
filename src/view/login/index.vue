<template>
  <div class="login-con">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="name"
          label="用户名"
          placeholder="用户名"
        >
         <template #extra>@deepway.ai</template>
        </van-field>
        <van-field
          v-model="password"
          type="password"
          name="psw"
          label="密码"
          placeholder="密码"
        />
      </van-cell-group>
      <div class="submit-con">
        <van-button round block type="primary" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script setup>
import { showToast, showSuccessToast } from 'vant';
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import JSEncrypt from 'jsencrypt'
import api from '@/sevices/user'
import { sStorage } from '@/utils'

const router = useRouter()
const username = ref(null)
const password = ref(null)
async function onSubmit  (value) {
  const { name, psw } = value;
  if(!name){
    showToast('用户名不能为空');
    return;
  }
  if(!psw){
    showToast('密码不能为空');
    return;
  }
  

  const encryptor = new JSEncrypt();
  const pubKey = 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAMQY3f3lq5HICHtmOD/gJqFXXGJHJOzmpGyKtjsLlFr1QokCyI6dRHftq8YX3h5l4NLEGSfXZFcRWJO7hgvOWcUCAwEAAQ=='
  encryptor.setPublicKey(pubKey)//设置公钥
  const rsaPassWord = encryptor.encrypt(psw) 
  const loginUser = name + '@deepway.ai';
  
  const con = await api.pwdLogin({loginUser, password: rsaPassWord});
 
  if(con.code === '00000'){
    showSuccessToast('登录成功');
    sStorage.set('token', con.data.token)
    router.push('/home')
    setTimeout(async() => {
      const res = await api.getUserDetail();
      if(res.code == '00000') sStorage.set('userInfo', con.data);
    }, 500)
  }
}
console.log(api);
</script>

<style lang="less">
.login-con {
  padding-top: 80px;
  .submit-con{
    width: 80%;
    padding: 0 10%;
    margin-top: 40px;
  }
}
</style>
