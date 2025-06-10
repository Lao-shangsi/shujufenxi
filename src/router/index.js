import { createRouter, createWebHashHistory } from "vue-router";

import Layout from "../views/main.vue";
import Login from "../views/login/index.vue";
import DataAnalysis from "../views/yemian/dataAnalysis.vue"
import DataList from "../views/yemian/dataList.vue"
import UserManagement from "../views/yemian/userManagement.vue"



const routes = [
  {
    path: '/',
    component: Layout,
    name: 'main',
    children: [
      {
        path: 'dataAnalysis',
        meta: { id: '/dataAnalysis', name: '数据大屏', icon: 'Platform', describe: '用于展示当前系统中的统计数据、统计报表及重要实时数据' },
        component: DataAnalysis
      },
      {
        path: 'dataList',
        meta: { id: '/dataList', name: '数据列表', icon: 'Platform', describe: '用于展示当前系统中的统计数据、统计报表及重要实时数据' },
        component: DataList
      },
      {
        path: 'userManagement',
        meta: { id: '/userManagement', name: '用户管理', icon: 'Platform', describe: '用于展示当前系统中的统计数据、统计报表及重要实时数据' },
        component: UserManagement
      },
    ]
  },

  {
    path: '/login',
    component: Login
  },
];

const router = createRouter({
  //路由数据
  routes,
  //路由模式
  history: createWebHashHistory(),
});
export default router;
