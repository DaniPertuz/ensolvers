import axios from 'axios';

const notesAPI = axios.create({ baseURL: 'https://notes-app-api-0yg6.onrender.com/api' });

export default notesAPI;