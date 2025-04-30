import axiosInstance from "../axios";

 const apiType = "user";


export const createUser = async(data)=>{
    try {
        const result = await axiosInstance.post(`/${apiType}/create-profile`,data);
        return result;
    } catch (error) {
        throw error;
    }
}

export const getUser = async(id)=>{
    try {
        const result = await axiosInstance.get(`/${apiType}/get-user-account/${id}`);
        return result;
    } catch (error) {
        throw error;
    }
}