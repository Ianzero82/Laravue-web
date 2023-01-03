<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref, onMounted } from 'vue';

  const props = defineProps({
    postcomment: Object,
    postcomment: {
        required: true,
        type: Object,
    },
  });
</script>

<template>
    <div class="bg-gray-50 border border-gray-200 p-6 rounded-xl">
        <article class="flex space-x-4">
            <div class="flex-shrink-0">
                <img :src="'https://i.pravatar.cc/50?u='+props.postcomment.user_id" alt="">
            </div>
            <div>
            <header class="mb-2">
                <h3 class="font-bold">{{ props.postcomment.owner }}</h3>
                <p class="text-xs">
                    Posted
                    <time>{{ props.postcomment.created_at }}</time></p>
            </header>

            {{ props.postcomment.body }}
            </div>
        </article>
    </div>
</template>
