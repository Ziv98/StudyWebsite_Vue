<template>
    <div class="FiftyToneMap">
        <div>
            <Nav></Nav>
        </div>
        <div style="padding-top: 180px">
            <FiftyTone></FiftyTone>
        </div>
    </div>
</template>

<script>
    import Nav from "@/components/Nav";
    import FiftyTone from "@/components/FiftyToneList";
    export default {
        name: "FiftyToneMap",
        components:{
            FiftyTone,
            Nav,
        }
    }
</script>

<style scoped>

</style>