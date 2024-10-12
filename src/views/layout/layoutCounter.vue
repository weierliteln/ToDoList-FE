<script setup>
import { Promotion, User, Crop, SwitchButton, CaretBottom } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const keydata = ref('测试')
const handleCommand = async (key) => {
  router.push(`/${key}`)
}
</script>

<template>


  <el-container class="layout-container">
    <el-aside width="200px">
      <div class="el-aside__logo"></div>
      <el-menu
        active-text-color="#1389eb"
       background-color="#fff"
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        text-color="#666"
        router
      >

      <div class="flex items-center" @click="handleCommand('test')">
        <div class="loading">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
          <span
            class="text-sm mr-2"
            style="color: var(--el-text-color-regular)"
          >
            首页
          </span>
        </div>
        <el-menu-item index="/test">
          <el-icon><User /></el-icon>
          <span>测试</span>
        </el-menu-item>
      
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <div><strong>{{keydata}}</strong></div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  
  </el-container>
</template>

<style lang="scss" scoped>
.el-text {
  cursor: pointer;
}
.layout-container {
  .el-container {
    height: 100vh;
    background-color: #f7f8fa;
  // background-image: radial-gradient(rgba(0, 98, 255, 0.075) 2px, transparent 0);
  background-size: 30px 30px;
  background-position: -5px -5px;

  }
  height: 100vh;
  .el-aside {
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    
    &__logo {
      height: 30px;
    }
    .el-menu {
      border-right: none;
    }
  }
  .el-header {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // 盒子阴影
    // box-shadow: 0 0 12px  rgba(0, 0, 0, 0.1);
    .el-dropdown__box {
      display: flex;
      align-items: center;
      .el-icon {
        color: #999;
        margin-left: 10px;
      }

      &:active,
      &:focus {
        outline: none;
      }
    }
  }
  .el-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #666;
  }
}

.items-center{
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  .text-sm{
    padding-left: 10px;
    cursor: pointer;
  }
}


/* From Uiverse.io by satyamchaudharydev */ 
.loading {
  cursor: pointer;
 --speed-of-animation: 0.9s;
 --gap: 6px;
 --first-color: #4c86f9;
 --second-color: #49a84c;
 --third-color: #f6bb02;
 --fourth-color: #f6bb02;
 --fifth-color: #2196f3;
 display: flex;
 justify-content: center;
 align-items: center;
//  width: 100px;
 gap: 4px;
//  height: 100px;
}

.loading span {
 width: 4px;
 height: 50px;
 background: var(--first-color);
 animation: scale var(--speed-of-animation) ease-in-out infinite;
}

.loading span:nth-child(2) {
 background: var(--second-color);
 animation-delay: -0.8s;
}

.loading span:nth-child(3) {
 background: var(--third-color);
 animation-delay: -0.7s;
}

.loading span:nth-child(4) {
 background: var(--fourth-color);
 animation-delay: -0.6s;
}

.loading span:nth-child(5) {
 background: var(--fifth-color);
 animation-delay: -0.5s;
}

@keyframes scale {
 0%, 40%, 100% {
  transform: scaleY(0.05);
 }

 20% {
  transform: scaleY(1);
 }
}
</style>
