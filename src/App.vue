<script setup lang="ts">

</script>

<template>
    <div class="container">
        <nav class="navbar navbar-expand navbar-dark bg-dark fixed-top">
            <router-link to="/" class="navbar-brand">Main Page</router-link>
            <div class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link to="/add" class="nav-link">Add</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/edit" class="nav-link">Edit</router-link>
                </li>
            </div>
        </nav>
        <div class="container">
            <router-view/>
        </div>
    </div>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
