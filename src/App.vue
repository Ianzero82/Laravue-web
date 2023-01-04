<script setup>
import {onMounted, ref, watch} from 'vue';
import { routeLocationKey, RouterLink, RouterView } from 'vue-router';
import userSession from './composables/session';

const {logoutUser, user, getUser} = userSession();

onMounted(() => getUser());


</script>

<template>
  <html>
  <header>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <div class="max-w-7xl mx-auto">

      <nav>
        
      </nav>

    </div>
  </header>

<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">


<body style="font-family: Open Sans, sans-serif">

  
    <section class="px-6 py-8">
        <nav class="md:flex md:justify-between md:items-center">
            <div>
                <RouterLink class="text-xs font-bold uppercase" to="/">
                    <img src="/images/test.jpg" alt="Laracasts Logo" width="200" height="20" id="laracastlogo">
                </RouterLink>
            </div>

            <h1 class="text-3xl ml-12 font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Surpass</span> Your Limits</h1>

            <div class="mt-8 md:mt-0 flex items-center">
              <p v-if="user" class="text-xs font-bold uppercase">Welcome {{ user.username }}!</p><br/>
              <RouterLink v-if="user" class="ml-6 text-xs font-bold uppercase hover:bg-gray-300 px-2 py-2" to="/skeelz/index">Skills</RouterLink>
              <RouterLink v-if="!user" class="ml-6 text-xs font-bold uppercase hover:bg-gray-300 px-2 py-2" to="/register">Register</RouterLink>
              <RouterLink v-if="!user" class="ml-6 text-xs font-bold uppercase hover:bg-gray-300 px-2 py-2" to="/login">Login</RouterLink>
              <a href="/login" v-if="user" @click="logoutUser(user)" class="ml-6 text-xs font-bold uppercase hover:bg-gray-300 px-2 py-2">Logout</a>

            </div>
        </nav>
      <div class="text-center">
        Right here, right now.
      </div>
    </section>

</body>

  <main class="max-w-7xl mx-auto min-h-screen">
    <RouterView />
  </main>
</html>
</template>

<style>
    html{
        scroll-behavior: smooth;
    }

    .clamp{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow:hidden;
    }

    .clamp.one-line{
        -webkit-line-clamp: 1;
    }
    img{
        position: relative; /* Required to move element */
    }
</style>
