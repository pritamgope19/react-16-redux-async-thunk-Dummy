import axios from 'axios';

const apiData = {
  data: [],
  call: function (method, path, config = {}) {
    // .get('https://jsonplaceholder.typicode.com/users')
    const baseUrl = 'https://api.themoviedb.org/3';
    const apiKey = '0122f66b835be1351367d17f60ca287b';
    const url = `${baseUrl}/${path}?api_key=${apiKey}`;
    switch (method) {
      case 'get':
        return axios.get(url).then((res) => {
          this.data = res.data;
          return this.posts;
        });
      case 'post':
        return axios.post(url, config).then((res) => {
          this.data = res.data;
          return this.posts;
        });
      default:
        return null;
    }
  },
};

export default apiData;
