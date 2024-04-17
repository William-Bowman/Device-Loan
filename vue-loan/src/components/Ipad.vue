<script setup>
    import { ref } from 'vue'
    import Item from './Item.vue'

    const text = ref('text')
    const title = ref('title')
    const legend = ref('legend')
    const ipadWrapper = ref('ipadWrapper')
    const grid = ref('grid')
</script>

<template>
    <div :class="ipadWrapper">
        <div :id="title">iPads</div>
        <div :id="legend" :class="text">
            <div>In Stock</div>
            <div>On Loan</div>
            <div>Damaged/Missing</div>
        </div>
        <div :id="grid" :class="text">
            <Item device="ipad"/>
        </div>
    </div>
</template>

<style scoped>
#legend {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin-left: 2rem;
    margin-bottom: 2rem;
}

#grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
    gap: 1rem;
}
</style>