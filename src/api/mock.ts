import request from "@/utils/request";

export function postRequest(data: PostData) {
  return request({
    url: "",
    method: "post",
    data,
  });
}

export function getRequest(params: GetData) {
  return request({
    url: "",
    method: "get",
    params,
  });
}

export function getStreamRequest(params: GetData) {
  return request({
    url: "",
    method: "get",
    params,
    responseType: "blob",
    timeout: 10 * 1000,
  });
}

export function getMock(params: GetData) {
  return request({
    url: "/get-mock-info",
    method: "get",
    params
  });
}
