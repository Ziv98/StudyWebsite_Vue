<template>
  <div class="background">
    <div style="width: 100%;height: 150px" class="navbackground">
      <div>
        <el-row style="text-align: center;width: 100%;cursor: pointer;">
          <el-col :span="3">
            <h1 style="color: pink; text-align:center; padding-right: 20px;padding-top: 3px;cursor: pointer" @click="handlehome">日语</h1>
          </el-col>
          <el-col :span="8">
            <el-row style="padding-top: 10px">
              <el-col :span="5">
                <h3 @click="handlehome" class="itemcolor" style="text-align:center;">首页</h3>
              </el-col>
              <el-col :span="5">
                <h3 @click="handlefifty" class="itemcolor" style="text-align:center;">五十音图</h3>
              </el-col>
              <el-col :span="5">
                <h3 @click="handlevideo" class="itemcolor" style="text-align:center;">在线视频</h3>
              </el-col>
              <el-col :span="5">
                <h3 @click="handleshopping" class="itemcolor" style="text-align:center;">网上商城</h3>
              </el-col>
              <el-col :span="4">
                <h3 @click="handleforum" class="itemcolor" style="text-align:center;">论坛</h3>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="9">
            <el-input v-model="input" placeholder="搜索你喜欢的东西" style="margin-top: 23px;width: 400px;">
              <i slot="suffix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </el-col>
          <el-col :span="4" style="display:block;cursor: pointer;padding-top: 30px;padding-left: 150px">
            <el-dropdown :show-timeout=showtimeout @command="UserHandle">
                          <span style="color: white;font-size: larger">
                              {{username}}
                          </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-user" command="myself">个人中心</el-dropdown-item>
                <el-dropdown-item icon="el-icon-reading" command="myblog">我的帖子</el-dropdown-item>
                <el-dropdown-item icon="el-icon-edit" command="myfavourite">我的收藏</el-dropdown-item>
                <el-dropdown-item icon="el-icon-shopping-cart-1" command="mycart">购物车</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-close"  command="logout">注销</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    created() {
      // console.log("123");
      // console.log(this.$cookies.get("username"));
      this.username=this.$cookies.get("username");
    },
    data() {
      return {
        input: '',
        username: ''
      }
    },
    methods: {
      UserHandle(command) {
        if (command == 'myself')
          this.$router.push({path: '/myself'})
        else if(command == 'myblog')
          this.$router.push({path: '/myblog'})
        else if (command == 'myfavourite')
          this.$router.push({path: '/myfavourite'})
        else if (command == 'mycart')
          this.$router.push({path: '/mycart'})
        else if (command == 'logout') {
          this.$axios.post('logout').then(response => {
            console.log(response)
            if (response.data == 'ok')
              this.$router.push({path: '/'})
            else{
              this.$message({
                center: true,
                message: '请重试',
                type: 'error'
              })
            }
          })
        }
      },
      handlehome(){
        this.$router.push({path:'/home'})
      },
      handleshopping(){
        this.$router.push({path:'/onlineshopping'})
      },
      handlefifty(){
        this.$router.push({path:'/fiftytonemap'})
      },
      handleforum(){
        this.$router.push({path:'/forum'})
      },
      handlevideo(){
        this.$router.push({path:'/onlinevideo'})
      }
    }
  }

</script>

<style scoped>
  .background{
    background-image: url(../assets/white.jpg);
    background-size: 100% 100%;
    position:absolute;
    width: 100%;
    height: 100%;
  }
  .navbackground{
    background-image: url(../assets/标题.jpg);
    background-size: 100% 100%;
    position: relative;
    width: 100%;
    height: 100%;
  }
  .itemcolor{
    color: white;
    font-weight: 600;
    font-size: 22px;
  }
  .itemcolor:hover{
    color: pink;
    font-weight: 600;
    font-size: 22px;
  }
</style>
