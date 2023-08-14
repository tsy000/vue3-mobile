import { createRouter, createWebHistory } from 'vue-router';
import { showToast } from 'vant';
import { sStorage } from '@/utils'

const routes = [
  {
    name: 'notFound',
    path: '/:path(.*)+',
    redirect: {
      name: 'home',
    },
  },
  {
    path: '',
   redirect:'/home',
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('./view/home'),
    meta: {
      title: '首页',
    },
  },{
    name: 'pickTicket',
    path: '/pickTicket',
    component: () => import('./view/pickTicket'),
    meta: {
      title: '拣货出库',
    },
  },{
    name: 'pickTicketDetail',
    path: '/pickTicket/detail',
    component: () => import('./view/pickTicket/detail'),
    meta: {
      title: '拣货详情',
    },
  },{
    name: 'outbound',
    path: '/pickTicket/outbound',
    component: () => import('./view/pickTicket/outbound'),
    meta: {
      title: '全部出库',
    },
  },{
    name: 'scaningoutbound',
    path: '/pickTicket/scaningoutbound',
    component: () => import('./view/pickTicket/scaningoutbound'),
    meta: {
      title: '扫码出库',
    },
  },{
    name: 'outmatrialDetail',
    path: '/pickTicket/outmatrialDetail',
    component: () => import('./view/pickTicket/outmatrialDetail'),
    meta: {
      title: '物料数据',
    },
  },
  {
    name: 'inBound',
    path: '/inBound',
    component: () => import('./view/inBound'),
    meta: {
      title: '收货入库',
    },
  },
  {
    name: 'inBoundDetail',
    path: '/inBound/detail',
    component: () => import('./view/inBound/detail'),
    meta: {
      title: '收货详情',
    },
  },{
    name: 'inbound',
    path: '/inBound/inbound',
    component: () => import('./view/inBound/inbound'),
    meta: {
      title: '整单收货',
    },
  },{
    name: 'scaninginbound',
    path: '/inBound/scaninginbound',
    component: () => import('./view/inBound/scaninginbound'),
    meta: {
      title: '扫码收货',
    },
  },{
    name: 'matrialDetail',
    path: '/inBound/matrialDetail',
    component: () => import('./view/inBound/matrialDetail'),
    meta: {
      title: '添加物料',
    },
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('./view/login'),
    meta: {
      title: '登录',
    },
  },
  {
    name: 'user',
    path: '/user',
    component: () => import('./view/user'),
    meta: {
      title: '会员中心',
    },
  },
  {
    name: 'cart',
    path: '/cart',
    component: () => import('./view/cart'),
    meta: {
      title: '购物车',
    },
  },
  {
    name: 'goods',
    path: '/goods',
    component: () => import('./view/goods'),
    meta: {
      title: '商品详情',
    },
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
  // 如果没有token 去登录页
  // const token = sStorage.get('token');
  const title = to.meta && to.meta.title;
  // if(to.name !== 'login' && !token){
  //   showToast('请先登录')
  //   sStorage.clear();
  //   router.push('/login');
  // }
  if (title) {
    document.title = title;
  }
  next();
});

export { router };
