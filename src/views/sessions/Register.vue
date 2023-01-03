<script setup>
    import {reactive} from 'vue';
    import registerUser from '../../composables/register';

    const {storeUser, errors} = registerUser();

    const form = reactive ({
        name: "",
        username: "",
        email: "",
        password: ""
    })

</script>

<template>
  <main>
    <form class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" @submit.prevent="storeUser(form)">
        <div class="mb-6">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name:</label>
            <input type="text" id="name" 
                v-model="form.name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <div v-if="errors.name">
                <span class="text-sm text-red-400">{{ errors.name[0] }}</span>
            </div>
            <label for="username" class="block mt-5 mb-2 text-sm font-medium text-gray-900 dark:text-white">Username:</label>
            <input type="text" id="username" 
                v-model="form.username"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <div v-if="errors.username">
                <span class="text-sm text-red-400">{{ errors.username[0] }}</span>
            </div>
            <label for="email" class="block mt-5 mb-2 text-sm font-medium text-gray-900 dark:text-white">Email:</label>
            <input type="email" id="email" 
                v-model="form.email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <div v-if="errors.email">
                <span class="text-sm text-red-400">{{ errors.email[0] }}</span>
            </div>
            <label for="password" class="block mt-5 mb-2 text-sm font-medium text-gray-900 dark:text-white">Password:</label>
            <input type="password" id="password" 
                v-model="form.password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <div v-if="errors.password">
                <span class="text-sm text-red-400">{{ errors.password[0] }}</span>
            </div>
        </div>
        <div class="mt-4">
            <button type="Submit" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded">Register</button>
        </div>
    </form>
  </main>
</template>
