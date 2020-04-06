<template>
    <div class="background">
        <h1 style="color: cornflowerblue; text-align:center;padding-top: 190px">323日语网</h1>
        <el-input
                style="width: 30%;"
                placeholder="输入账号"
                v-model="username">
            <i slot="prefix" class="el-input__icon el-icon-user"></i>
        </el-input><br><br>
        <el-input style="width: 30%" placeholder="输入密码" v-model="password1" show-password>
            <i slot="prefix" class="el-input__icon el-icon-lock"></i>
        </el-input><br><br>
        <el-input style="width: 30%" placeholder="再次输入密码" v-model="password2" show-password>
            <i slot="prefix" class="el-input__icon el-icon-lock"></i>
        </el-input><br><br>
        <el-col style="padding-top: 15px">
            <el-button type="primary" plain style="width: 100px" @click="register">注册</el-button>
        </el-col>
        <span style="float:right;font-size: small;margin-right: 35%;"><a href="/">返回登录界面</a></span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: '',
                password1: '',
                password2: ''
            }
        },
        methods:{
            register(){
                if(this.password1!=this.password2){
                    this.$message({
                        center: true,
                        message:'密码不匹配',
                        type: 'error'
                    })
                    this.password1='';
                    this.password2='';
                }
                else{
                    this.$axios.post('register',{
                        username:this.username,
                        password:this.password1,
                    })
                    .then(response=>{
                        console.log(response);
                        if(response.data=='ok'){
                            this.$message({
                            center: true,
                            message:'注册成功',
                            type: 'success'
                        });
                            this.$router.push({path:'/'})
                        }
                        else {
                            this.$message({
                                center: true,
                                message:'用户名已被占用',
                                type: 'error'
                            });
                            this.username='';
                            this.password1='';
                            this.password2='';
                            this.$router.push({path:'/register'})
                        }
                    })
                }
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