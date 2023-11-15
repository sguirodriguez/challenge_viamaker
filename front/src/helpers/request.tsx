/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { ResponseType } from 'axios';

const defaultMessage = 'Erro ao realizar a operação!';

const sendResponse = ({
  status,
  message,
  data,
}: {
  status?: number;
  message?: any;
  data?: any;
}) => {
  if (status != 200 || !status) {
    // TODO: return message
    return { error: !message ? defaultMessage : message, status };
  }

  return { error: null, data, status };
};

const request = async ({
  method,
  path,
  body,
  headers,
  baseURL,
  params,
  responseType,
}: {
  method: 'POST' | 'GET' | 'PATCH' | 'PUT' | 'DELETE';
  path: string;
  body?: any;
  headers?: any;
  baseURL?: string;
  params?: any;
  responseType?: ResponseType;
}) => {
  try {
    const apiURL = baseURL || 'http://localhost:3333/';
    const { status, statusText, data } = await axios.request({
      baseURL: apiURL,
      headers,
      method,
      url: path,
      data: body,
      params,
      responseType,
    });

    return sendResponse({
      status,
      message: data?.message || statusText,
      data: data.data ? data.data : data,
    });
  } catch (error: any) {
    return sendResponse({
      status: error?.response?.status,
      message:
        error.data?.message ||
        error.response?.data?.message ||
        error.message ||
        defaultMessage,
    });
  }
};

export default request;
