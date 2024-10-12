<script setup>
import { zhCn } from 'element-plus/es/locales.mjs';
</script>

<template>
  <div>
    <!-- 配置中文包 -->
    <el-config-provider :locale="zhCn"><router-view></router-view></el-config-provider>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.el-card{
  border: none !important;
}
</style>
