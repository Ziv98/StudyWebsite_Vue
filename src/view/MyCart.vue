<template>
    <div class="MyCart">
        <div>
            <Nav></Nav>
        </div>
        <div style="padding-top: 180px;">
            <MyCartList></MyCartList>
        </div>
    </div>
</template>

<script>
    import Nav from "@/components/Nav";
    import MyCartList from "@/components/MyCartList";
    export default {
        name: "MyCart",
        components: {
            MyCartList,
            Nav
        }
    }
</script>

<style scoped>

</style>