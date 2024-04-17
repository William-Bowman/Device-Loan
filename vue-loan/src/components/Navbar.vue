<script setup>
    import { ref } from 'vue'
    import { RouterLink, RouterView } from 'vue-router'
    const subtitle = ref('subtitle')
    const user = ref('user')
</script>

<template>
    <div class="wrapper">
        <nav :class="subtitle">
            <RouterLink to="/">Dashboard</RouterLink>
            <RouterLink to="/history">History</RouterLink>
            <RouterLink to="/raise">Raise Request</RouterLink>
        </nav>
        <div :class="{user, subtitle}">
            William Bowman
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    background-color: dodgerblue;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
nav {
    display: flex;
    flex-direction: row;
    gap: 2rem;
}
a {
    color: white;
    text-decoration: none;
}
.user {
    text-align: right;
}
</style>