<template>
    <div class="background" @keyup.enter="login">
        <h1 style="color: cornflowerblue; text-align:center;padding-top: 190px">323日语网</h1>
        <el-input
                style="width: 30%;"
                placeholder="请输入账号"
                v-model="username">
            <i slot="prefix" class="el-input__icon el-icon-user"></i>
        </el-input><br><br>
        <el-input style="width: 30%" placeholder="请输入密码" v-model="password" show-password>
            <i slot="prefix" class="el-input__icon el-icon-lock"></i>
        </el-input><br>
        <el-col style="padding-top: 15px">
            <el-button type="primary" plain style="width: 100px" @click="login">登录</el-button>
            <el-button type="primary" plain style="width: 100px" @click="register">注册</el-button>
        </el-col>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: '',
                password: '',
                checked: false,
                pswnull:false,
                usererror:false
            }
        },
        methods:{
            login(){
                if(this.password==''){
                    console.log("abc")
                    this.$message({
                        center: true,
                        message: '请输入密码',
                        type: 'error'
                    })
                }
                else{
                    this.$axios.post('/login',{
                        username: this.username,
                        password: this.password,
                    })
                    .then(response=>{
                        console.log(response);
                        if(response.data =='ok'){
                            this.$cookies.set("username",this.username,60*60*24*7)
                            this.$router.push({path:'/home'})
                            } else {
                                this.password='';
                                this.$message({
                                    center: true,
                                    message:'用户名或密码错误',
                                    type: 'error'
                                })

                        }
                        }
                    )
                    .catch(function (error){
                        console.log(error);
                    });
                }
            },
            register(){
                this.$router.push({path:'/register'})
            },
        }
    }
</script>

<style scoped>
    .background{
        background-image: url(../assets/star.jpg);
        background-size: 100% 100%;
        position:absolute;
        width: 100%;
        height: 100%;
    }
</style>