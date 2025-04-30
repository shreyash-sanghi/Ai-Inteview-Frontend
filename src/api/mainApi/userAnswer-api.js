import axiosInstance from "../axios";

const apiType = "userAnswer";

export const createAnswer = async(data)=>{
    try {
        const response = await axiosInstance.post(`/${apiType}/create-userAnswer`,data);
        return response;
    } catch (error) {
        throw error;
    }
}

export const getPerticularAnswer = async(data)=>{
    try {
        const response = await axiosInstance.post(`/${apiType}/get-single-answer`,data);
        return response;
    } catch (error) {
        throw error;
    }
}

export const getAllAnswer = async(uId,mockIdRef)=>{
    try {
        const response = await axiosInstance.get(`/${apiType}/get-all-interview-answer/${uId}/${mockIdRef}`);
        return response;
    } catch (error) {
        throw error;
    }
}