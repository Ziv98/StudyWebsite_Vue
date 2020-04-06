<template>
    <div id="row" style="padding-left: 21%">
        <el-card class="box-card" style="float: bottom;position: relative;height: 500px;width: 920px">
            <div slot="header" class="clearfix" style="height: 20px">
                <span style="float: left;color:darksalmon;font-weight: bolder;font-size: larger">热门视频</span>
            </div>
            <div class="block" style="text-align: left;">
                <div style="float: left">
                    <div>
                        <el-carousel style="width: 400px;cursor: pointer" height="250px">
                            <el-carousel-item v-for="item in data" :key="item.num" style="height: 100%;width: 100%">
                                <img :src="item.imageurl" style="width: 100%;height: 100%;">
                                <h3 class="small" style="color: black">{{ item.num }}</h3>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <div>
                        <ul>
                            <li class="lwh" @click="liaocc" style="cursor: pointer">文章</li>
                        </ul>
                    </div>
                </div>
                <div style="float: right;padding-right: 330px">
                    <ul>
                        <li class="lwh" @click="liaocc" style="text-align: left;cursor: pointer">文章</li>
                    </ul>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "ArticleList",
        methods:{
            liaocc(){
                console.log(123)
                this.$router.push({path:'/'})
            }
        },
        data(){
            return{
                data:[
                    {
                        num:"权恩妃wlp",
                        imageurl: require("@/assets/Eunbi.jpg")
                    },
                    {
                        num:"2 亿像素手机 2020 年诞生！",
                        imageurl: require("@/assets/罗.jpg")
                    },
                    {
                        num:"liaocc是傻逼",
                        imageurl: require("@/assets/liaocc.jpg")
                    }
                ],
                count:0,
            }
        }
    }
</script>

<style scoped>
    #row .el-table td,.building-top .el-table th.is-leaf {
        border:  none;
    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }
    .box-card {
        width: 800px;
    }
    .el-carousel__item h3 {
        color: white;
        font-size: 22px;
        position: absolute;
        bottom: 0;
        left: 0%;
        margin-bottom: 30px;
        margin-left: 50px;
    }
    .lwh{
        color: black;
    }
    .lwh:hover{
        color:coral;
    }
</style>