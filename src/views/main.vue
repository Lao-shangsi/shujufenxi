<template>
  <div class="common-layout">
    <el-container>
      <el-header> <Header /></el-header>
      <el-main> <RouterView /> </el-main>
    </el-container>
  </div>
</template>


 <script setup>
import Header from "../components/header.vue";
</script>
<style lang="less" scoped>
.common-layout {
  height: 100%;
  .el-container {
    height: 100%;
    .el-main {
      margin-top: 3.5vh;
      background: rgb(255, 255, 255);
      // padding: 0;
    }
  }
}
</style>