import request from "@/utils/request";

export function getUserToken(data: UserLogIn) {
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