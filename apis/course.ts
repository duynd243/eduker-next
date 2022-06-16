import request from "./utils";

const getAllCourses = async (params?: any) => {
    const {data} = await request.get(`/courses`, {params});
    return data;
}
//   const getCourses = (params?: any) => request.get('/courses', { params });

const getCourseById = async (_id: string) => {
    const {data} = await request.get(`/courses/${_id}`);
    return data;
}
const courseApi = {
    // ...generateAPIWithPaging<TCourse>('courses'),
    getAllCourses,
    getCourseById,
};

export default courseApi;
