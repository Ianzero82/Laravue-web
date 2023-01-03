<script setup>
    import useSkills from '../../composables/skills';
    import PostComment from '../../components/PostComment.vue';
    import useComments from '../../composables/comments';
    import userSession from '../../composables/session';
    import { onMounted, reactive } from 'vue';

    const {skill, getSkill, postUser, errors} = useSkills();

    const {user} = userSession();

    const {comments, getComments, storeComment} = useComments();


    const props = defineProps({
        id: {
            required: true,
            type: String,
        },
    });

    onMounted(() => getSkill(props.id));
    onMounted(() => getComments(props.id));

    const form = reactive ({
        body: "",
        skills_id: props.id,
    });
</script>

<template>
    <section class="">
        <main class="max-w-6xl mx-auto space-y-6">
            <article class="max-w-4xl mx-auto lg:grid lg:grid-cols-12 gap-x-10">
                <div class="col-span-4 lg:text-center">
                    <img :src="'https://robohash.org/mail@ashallendesign.co.uk/'+skill.id" alt="" class="rounded-xl">

                    <p class="mt-4 block text-gray-400 text-xs">
                        Created <time>{{ skill.created_at}}</time>
                    </p>

                    <div class="flex items-center lg:justify-center text-sm mt-4">
                        <img :src="'https://i.pravatar.cc/50?u='+skill.id" alt="Lary avatar">
                        <div class="ml-3 text-left">
                            <h5 class="font-bold"><p>{{ postUser.name }}</p></h5>
                        </div>
                    </div>
                </div>

                <div class="col-span-8">
                    <div class="hidden lg:flex justify-between mb-6">
                        <RouterLink to="/"
                            class="transition-colors duration-300 relative inline-flex items-center text-lg hover:text-blue-500">
                            <svg width="22" height="22" viewBox="0 0 22 22" class="mr-2">
                                <g fill="none" fill-rule="evenodd">
                                    <path stroke="#000" stroke-opacity=".012" stroke-width=".5" d="M21 1v20.16H.84V1z">
                                    </path>
                                    <path class="fill-current"
                                        d="M13.854 7.224l-3.847 3.856 3.847 3.856-1.184 1.184-5.04-5.04 5.04-5.04z">
                                    </path>
                                </g>
                            </svg>

                            Back to Posts
                        </RouterLink>

                    </div>

                    <h1 class="font-bold text-3xl lg:text-4xl mb-10">
                            {{ skill.name }}
                    </h1>

                    <div class="space-y-4 lg:text-lg leading-loose" v-html="skill.body"></div>
                </div>
                <section class="col-span-8 col-start-5 mt-10 space-y-2">
                
                    <form class="bg-gray-50 border border-gray-200 p-6 rounded-xl" @submit.prevent="storeComment(form, skill.slug, skill.id)">
                        <header class="flex items-center">
                            <img :src="'https://i.pravatar.cc/60?u='+user.id" width="40" height="40" class="rounded-full">
                            <h2 class="ml-4">Insert comment here</h2>
                        </header>

                        <div class="mt-6">
                            <textarea 
                                name="body" 
                                v-model="form.body"
                                class="w-full text-sm focus:outline-none focus:ring" 
                                rows="5" 
                                placeholder="What do you wanna say?" required></textarea>

                                <div v-if="errors.body">
                                <span class="text-sm text-red-400">{{ errors.body[0] }}</span>
                                </div>
                        </div>
                        <div class="flex justify-end mt-6 pt-6 border-t border-gray-200 pt-6">
                            <button type="submit" class="bg-blue-500 text-white uppercase font-semibold text-xs py-2 px-10 rounded-2xl hover:bg-blue-600">Post</button>
                        </div>
                    </form>

                <PostComment
                    v-for="comment in comments"
                    :postcomment="comment"
                    :key="comment.id"
                />
            </section>
            </article>
        </main>
    </section>
</template>
 