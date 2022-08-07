import { createApp } from 'vue';
import { createPinia } from 'pinia';
import '@/styles/styles.scss'
import App from '@/App.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia).mount('#app');
