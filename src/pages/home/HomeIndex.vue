<template>
    <div class="home_container">
        <ItemContainer fatherComponent="HomeIndex"></ItemContainer>
    </div>
    
</template>

<script>
import ItemContainer from '@/components/ItemContainer.vue';
export default {
    name:'HomeIndex',
    components:{ItemContainer}
}
</script>

<style lang="less" scoped>
.homecontainer{
    color:inherit;
}
</style>