/**
 * HTTP 요청 모듈
 */
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const executeHttpGet = async (url: string, params?: any) => {
    return axiosInstance.get(url, { params });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const executeHttpPost = async (url: string, data: any) => {
    return axiosInstance.post(url, data);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const executeHttpPut = async (url: string, data: any) => {
    return axiosInstance.put(url, data);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const executeHttpDelete = async (url: string, data: any) => {
    return axiosInstance.delete(url, data);
};
