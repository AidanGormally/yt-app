import axios from 'axios';

const KEY = 'AIzaSyD1F5HM-qOKftZiepTC7_SrrLd8Swf4pQo';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
