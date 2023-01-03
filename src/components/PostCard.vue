<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref, onMounted } from 'vue';

  const props = defineProps({
    postskill: Object,
    postskill: {
        required: true,
        type: Object,
    },
  });


</script>

<template>
    <article
      class="transition-colors duration-300 hover:bg-gray-100 border border-black border-opacity-0 hover:border-opacity-5 rounded-xl"
    >
      <div class="py-6 px-5">
        <div>
            <img :src="'https://robohash.org/mail@ashallendesign.co.uk/'+props.postskill.id" alt="Blog Post illustration" class="rounded-xl">
        </div>
  
        <div class="mt-8 flex flex-col justify-between">
          <header>
  
            <div class="mt-4">
              <h1 class="text-3xl">
                <RouterLink :key="props.postskill.id" :to="{name: 'Post', params: {slug: props.postskill.slug, id: props.postskill.id}}" >{{ props.postskill.name }}</RouterLink>
              </h1>
  
              <span class="mt-2 block text-gray-400 text-xs">
                Created <time>{{ props.postskill.created_at}}</time>
              </span>
            </div>
          </header>
  
          <div class="text-sm mt-4 space-y-4" v-html="props.postskill.body"></div>
  
          <footer class="flex justify-between items-center mt-8">
            <div class="flex items-center text-sm">
              <img :src="'https://i.pravatar.cc/50?u='+props.postskill.id" style="border-radius: 50%; width: 50%; height: 50%;" alt="Lary avatar" />
              <div class="ml-3">
                <h5 class="font-bold">
                  <p>{{ props.postskill.owner }}</p>
                </h5>
              </div>
            </div>
            <div class="hidden lg:block">
              <RouterLink class="transition-colors duration-300 text-xs font-semibold bg-gray-200 hover:bg-gray-300 rounded-full py-2 px-8" 
              :key="props.postskill.id" 
              :to="{name: 'Post', params: {slug: props.postskill.slug, id: props.postskill.id}}"
              >Read More</RouterLink>
            </div>

          </footer>
        </div>
      </div>
    </article>
  </template>
  