import axios, { AxiosInstance } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

class ApiService {
  request: AxiosInstance;

  constructor() {
    this.request = axios.create({
      baseURL: `${BASE_URL}/`,
    });
    this.request.interceptors.request.use(function (config: any) {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("token");

        const Authorization = `Bearer ${token}`;
        return {
          ...config,
          headers: { ...config.headers, Authorization },
        };
      }

      return config;
    });
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
