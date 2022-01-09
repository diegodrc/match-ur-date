import axios from 'axios';

export const getGenres = async () => {
    const res = await axios.get(`http://192.168.0.10:8999/genres`);
    return res;
}

export const createSession = async (category) => {
    const res = await axios.post(`http://192.168.0.10:8999/nova_sessao/${category}`);
    return res;
}

