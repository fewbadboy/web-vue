import request from "@/utils/request";

export function postRequest(data: postData) {
  return request({
    url: "",
    method: "post",
    data,
  });
}

export function getRequest(params: getData) {
  return request({
    url: "",
    method: "get",
    params,
  });
}

export function getStreamRequest(params: getData) {
  return request({
    url: "",
    method: "get",
    params,
    responseType: "blob",
    timeout: 10 * 1000,
  });
}

export function getMock(params: getData) {
  return request({
    url: "/get-mock-info",
    method: "get",
    params
  });
}
