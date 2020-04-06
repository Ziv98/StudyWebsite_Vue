<template>
    <div class="MySelf">
        <div>
            <Nav></Nav>
        </div>
        <div style="padding-top: 180px;padding-left: 21%">
                <el-card class="box-card" style="float: bottom;position: relative;width: 920px;">
                    <div slot="header" class="clearfix" style="height: 20px">
                        <span style="float: left;color: black;font-weight: bolder;font-size: larger">个人中心</span>
                    </div>
                    <div>
                        <el-row>
                            <el-col :span="6">
                                <div class="demo-basic--circle">
                                    <div class="block">
                                        <el-avatar shape="circle" :size="160" :src="squareUrl"></el-avatar>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="4" style="padding-top: 30px">
                                <div>
                                    <h2>{{username}}</h2>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="mainmsg" style="padding-left: 40px">
                        <div style="padding-top: 20px">
                            <span>
                                <el-row v-if="changemode==true">
                                    <label style="font-size: larger">性别：</label>
                                    <el-radio v-model="msg.sex" label="男">男</el-radio>
                                    <el-radio v-model="msg.sex" label="女">女</el-radio>
                                </el-row>
                                <el-row v-else>
                                    <label style="font-size: larger">性别：</label>
                                    <label style="font-size: larger">{{msg.sex}}</label>
                                </el-row>
                            </span>
                        </div>
                        <div style="padding-top: 20px" class="block">
                            <span class="demonstration" style="font-size: large">出生日期：</span>
                            <el-date-picker
                                    v-if="changemode==true"
                                    v-model="msg.birthday"
                                    type="date"
                                    placeholder="选择日期"
                                    value-format="timestamp"
                                    :editable="false"
                                    @change="dateChange"
                                    >
                            </el-date-picker>
                            <label v-else style="font-size: larger">{{msg.birthday | formatDate}}</label>
                        </div>
                        <div style="padding-top: 20px">
                            <span>
                                <label style="font-size: larger">电子邮箱：</label>
                                <el-input v-if="changemode==true" class="inputsize" v-model="msg.mail"></el-input>
                                <label v-else style="font-size: larger">{{msg.mail}}</label>
                            </span>
                        </div>
                        <div style="padding-top: 20px">
                            <span>
                                <label style="font-size: larger">手机号：</label>
                                <el-input v-if="changemode==true" class="inputsize" v-model="msg.phonenum"></el-input>
                                <label v-else style="font-size: larger">{{msg.phonenum}}</label>
                            </span>
                        </div>
                        <div style="padding-top: 20px">
                            <span>
                                <label style="font-size: larger">所在地：</label>
                                <el-input v-if="changemode==true" class="inputsize" v-model="msg.address"></el-input>
                                <label v-else style="font-size: larger">{{msg.address}}</label>
                            </span>
                        </div>
                        <div style="padding-top: 20px">
                            <span>
                                <label style="font-size: larger">个性签名：</label>
                                <el-input v-if="changemode==true" class="inputsize" v-model="msg.describe"></el-input>
                                <label v-else style="font-size: larger">{{msg.describe}}</label>
                            </span>
                        </div>
                        <div style="padding-top: 30px">
                            <el-button v-if="changemode==true" type="primary" @click="save" round style="margin-left: 45%;" :plain="true">保存</el-button>
                            <el-button v-else type="primary" round style="margin-left: 45%;" @click="change">修改</el-button>
                        </div>
                    </div>
                </el-card>
        </div>
    </div>
</template>

<script>
    import Nav from "@/components/Nav";
    // import Avatar from 'vue-avatar';
    export default {
        name: "MySelf",
        components: {
            Nav,
            // Avatar
        },
        data() {
            return {
                username: '',
                squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
                msg: {
                    sex: '',
                    birthday: '',
                    mail: '',
                    phonenum: '',
                    address: '',
                    describe: '',
                },
                changemode: '',
            }
        },
        filters: {
            formatDate: function (value) {
                let date = new Date(value);
                let y = date.getFullYear();
                let MM = date.getMonth() + 1;
                MM = MM < 10 ? ('0' + MM) : MM;
                let d = date.getDate();
                d = d < 10 ? ('0' + d) : d;
                return y + '-' + MM + '-' + d;
            }
        },
        created() {
            this.changemode = false;
            this.username = this.$cookies.get("username");
            this.$axios.post("getpersonmsg", {
                username: this.username,
            })
                .then(res => {
                    this.msg = res.data
                })
        },
        methods: {
            change() {
                this.changemode = true;
            },
            save() {
                let Send=/^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
                if(this.msg.mail && !Send.test(this.msg.mail)){
                    this.$message.error("邮箱格式不对!")
                    return
                }
                Send=/^1\d{10}$/;
                if(this.msg.phonenum && !Send.test(this.msg.phonenum)){
                    this.$message.error("手机格式不对!")
                    return
                }
                this.$axios.post("changepersonmsg", this.msg)
                    .then(res => {
                        if (res.data == 'ok') {
                            this.$message({
                                message: '保存成功',
                                type: 'success'
                            });
                            this.changemode = false;
                        } else {
                            this.$message.error('保存失败');
                        }
                    })
            },
            dateChange(val) {
                this.msg.birthday=val;
                console.log(this.msg.birthday);
            },
        }
    }
</script>

<style scoped>
    .mainmsg{
        position:relative;
        padding-left: 10px;
        text-align: left;
    }
    .inputsize{
        width: 60%;
        padding-top: 20px;
    }
    .labelsize{
        height: 60px;
        vertical-align:middle;
        display:inline-block;
    }
</style>