<template>
    <div class="OnlineVideo">
        <div>
            <Nav></Nav>
        </div>
        <div style="padding-top: 180px">
            <VideoList></VideoList>
        </div>
    </div>
</template>

<script>
    import Nav from "@/components/Nav";
    import VideoList from "@/components/VideoList";
    export default {
        name: "OnlineVideo",
        components:{
            VideoList,
            Nav
        }
    }
</script>

<style scoped>

</style>