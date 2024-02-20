<template>
    <div>
        <NavBar/>
        <router-view/>
    </div>

</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    components: {
        NavBar: defineAsyncComponent(() => import('@/modules/administrador/components/NavBar_Component.vue')),
    }
}
</script>

<style lang="scss" scoped>
</style>