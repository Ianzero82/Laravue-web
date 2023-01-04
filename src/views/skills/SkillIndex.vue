<script setup>
    import useSkills from '@/composables/skills.js';
    import {onMounted, ref} from 'vue';
    import userSession from '../../composables/session';
    import {searchProducts} from '../../composables/useFlash';

    const {user} = userSession();

    const {skills, getSkills, destroySkill, skillTablePaginate, pageMeta, links} = useSkills();
    onMounted(() => getSkills());
    const search = ref("");


</script>

<template>

    <div class="inline-block min-w-full shadow rounded-lg overflow-hidden bg-white">
        <p class="ml-3 mt-2 text-xs">Find Something..</p>
        <div class="container md:mb-12 ml-2 mx-auto flex justify-left">
            <div class="search-box">
                <input type="text" v-model.trim="search" placeholder=""
                    class="text bg-gradient-to-r to-emerald-600 from-sky-400"/>
                    <button> <i class="fa fa-search"></i></button>
            </div>
        </div>
        <table class="min-w-full leading-normal table-auto">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th >
                        Skill Name
                    </th>
                    <th>
                        Owner
                    </th>
                    <th>
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-200" id="jqtesttable">

                <tr id="row"
                    v-for="skill in searchProducts(search, skills)"
                    :key="skill.id"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td class="px-6 py-4 whitespace-nowrap">
                        <RouterLink :to="{name: 'SkeelzEdit', params: {id: skill.id }}">
                            {{ skill.name }}  </RouterLink>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        {{ skill.owner }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <button @click="destroySkill(skill.id)" class="text-s text-red-400">Delete</button>
                    </td>
                </tr>
        </tbody>
        <div class="container pb-8 pt-4 px-4 mx-auto flex justify-center select-none">
        <button v-if="pageMeta.current_page > 1" class="block border px-4 py-2 rounded-r hover:bg-gray-200 text-gray-600" @click="skillTablePaginate(links.prev)">
        &larr; Previous
        </button>

        <button v-if="pageMeta.current_page < pageMeta.last_page && pageMeta.last_page > 1" class="block border px-4 py-2 rounded-r hover:bg-gray-200 text-gray-600" @click="skillTablePaginate(links.next)" rel="next">
        Next &rarr;
        </button>
    </div>        
        </table>
    </div>

    
</template>

<style>
.search-box{
  /* top: 50%;
  left: 50%; */
  height:35px;
  transform: translate(0%, 0%);
  position:absolute;
  display: flex;
  background-color:#2fb396;
  border-radius: 18px
}

.search-box button{
  width: 15px;
  height: 30px;
  border-radius: 50%;
  border:none;
  color:#2fb396;
}

.search-box input{
  border:none;
  outline:0px;
  padding: 0px 0px;
  /* background-color:#2fb396; */
  border-radius: 18px;
  color:rgb(5, 5, 5);
  font-size: 15px;
  width: 0px;
  box-sizing: border-box;
  transition: .3s;
}

.search-box button:hover{
   cursor: pointer;
}

.search-box:hover .text{
  width:340px;
  padding: 10px 20px;
  
}
</style>