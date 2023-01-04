import { ref } from "vue";
import axios from "axios";
import {useRouter} from "vue-router";
import { compileTemplate } from "vue/compiler-sfc";


const user = ref('');
export default function userSession() {
    
    const errors = ref({});
    const router = useRouter();
    const postUser = ref([]);



    const loginUser = async (data) => {
        try {
            let response = await axios.post('login/', data)
            console.log(response.data);
            localStorage.setItem('token', response.data.access_token);
            axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
            user.value = response.data.user;
            console.log(user.value);
            // let test = await axios.get("me/"+ response.data.access_token)
            // console.log(test.value);
            await router.push({name:"home"});
            
        } catch(error) {
            if (error.response.status !=200 ){
                errors.value = error.response.data.errors;
            }
        }
    }
    const logoutUser = async (data) => {
        try {
            await axios.post('logout/', data)
            localStorage.clear();
            axios.defaults.headers['Authorization'] = `Bearer null`;
            user.value = '';
            await router.push({name:"Login"});
            
        } catch(error) {
            if (error.response.status == 422){
                errors.value = error.response.data.errors;
            }
        }
    }
    const getUser = async () => {
        if (localStorage.getItem('token') ){
            const response = await axios.get('me');
            user.value = response.data.data;
            console.log(postUser.value);
        }
    
    }

    

    return {
        postUser,
        user,
        loginUser,
        getUser,
        logoutUser,
        errors,
    };
}