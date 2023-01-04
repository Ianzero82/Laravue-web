import { ref } from "vue";
import axios from "axios";
import {useRouter} from "vue-router";
import { compileTemplate } from "vue/compiler-sfc";


export default function useComments() {
    
    const errors = ref({});
    const comments = ref([]);
    const router = useRouter();


    const getComments = async ($id) => {
        const response = await axios.get("comments/" + $id);
        comments.value = response.data.data;
        console.log(comments.value);
        
    }
    const storeComment = async (data, postslug, postid) => {
        await axios.post("store/comment/", data);
        await router.push({name: "Login"});
        await router.push({name: "Post", params: {slug: postslug, id: postid}});
    }

    return {
        comments,
        getComments,
        storeComment,
        errors,
    };
}