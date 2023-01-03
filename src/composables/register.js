import { ref } from "vue";
import axios from "axios";
import {useRouter} from "vue-router";

// axios.defaults.baseURL = "http://10.0.0.87:8001/api/v1/"
axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/"

export default function registerUser() {
    const user = ref ({});
    const errors = ref({});
    const router = useRouter();

    const storeUser = async (data) => {
        try {
            await axios.post("register", data);
            await router.push({name:"Login"});
            
        } catch(error) {
            if (error.response.status == 422){
                errors.value = error.response.data.errors;
            }
        }
    }

    return {
        user,
        storeUser,
        errors,
    };
}