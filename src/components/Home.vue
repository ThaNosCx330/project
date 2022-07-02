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
          <el-menu background-color="#545c64" text-color="#fff" active-text-color="#409EFF" unique-opened router="">

            <el-submenu :index= "item.id + '' " v-for= "item in menuList" :key= "item.id" >

              <template slot="title">
                <svg class="icon" aria-hidden="true">
                  <use :href= "avatarList[item.id]"></use>
                </svg>
                <span>{{item.authName}}</span>
              </template>

              <el-menu-item :index= " '/' + itemChildren.path" v-for= "itemChildren in item.children" :key= "itemChildren.id">
                <template slot="title">
                  <svg class="icon" aria-hidden="true">
                    <use :href= "avatarList[itemChildren.id]"></use>
                  </svg>
                  <span>{{itemChildren.authName}}</span>
                </template>
              </el-menu-item>

            </el-submenu>

          </el-menu>
        </el-aside>

        <!-- 右侧主题main区域 -->
        <el-main>
          <router-view></router-view>
        </el-main>

      </el-container>

    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuList: [],
      avatarList: {
        125: '#icon-yonghuming',
        103: '#icon-quanxianguanli',
        101: '#icon-shangpinguanli',
        102: '#icon-dingdanguanli',
        145: '#icon-shujutongji',
        110: '#icon-yonghu',
        111: '#icon-yonghu',
        112: '#icon-yonghuquanxianguanli',
        104: '#icon-shangpinliebiao',
        115: '#icon-fenlei',
        121: '#icon-shangpinfenlei24',
        107: '#icon-dingdan-',
        146: '#icon-shujubaobiao'
      }
    }
  },

  methods: {

    // 退出功能
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
      this.$msg.success('退出成功')
    },

    // 获取左侧列表

    async leftList () {
      const { data: res } = await this.$http.get('menus')

      if (res.meta.status !== 200) return this.$msg.error(res.meta.msg)
      // console.log(res)

      this.menuList = res.data
    }
  },

  created () {
    this.leftList()
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

      .el-menu {
        // 消除样式因为边框不整齐的原因
        border: none;
        padding-left: 25px;

        .el-menu-item {
          font-size: 12px;
          .icon {
            position: absolute;
            top: 20px;
            left: 17px;
            width: 1em;
            height: 1em;
            vertical-align: -0.15em;
            fill: currentColor;
            overflow: hidden;
          }
        }
      }
    }

    .el-main {
      background-color: #eaedf1;
    }

    .icon {
      position: absolute;
      top: 18px;
      left: -6px;
      width: 1.5em;
      height: 1.5em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }
  }
</style>
