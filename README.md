#### 环境配置

node.js 版本 v20.16.0
https://nodejs.org/zh-cn/download/package-manager

推荐使用 nvm https://nvm.uihtm.com

编辑器 vsCode https://code.visualstudio.com

vite https://cn.vitejs.dev/

vue-router https://router.vuejs.org/zh

vuex https://vuex.vuejs.org/zh

接口文档 https://apifox.com/apidoc/shared-205c93aa-6b50-4a1a-85be-b93dc5304443

axios https://www.axios-http.cn/docs/intro

Vant https://vant-ui.github.io/vant/#/zh-CN

#### 路由创建

创建路由和对应页面

引入 vue-router 创建路由实例

挂载 router 到 vue 实例上

对应页面使用<RouterView />配置路由显示

#### UI 框架

Element Plus https://element-plus.org/zh-CN

安装步骤

- 下载依赖 npm install element-plus
- 按需引入

  - 执行命令
    npm install -D unplugin-vue-components unplugin-auto-import

- vite 配置修改，**注意：修改配置后需要重启项目**

```js
// vite.config.ts
import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
```

#### 页面 Layout 布局

引入 Container 布局容器

#### aside 组件内容

通过 useRouter 获取数据
使用递归组件来实现
@element-plus/icons-vued 的引入 -----当前进度

#### header 组件内容

flex 布局
引入 vuex 实现组件通信
点击按钮展开收起菜单
tag 显示和点击关闭逻辑

#### 用户鉴权

用户注册
用户登录获取 token 和 userinfo 缓存
请求头携带 token 传给后端
响应拦截器进行校验
前置路由守卫对 token 进行校验

#### 权限配置

创建菜单权限
账号管理关联菜单权限
登录后调用权限接口获取菜单数据
路由动态配置
