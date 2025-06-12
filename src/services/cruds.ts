import api from './api';

class Crud {
  private static getPaginationParams(page: number = 1, limit: number = 10) {
    const offset = (page - 1) * limit;
    return { limit, offset };
  }

  public static list = async <T>(
    module: string,
    page: number = 1,
    limit: number = 10
  ): Promise<T> => {
    const params = this.getPaginationParams(page, limit);

    const response = await api.get<T>(`/${module}`, { params });
    return response.data;
  };

  public static view = async <T>(
    module: string,
    id: string | number
  ): Promise<T> => {
    const response = await api.get<T>(`/${module}/${id}`);
    return response.data;
  };

  public static add = async <TRequest, TResponse>(
    module: string,
    payload: TRequest
  ): Promise<TResponse> => {
    const response = await api.post<TResponse>(`/${module}`, payload);
    return response.data;
  };

  public static update = async <TRequest, TResponse>(
    module: string,
    id: string | number,
    payload: TRequest
  ): Promise<TResponse> => {
    const response = await api.patch<TResponse>(`/${module}/${id}`, payload);
    return response.data;
  };

  public static remove = async <T>(
    module: string,
    id: string | number
  ): Promise<T> => {
    const response = await api.delete<T>(`/${module}/${id}/remove`);
    return response.data;
  };
}

export default Crud;
