import axios from "axios"

export const getUser = async username => {
    try {
        const user = await axios.get(`https://api.github.com/users/${username}`);
        if (user.status === 200) {
            return user.data;
        }

        return null;
    } catch (e) {
        return null;
    }
};

