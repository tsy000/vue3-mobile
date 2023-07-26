
import { showFailToast } from 'vant';
// import api from '@/sevices/user'
// import { useRouter } from 'vue-router'
// import { sStorage } from '@/utils'
// const router = useRouter()



// async function loginOut () {
//     const con = await api.logout();
//       if(con.code == '00000'){
//         sStorage.clear();
//         router.push('/login')
//       }
//   }



export function resResolve(response) {
    
  // TODO: 处理不同的 response.headers
  const { data, status, config, statusText } = response

  if (data?.code === '00000' ) {
    return Promise.resolve(data)
  } else if (data.code === 'A0220') {
    // 登录失效

    showFailToast(data?.message || data?.msg || '登录失效，请重新登录');

    // setTimeout(async() => {
    //   await loginOut(); //退出登录
    // }, 1000) 

    return Promise.reject(data)
  } else if (data.code === 'A0400') {
    // 权限失败
        showFailToast(data?.message || data?.msg || '用户中心');

    // setTimeout(async() => {
    //   await loginOut(); //退出登录
    // }, 1000) 

    return Promise.reject(data)
  } else if (data.code === 'A0301') {
    // 权限失败
            showFailToast(data?.message || data?.msg || '没有登陆权限');

    // setTimeout(async() => {
    //   await loginOut(); //退出登录
    // }, 1000) 

    return Promise.reject(data)
  } else {
      
    /** 根据code处理对应的操作，并返回处理后的message */
   showFailToast(data?.message || data?.msg || '接口失效，请重试');

    
    return Promise.reject(data)
  }
}

export function resReject(error) {

let message='接口失败'

  return Promise.reject({ message, error: error.response?.data || error.response })
}
