import { ref } from "vue";
import axios from "axios";
import {useRouter} from "vue-router";
import {useFlash} from "@/composables/useFlash";
import userSession from '@/composables/session';

const {user} = userSession();
let {flash} = useFlash();

// axios.defaults.baseURL = "http://10.0.0.87:8001/api/v1/"
axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/"

export default function useSkills() {
    const skills = ref([]);
    const skill = ref([]);
    const errors = ref({});
    const router = useRouter();
    const postUser = ref([]);
    const links = ref([]);
    const pageMeta = ref([]);

    const getSkills = async () => {
        try{
            const response = await axios.get("skills");
            skills.value = response.data.data;
            links.value = response.data.links;
            pageMeta.value = response.data.meta;
        } catch(error) {
            if(error.response.status == 401) {
                flash('Oops', 'Please login first', 'error');
                await router.push({name:"Login"});
            }
        }
        
    };

    const skillPaginate = async (page) => {
        try{
            const response = await axios.get(page);
            skills.value = response.data.data;
            links.value = response.data.links;
            pageMeta.value = response.data.meta;
            await router.push({name: "home"});

        } catch(error) {
            console.log(error);
            if(error.response.status == 401) {
                flash('Oops', 'Please login first', 'error');
                await router.push({name:"Login"});
            }
        }
    }

    const getSkill = async (id) => {
        const response = await axios.get("skills/"+ id);
        skill.value = response.data[0];
        postUser.value = response.data[1];
    }

    const storeSkill = async (data) => {
        try {
            // var userData = new FormData(data);
            // userData.append("user_id", user.id)
            await axios.post("skills", data);
            await router.push({name:"Skeelz"}); 
            
        } catch(error) {
            if (error.response.status == 422){
                errors.value = error.response.data.errors;
            }
        }
    }

    const updateSkill = async (id) => {
        try {
            await axios.put("skills/" + id, skill.value);
            await router.push({name:"Skeelz"});

        } catch(error) {
            if (error.response.status == 422){
                errors.value = error.response.data.errors;
            }
        }
    }

    const destroySkill = async (id) => {
        if(!window.confirm("Are you sure you want to delete this?")){
            return;
        }
        
        await axios.delete("skills/" + id),
        await getSkills()
    }

    

    return {
        skill,
        skills,
        links,
        pageMeta,
        postUser,
        getSkill,
        getSkills,
        storeSkill,
        updateSkill,
        destroySkill,
        skillPaginate,
        errors,
    };
}