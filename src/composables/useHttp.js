import axios from "axios";

export const useHttp = () => {

    axios.defaults.headers.common['ngrok-skip-browser-warning'] = '69420';

    const http = axios.create({
        baseURL: 'https://2bee-95-57-114-19.ngrok-free.app'
    });

    async function getAlbum() {
        const res = await http.get('api/getAlbumPhoto');
        return res.data.albums
    }

    async function getNews() {
        const res = await http.get('api/posts');
        return res.data
    }

    async function filterNews(filter) {
        let query = '?' + filter.join('&')
        const res = await http.get('api/post/filter' + query);
        return res.data
    }

    async function searchNews(search) {
        const res = await http.get('api/post/search?search=' + search);
        return res.data
    }

    async function getNewsById(id) {
        const res = await http.get(`api/posts/${id}`);
        return res.data
    }

    async function getMagazines(year, month) {
        const res = await http.get(month ? `api/magazines/year/${year}/month/${month}` : `api/magazines/year/${year}`);
        return res.data
    }

    async function downloadMagazine(id) {
        const res = await http.get(`api/magazines/download/${id}`, {headers: {'Content-Type': 'application/pdf'}});
        return res.data
    }

    async function getBooks() {
        const res = await http.get(`api/book/getBook`);
        return res.data
    }

    async function getCities() {
        const res = await http.get(`api/cities`);
        return res.data
    }

    async function getBranch(id) {
        const res = await http.get(`api/cities/${id}/contacts`);
        return res.data
    }

    async function sendPhone(data) {
        const res = await http.post(`api/send-phone`, data);
        return res.data
    }

    async function getHomeAlbum(data) {
        const res = await http.get(`api/getAlbumPhotoHome`);
        return res.data
    }

    return {
        getAlbum,
        getNews,
        filterNews,
        searchNews,
        getNewsById,
        getMagazines,
        downloadMagazine,
        getBooks,
        getCities,
        getBranch,
        sendPhone,
        getHomeAlbum
    }
}