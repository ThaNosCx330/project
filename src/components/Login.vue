<template>
  <div class="login_container">
    <div class="login_main">
      <div class="avatar_img">

        <img src="../assets/logo.png">

      </div>

      <!-- 登录表单 -->
      <div class="login_form">
        <el-form label-width="0px">

          <!-- 用户名 -->
          <el-form-item>
            <el-input></el-input>
          </el-form-item>

          <!-- 密码 -->
          <el-form-item>
            <el-input></el-input>
          </el-form-item>

          <!-- 按钮区域 -->
          <el-form-item class="btns">
              <el-button type="primary">登录</el-button>
              <el-button type="info">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scope="this api replaced by slot-scope in 2.5.0+">
  .login_container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2B4B6B;
    height: 100%;

    .login_main {
      position: absolute;
      background-color: #fff;
      width: 450px;
      height: 300px;
      border-radius: 10px;

      .avatar_img {
        width: 130px;
        height: 130px;
        border: 1px solid #ddd;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: #eee;
        }
      }

      .login_form {

        .el-form {
          padding: 20px 20px;
          position: absolute;
          bottom: 0;
          width: 100%;
          box-sizing: border-box;
        }

      }

      .btns {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
</style>
