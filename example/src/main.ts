import Vue from 'vue';
import App from './App.vue';
import VueVTribute from 'vue-v-tribute';
import { TributeItem } from 'tributejs';

Vue.config.productionTip = false;
Vue.use(VueVTribute, {
  noMatchTemplate: () => null,
  lookup: 'name',
  menuItemTemplate: (item: TributeItem<any>) => {
    return `${item.original.name} - ${item.original.username}`;
  },
  selectTemplate: function(item: TributeItem<any>) {
    return '@' + item.original.username;
  },
});
new Vue({
  render: h => h(App),
}).$mount('#app');
