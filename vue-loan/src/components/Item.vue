<script setup>
    import { ref } from 'vue'
    import ipad from '../ipad.json'
    import crayon from '../crayon.json'

    defineProps({
        device: String
    })
    const text = ref('text')
    const gridItem = ref('gridItem')
    const itemTitle = ref('itemTitle')
    const itemList = ref('itemList')
</script>

<template>
    <div v-if="device == 'ipad'" v-for="(i, index) in ipad">
        <div :class="gridItem">
            <div :class="itemTitle">{{ ipad[index].series }} Series</div>
            <div :class="itemList">
                <ul>
                    <li v-for="item in ipad[index].items" :class="[ item.status == 'loan' ? 'loan' : item.status == 'dm' ? 'dm' : 'stock',]" :key="item.id">
                        {{ item.name < 10 ? '0'+ item.name : item.name }}{{ item.status == 'loan' ? ' - ' + item.loanText : '' }} {{ item.status == 'dm' ? ' - ' + item.dmText : '' }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div v-if="device == 'crayon'">
        <div :class="gridItem">
            <div :class="itemTitle">Crayons</div>
            <div :class="itemList">
                <ul>
                    <li v-for="item in crayon" :class="[ item.status == 'loan' ? 'loan' : item.status == 'dm' ? 'dm' : 'stock',]" :key="item.id">
                        {{ item.name }}{{ item.status == 'loan' ? ' - ' + item.loanText : '' }} {{ item.status == 'dm' ? ' - ' + item.dmText : '' }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>

</script>

<style>
.gridItem {
    width: 15rem;
    padding: 1rem;
    background-color: #444444;
    border: hidden 2px;
    border-radius: 5px;
}

.stock::marker {
    color: green;
}
.loan::marker {
    color: yellow;
}
.dm::marker {
    color: red;
}
</style>
