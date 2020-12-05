import Vue          from 'vue'
import VueRouter    from 'vue-router'
import BookHome     from '../pages/BookHome.vue'
import BookCreate   from '../pages/BookCreate.vue'
import BookEdit     from '../pages/BookEdit.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/',  name: 'BookHome', component: BookHome },
  { path: '/create',  component: BookCreate },
  { path: '/edit/:id',  name: 'BookEdit',    component: BookEdit },
];
const vue_router = new VueRouter({
  mode: 'history',
  routes: routes });

export default vue_router