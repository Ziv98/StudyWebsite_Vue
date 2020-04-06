<template>
    <div>
        <div style="padding-left: 21%">
            <el-card class="box-card" style="float: bottom;position: relative;width: 920px">
                <div slot="header" class="clearfix" style="height: 20px">
                    <span style="float: left;color: crimson;font-weight: bolder;font-size: larger">我的收藏</span>
                </div>
                <div>
                    <el-table
                            :data="tableData"
                            stripe
                            style="width: 100%">
                        <el-table-column :span="2"
                                         prop="information"
                                         label="商品信息">
                        </el-table-column>
                        <el-table-column span="2"
                                         prop="price"
                                         label="单价">
                        </el-table-column>
                        <el-table-column span="2"
                                         prop="amount"
                                         label="数量">
                        </el-table-column>
                        <el-table-column span="2"
                                         prop="sum"
                                         label="金额">
                        </el-table-column>
                        <el-table-column span="2"
                                         label="操作">
                        </el-table-column>
                    </el-table>
                </div>
                <div style="padding-left: 80%;padding-top: 10px">
                    <el-button type="primary" round>结算</el-button>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyFavoriteList"
    }
</script>

<style scoped>

</style>