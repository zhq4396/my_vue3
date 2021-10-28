import { ref } from "vue";
export const useLogin = () => {
    const username = ref("");
    const password = ref("");
    const onSubmit = (values) => {
        console.log("submit", values);
    };
    return { username, password, onSubmit }
}
