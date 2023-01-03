<script setup>
    import useSkills from '@/composables/skills.js';
    import {onMounted, computed, ref, onBeforeUpdate} from 'vue';
    import PostCard from '@/components/PostCard.vue';
    import PostFeaturedCard from '@/components/PostFeaturedCard.vue';
    import { searchProducts } from '../composables/useFlash';
    const {links, pageMeta, skills, getSkills, destroySkill, skillPaginate} = useSkills();

    const search = ref("");
    
    onMounted(() => getSkills());

    
</script>

<template>
    <div class="mx-auto container">
        <div class="container md:mb-10 mx-auto flex justify-center">
            <div class="search-box">
                <input type="text" v-model.trim="search" placeholder="..."
                    class="text bg-gradient-to-r to-emerald-600 from-sky-400"/>
                    <button> <i class="fa fa-search"></i></button>
            </div>
        </div>
    </div>
    <PostFeaturedCard v-if="searchProducts(search, skills).length" :postskill="searchProducts(search, skills)[0]" />

     <div class="lg:grid lg:grid-cols-6">
            <PostCard
                v-if="searchProducts(search, skills).length"
                v-for="skill in searchProducts(search, skills).slice(1)"
                :postskill= skill
                :key="skill.id"
                class="col-span-2"
            />
    </div>
    <div class="mx-auto container">
        <div class="container md:mb-8 pt-8 px-4 mx-auto flex justify-center select-none">
            <button v-if="pageMeta.current_page > 1" class="block border px-4 py-2 rounded-r hover:bg-gray-200 text-gray-600" @click="skillPaginate(links.prev)">
            &larr; Previous
            </button>

            <button v-if="pageMeta.current_page < pageMeta.last_page && pageMeta.last_page > 1" class="block border px-4 py-2 rounded-r hover:bg-gray-200 text-gray-600" @click="skillPaginate(links.next)" rel="next">
            Next &rarr;
            </button>
        </div>
    </div>
    <!-- <div>
        <button @click="nextPage(links.next)" class="mt-5 ml-6 text-xs font-bold uppercase">Next Page</button>
    </div> -->
</template>
  
<style>
.search-box{
  /* top: 50%;
  left: 50%; */
  height:40px;
  transform: translate(0%, 0%);
  position:absolute;
  display: flex;
  background-color:#2fb396;
  border-radius: 18px
}

.search-box button{
  width: 20px;
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
  font-size: 20px;
  width: 0px;
  box-sizing: border-box;
  transition: .3s;
}

.search-box button:hover{
   cursor: pointer;
}

.search-box:hover .text{
  width:240px;
  padding: 10px 20px;
  
}

</style>