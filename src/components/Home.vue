<template>
  <div id="app">

    <el-container class="home_container">

      <!-- 头部区域 -->
      <el-header>
        <div>

          <img src="../assets/img/avatar.gif">
          <span>测试后台管理</span>

        </div>
        <el-button type="danger" @click= "logout" class="logout">退出</el-button>
      </el-header>

      <!-- 主题区域模块 -->
      <el-container>

        <!-- 左侧侧边栏区域 -->
        <el-aside width="200px">
          <el-menu background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">

            <el-submenu index="1">

              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>

              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>

            </el-submenu>

          </el-menu>
        </el-aside>

        <!-- 右侧主题main区域 -->
        <el-main>Main</el-main>

      </el-container>

    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },

  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
      this.$msg.success('退出成功')
    }
  }
}
</script>

<style lang="less" scoped>
  .home_container {
    height: 100%;

    .el-header {
      background-color: #373d41;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > div {
        display: flex;
        align-items: center;
        color: #fff;
        font-size: 20px;

        span {
          margin-left: 15px;
        }
      }

      img {
        height: 60px;
      }
    }

    .el-aside {
      background-color: #333744;
    }

    .el-main {
      background-color: #eaedf1;
    }
  }
</style>
