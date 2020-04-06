<template>
    <div style="padding-left: 21%">
        <el-card class="box-card" style="float: bottom;position: relative;height: 500px;width: 920px;">
            <div slot="header" class="clearfix" style="height: 23px">
                <span style="float: left;color: cornflowerblue;font-weight: bolder;font-size: larger">323日语论坛</span>
                <el-button round type="primary" icon="el-icon-edit" style="position: absolute;right: 20px;padding-bottom: 7px;text-align: center" @click="handleoutput">发帖</el-button>
            </div>
            <div class="block" style="text-align: left;">
                <div style="float: left">
                    <div>
                        <ul>
                            <li class="lwh" @click="liaocc" style="cursor: pointer">文章</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <el-pagination
                        :page-size="20"
                        :pager-count="7"
                        layout="prev, pager, next"
                        :total="count"
                        style="position: absolute;bottom: 20px;width: 100%">
                </el-pagination>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "TalkingList",
        data(){
            return{
                count:0
            }
        },
        methods:{
            handleoutput(){
                this.$router.push({path: '/'})
            }
        }
    }
</script>

<style scoped>
    .lwh{
        text-decoration: none;
        color: black;
    }
    .lwh:hover{
        color:darkseagreen;
    }
</style>