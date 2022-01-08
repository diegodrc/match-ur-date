import axios from 'axios';

export const getGenres = async () => {
    const res = await axios.get(`http://192.168.0.10:8999/genres`);
    return res;
}