<script setup>
    import { ref } from 'vue'
    import ipad from '../ipad.json'
    import crayon from '../crayon.json'
</script>

<template>
    <div class="container">
        <div class="top text">
            <div>Name #ID</div>
            <button id="applyButton">Apply</button>
        </div>
        <div class="invGrid">
            <div class="invItem">
                <div class="top">
                    <div>Total iPads:</div>
                    <button class="addButton">Add</button>
                </div>
                <ul class="itemList">

                </ul>
            </div>
            <div class="invItem">
                <div class="top">
                    <div>Total Crayons:</div>
                    <button class="addButton">Add</button>
                </div>
                <ul class="itemList">
                    
                </ul>
            </div>
            <div class="invItem">
                <div class="top">
                    <div>Total Keyboards:</div>
                    <button class="addButton">Add</button>
                </div>
                <ul class="itemList">
                    
                </ul>
            </div>
        </div>
        <div class="addMenu">
            
        </div>
    </div>
</template>

<style>
.container {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
}
.top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
}
.invGrid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
}
.applyButton, .addButton {
    text-align: right;
}
</style>