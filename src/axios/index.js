import axios from 'axios'
axios.defaults.baseURL = process.env.NODE_ENV.trim() === "development" ? "/" : "http://you.maxfun.co/api"
// axios.defaults.withCredentials = true;
export default {
    //封装axios请求
    rpc(url = '', data = {}, ways = 'post') {
        return new Promise(function (resolve, reject) {
            switch (ways) {
                case 'get': {
                    axios.get(url, { params: data }).then(res => {
                        // console.log(res)
                        if (res.data.status.code === "200") {
                            resolve(res.data.result);
                        } else {
                            alert(res.data.status.message);
                            reject(res.data.status);
                        }
                    }).catch(err => {
                        reject(err);
                    });
                    break;
                }
                default: {
                    axios.post(url, data).then(res => {
                        // console.log(res);
                        if (res.data.status.code === "200") {
                            resolve(res.data.result);
                        } else {
                            alert(res.data.status.message);
                            reject(res.data.status);
                        }
                    }).catch(err => {
                        reject(err);
                    });
                    break;
                }
            }
        })
    }
}