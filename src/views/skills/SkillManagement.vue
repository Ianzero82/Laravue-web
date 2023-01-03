<script setup>
    import useSkills from '@/composables/skills.js';
    import {onMounted} from 'vue';
    import userSession from '../../composables/session';
    import { RouterLink, RouterView} from 'vue-router';

    const {user} = userSession();

    const { getSkills} = useSkills();
    onMounted(() => getSkills());

    
</script>

<template>
    <section class="py-8 max-w-4xl mx-auto">

        <h1 class="text-lg font-bold pb-2 border-b">
            Manage Skeelz
        </h1>

        <div class="flex">
            <aside class="w-48 flex-shrink-0">
                <h4 class="font-semibold mb-4">Links</h4>

                <ul>
                    <li class="mt-5">
                        <RouterLink class="text-xs font-bold uppercase" to="/skeelz/index">Skills</RouterLink>
                        <!-- <a href="/admin/posts" class="{{ request()->is('admin/posts') ? 'text-blue-500' : ''}}">All Posts</a> -->
                    </li>

                    <li class="mt-5">
                        <RouterLink class="text-xs font-bold uppercase" :to="{ name: 'SkeelzCreate', params: {user_id: user.id } }">Create</RouterLink>
                        <!-- <a href="/admin/posts/create" class="{{ request()->is('admin/posts/create') ? 'text-blue-500' : ''}}">New Post</a> -->
                    </li>
                </ul>
            </aside>
        

        <main class="flex-1">
            <div class="border border-gray-200 p-6 rounded-xl">
                <RouterView />
            </div>
            
        </main>
        </div>
    </section>
</template>

<style lang="css">
    .router-link-exact-active{
        color:cadetblue;
    }
</style>