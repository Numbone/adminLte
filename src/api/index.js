import axios from "axios";

export const instance=axios.create({
    baseURL:"https://back-admin.lemousse.beauty/",
    // headers: {
    //     'Access-Control-Allow-Origin' : '*',
    //     'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //   },
})