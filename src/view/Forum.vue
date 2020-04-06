<template>
    <div>
        <div class="Forum">
            <Nav></Nav>
        </div>
        <div style="padding-top: 180px">
            <TalkingList></TalkingList>
        </div>
    </div>
</template>

<script>
    import Nav from "@/components/Nav";
    import TalkingList from "@/components/TalkingList";
    export default {
        name: "Forum",
        components:{
            TalkingList,
            Nav,
        }
    }
</script>

<style scoped>

</style>