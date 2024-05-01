// import axios from "axios";

// const API = axios.create({
//     baseURL: "http://localhost:8080/api/",
// });

// export const GetPosts = async () => await API.get("/post/");
// export const CreatePost = async (data) => await API.get("/post/", data);
// export const GenerateAIImage = async (data) => await API.get("/generateImage/", data);


import axios from "axios";

const API = axios.create({
    // baseURL: "http://localhost:8080/api/",
    baseURL: "https://server-kenra-git-main-ayush-mauryas-projects-06cff482.vercel.app",
});

export const GetPosts = async () => await API.get("/post/");
export const CreatePost = async (data) => await API.post("/post/", data);
export const GenerateAIImage = async (data) => await API.post("/generateImage/", data);