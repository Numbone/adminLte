import axios from "axios";

export const instance=axios.create({
    baseURL:"https://back-admin.lemousse.beauty/"
})