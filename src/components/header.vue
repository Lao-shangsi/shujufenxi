<template>
  <div class="container">
    <el-row>
      <el-col :span="3">
        <div class="logo"><p>XX数据分析系统</p></div>
      </el-col>
      <el-col :span="18">
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item
            v-for="item in menuData"
            :key="item.meta.id || item.path"
            :index="item.meta.id || item.path"
          >
            {{ item.meta.name }}
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="3">
        <div class="btn">
          <el-button type="primary">登录</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
  <script setup>
import { useRouter } from "vue-router";
import { reactive, ref, onMounted } from "vue";

const router = useRouter();
const menuData = reactive(router.options.routes[0].children);
const activeIndex = ref("1");
const handleSelect = (key) => {
  // key 是被选中菜单项的 index
  router.push({ path: key });
};

// 初始化和监听路由变化
onMounted(() => {
  // 初始化当前路由对应的菜单项
  activeIndex.value =
    router.currentRoute.value.meta.id || router.currentRoute.value.path;

  // 监听路由变化，更新菜单项选中状态
  router.afterEach((to) => {
    activeIndex.value = to.meta.id || to.path;
  });
});
</script>
  <style lang="less" scoped>
.container {
  background: rgb(255, 255, 255);
  padding: 1vh;
  margin-bottom: 1vh;
}
.logo {
  color: rgb(25, 138, 231);
  font-size: 20px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>