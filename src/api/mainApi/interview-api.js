import axiosInstance from "../axios";

 const apiType = "interview";


export const createInterview = async(data)=>{
    try {
        console.log("call")
        const result = await axiosInstance.post(`/${apiType}/create-interview`,data);
        return result;
    } catch (error) {
        throw error;
    }
}
export const updateInterview = async(data,id)=>{
    try {
        const result = await axiosInstance.put(`/${apiType}/update-interview/${id}`,data);
        return result;
    } catch (error) {
        throw error;
    }
}

export const getInterview = async(id)=>{
    try {
        const result = await axiosInstance.get(`/${apiType}/get-my-interview/${id}`);
        return result;
    } catch (error) {
        throw error;
    }
}

export const getMyAllInterview = async(uid)=>{
    try {
        const result = await axiosInstance.get(`/${apiType}/get-my-all-interview/${uid}`);
        return result;
    } catch (error) {
        throw error;
    }
}