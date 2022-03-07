const Home = () => import('views/home/index.vue');
const Category = () => import('views/category/index.vue');
const Cart = () => import('views/cart/index.vue');
const Profile = () => import('views/profile/index.vue');

// 路由对象
const routes = [
  {
    path: '',
    redirect: './home',
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/profile',
    component: Profile,
  },
];

export default routes;
