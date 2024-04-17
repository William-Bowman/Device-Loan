<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import Navbar from './components/Navbar.vue'
</script>

<template>
    <Navbar />
    <div class="wrapper">
        <RouterView />
    </div>
</template>

<style>
.wrapper {
    padding-left: 10vw;
    padding-right: 10vw;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    gap: 5rem;
}
#title {
    font-size: 3rem;
    margin-bottom: 2rem;
}
.subtitle {
    font-size: 2.5rem
}
.text {
    font-size: 1.75rem;
}

.late {
    background-color: red;
}

.tableButton {
    border: none;
    background: none;
    color: white;
    font-size: 1.75rem;
    text-align: center;
}
</style>