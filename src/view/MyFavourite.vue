<template>
    <div class="MyFavourite">
        <div>
            <Nav></Nav>
        </div>
        <div style="padding-top: 180px">
            <MyFavouriteList></MyFavouriteList>
        </div>
    </div>
</template>

<script>
    import Nav from "@/components/Nav";
    import MyFavouriteList from "@/components/MyFavouriteList";
    export default {
        name: "MyFavorite",
        components:{
            Nav,
            MyFavouriteList
        }
    }
</script>

<style scoped>

</style>