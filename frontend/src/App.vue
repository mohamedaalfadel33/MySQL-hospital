<script setup>
import Layout from './components/layouts/Layout.vue';
import Dashboard from './components/pages/Dashboard.vue';
import Welcome from './components/pages/Welcome.vue';
import Workout from './components/pages/Workout.vue';

const selectedDisplay = 1;
</script>

<template>
  <Layout>
    <!-- PAGE1 -->
    <Welcome v-if="selectedDisplay === 1" />
    <!-- PAGE2 -->
    <Dashboard v-if="selectedDisplay === 2" />
    <!-- PAGE3 -->
    <Workout v-if="selectedDisplay === 3" />
  </Layout>
</template>

<style scoped></style>
