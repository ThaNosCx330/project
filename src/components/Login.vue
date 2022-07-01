<template>
  <div class="login_container">
    <div class="login_main">
      <div class="avatar_img">

        <img src="../assets/logo.png">

      </div>

      <!-- 登录表单 -->
      <div class="login_form">
        <el-form ref="loginRef" :model= "formData" :rules= "rules">

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
              <el-button type="primary" @click= "loginValidate">登录</el-button>
              <el-button type="info" @click= "resetForm">重置</el-button>
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
  },

  methods: {
    resetForm () {
      // console.log(this)

      this.$refs.loginRef.resetFields()
    },

    loginValidate () {
      this.$refs.loginRef.validate(async boolean => {
        // 第一个参数为布尔值，是否验证成功
        // 第二个参数为哪个未通过验证的数据
        // console.log(boolean, obj)

        if (!boolean) return this.$msg.error('按规则填写用户名和密码')

        const { data: res } = await this.$http.post('login', this.formData)
        // console.log(res, this.formData)
        if (res.meta.status !== 200) return this.$msg.error('登陆失败')
        this.$msg.success('登录成功')

        // token
        window.sessionStorage.setItem('token', res.data.token)

        this.$router.push('/home')
      })
    }
  }
}
</script>

<style lang="less" scope>
  // 注册页面的容器
  .login_container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2B4B6B;
    height: 100%;

    // 注册主要div面板
    .login_main {
      position: absolute;
      background-color: #fff;
      width: 450px;
      height: 300px;
      border-radius: 10px;

      // 注册页面的头像
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

        // 头像的图片
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
