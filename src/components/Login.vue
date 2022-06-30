<template>
  <div class="login_container">
    <div class="login_main">
      <div class="avatar_img">

        <img src="../assets/logo.png">

      </div>

      <!-- 登录表单 -->
      <div class="login_form">
        <el-form :model= "formData" :rules= "rules">

          <!-- 用户名 -->
          <el-form-item prop="username">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yonghuming"></use>
              </svg>
            <el-input v-model= "formData.username"></el-input>
          </el-form-item>

          <!-- 密码 -->
          <el-form-item prop="password">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-mima"></use>
              </svg>
            <el-input v-model= "formData.password" type="password"></el-input>
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
  data () {
    return {
      formData: {
        username: 'admin',
        password: '123456'
      },

      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style lang="less" scope>
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

          .el-input {
            input {
              padding: 0 30px;
            }
          }
        }

      }

      .btns {
        display: flex;
        justify-content: flex-end;
      }
    }

  }

      .icon {
        position: absolute;
        top: 5px;
        width: 2em;
        height: 2em;
        fill: currentColor;
        overflow: hidden;
        z-index: 100;
    }

</style>
