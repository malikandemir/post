<script setup lang="ts">

</script>

<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <router-link to="/" class="navbar-brand">bezKoder</router-link>
        <div class="navbar-nav mr-auto">
            <li class="nav-item">
                <router-link to="/tutorials" class="nav-link">Tutorials</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/add" class="nav-link">Add</router-link>
            </li>
        </div>
    </nav>

    <div class="container mt-3">
        <router-view />
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
