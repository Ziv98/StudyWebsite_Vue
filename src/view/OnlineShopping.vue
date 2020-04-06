<template>
    <div class="OnlineShopping">
        <div>
            <Nav></Nav>
        </div>
        <div style="padding-top: 180px">
            <ShoppingList></ShoppingList>
        </div>
    </div>

</template>

<script>
    import Nav from "@/components/Nav";
    import ShoppingList from "@/components/ShoppingList";
    export default {
        name: "OnlineShopping",
        components: {
            ShoppingList,
            Nav,
        }
    }
</script>

<style scoped>

</style>