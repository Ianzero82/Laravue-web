<script setup>
  import userSession from '@/composables/session.js';
  import {onMounted} from 'vue';
  import PostGrid from '@/components/PostGrid.vue';

  const {getUser, errors, user} = userSession();

  onMounted(() => getUser());
</script>

<template>
  
  <PostGrid></PostGrid>
</template>


