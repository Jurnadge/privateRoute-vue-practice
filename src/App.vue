<script setup>
import Nav from "./components/Nav.vue";
import { onMounted } from "vue";
import { useAuthStore } from "./store/AuthStore";
const authStore = useAuthStore();

onMounted(async () => {
  authStore.checkAuth();
});

</script>

<template>
  <main>
    <Nav v-if="authStore.isAuthenticated" />
    <RouterView />
  </main>
</template>
