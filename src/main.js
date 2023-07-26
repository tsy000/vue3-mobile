import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import './assets/font/iconfont.css'
// Toast
import 'vant/es/toast/style';
// Dialog
import 'vant/es/dialog/style';
// Notify
import 'vant/es/notify/style';
// ImagePreview
import 'vant/es/image-preview/style';

const app = createApp(App);
app.use(router);
app.mount('#app');
