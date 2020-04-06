<template>
    <div class="home">
        <div><Nav></Nav></div>
        <div style="padding-top: 180px"><ArticleList></ArticleList></div>
        <div style="padding-top: 10px"><VideoTitleList></VideoTitleList></div>
        <div style="padding-top: 10px"><ShoppingList></ShoppingList></div>
    </div>
</template>

<script>
    import Nav from "@/components/Nav";
    // import Carousel from "@/components/Carousel";
    import ArticleList from "@/components/ArticleTitleList";
    import VideoTitleList from "@/components/VideoTitleList";
    import ShoppingList from "@/components/ShoppingTitleList";
    export default {
        name: "Home",
        components: {
            Nav,
            ArticleList,
            VideoTitleList,
            ShoppingList
        }
    }
</script>

<style scoped>

</style>