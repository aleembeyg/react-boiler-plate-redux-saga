import { axiosInstance } from "../axiosInterceptor"

export const getPostsRequest = async () => {
    const response:any = await axiosInstance.get("/posts");
    return await response.data;
}
export const addPostRequest = async (body: any) => {
    const response:any = await axiosInstance.post("/posts", body);
    return await response.data;
}

export const deletePostRequest = async (id: number) => {
    const response:any = await axiosInstance.delete(`/posts/${id}`);
    return await response.data;
}