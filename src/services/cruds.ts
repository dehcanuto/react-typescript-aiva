import api from './api';

export const list = async <T>(module: string): Promise<T> => {
  const response = await api.get(`/${module}`);
  return response.data;
};

export const view = async <T>(
  module: string,
  id: string | number
): Promise<T> => {
  const response = await api.get(`/${module}/${id}`);
  return response.data;
};

export const add = async <T>(module: string, payload: T): Promise<T> => {
  const response = await api.post(`/${module}`, payload);
  return response.data;
};

export const update = async <T>(
  module: string,
  id: string | number,
  payload: T
): Promise<T> => {
  const response = await api.patch(`/${module}/${id}`, payload);
  return response.data;
};

export const remove = async <T>(
  module: string,
  id: string | number
): Promise<T> => {
  const response = await api.delete(`/${module}/${id}/remove`);
  return response.data;
};
