<template>
    <div style="padding-left: 21%">
        <el-card class="box-card" style="float: bottom;position: relative;height: 500px;width: 920px">
            <div slot="header" class="clearfix" style="height: 20px">
                <span style="float: left;color: pink;font-weight: bolder;font-size: larger">在线商城</span>
            </div>
            <div class="block" style="text-align: left;">
                <div style="float: left">
                    <ul>
                        <li class="lwh" @click="liaocc" style="cursor: pointer">文章</li>
                    </ul>
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
        name: "ShoppingList"
    }
</script>

<style scoped>

</style>