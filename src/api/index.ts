import axios, { AxiosRequestConfig } from "axios";

const baseURL = "https://interview-api.labnote.co/api";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnRlcnZpZXdlZSI6IjY0NThmYzVmNDE1MGRjNmMxNGRlZWM1MCIsInNlY3JldCI6IiQyYiQxMSQ2L05vblNnTXhZYklSTEZXdFVvL0x1clYzeU1SYTRZMHlGWXBUV0wwZjU0YUdmL0JWdTNVMiIsImlhdCI6MTY4MzU1MzM3NiwiZXhwIjoxNjk0Nzg1Mzc2fQ.GCmbUrGLczXgd6E0FN5dx6NVbmfuMluvaNrJPFO_0lo";

const baseInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

baseInstance.interceptors.response.use(({ data }) => data);

const apiRequest = {
  get: (url: string, request?: AxiosRequestConfig) => baseInstance.get(url, request),
  delete: (url: string, request?: AxiosRequestConfig) => baseInstance.delete(url, request),
  post: (url: string, data?: any, config?: AxiosRequestConfig) => baseInstance.post(url, data, config),
};

export default apiRequest;
