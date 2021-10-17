import apiAxios from "./apiAxios";
import mockAxios from "./mockAxios";

// 获取联系人列表
export const getContactList =() => apiAxios.get("/contactList")

// 获取mock用户
export const getContactList = () => mockAxios.get("/users")