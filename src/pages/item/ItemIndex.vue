<template>
    <div>
        <ItemContainer fatherComponent="ItemIndex"></ItemContainer>
    </div>
</template>

<script>
import ItemContainer from '@/components/ItemContainer.vue';
import { mapState } from 'vuex';
export default {
    name:'ItemIndex',
    components:{ItemContainer},
    computed:{
        ...mapState(['timer'])
    },
    created() {
        // 进入题目页面，开始计时
        this.$store.commit('REMENBER_TIME');
    },

    destroyed() {
        // 销毁页面，取消计时
		clearInterval(this.timer)
    }
}
</script>

<style scope>

</style>