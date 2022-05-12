import axios, { AxiosInstance, AxiosError } from "axios";
import { store } from "src/store/store";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

class ApiService {
  request: AxiosInstance;

  constructor() {
    this.request = axios.create({
      baseURL: `${BASE_URL}/`,
    });
    this.request.interceptors.request.use(function (config: any) {
      const token = store.getState().user.token;

      if (!token) {
        return config;
      }

      const Authorization = `Bearer ${token}`;
      return {
        ...config,
        headers: { ...config.headers, Authorization },
      };
    });

    this.request.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error: AxiosError) {
        return Promise.reject(error);
      }
    );
  }

  get = <T>(url: string) => this.request.get<T>(url);

  post = <T>(url: string, data: Record<string, any>) =>
    this.request.post<T>(url, data);

  patch = <T>(url: string, data: Record<string, any>) =>
    this.request.patch<T>(url, data);

  put = <T>(url: string, data: Record<string, any>) =>
    this.request.put<T>(url, data);
}

export default new ApiService();
