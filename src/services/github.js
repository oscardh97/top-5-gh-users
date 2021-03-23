import axios from "axios"
const gitHubAPIUrl = 'https://api.github.com/users/';

export const getUser = async username => {
    try {
        const user = await axios.get(`${gitHubAPIUrl}${username}`);
        if (user.status === 200) {
            return user.data;
        }

        return null;
    } catch (e) {
        return null;
    }
};

