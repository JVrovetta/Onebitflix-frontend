import api from "./api";

export interface UserPersonalDetatils {
  firstName: string
  lastName: string
  phone: string
  email: string
  createdAt?: string
}

const profileService = {
  getCurrent: async () => {
    const token = sessionStorage.getItem("onebitflix-token");
    const res = await api.get("/users/current", { headers: { Authorization: `Bearer ${token}` } }).catch((error) => {
      return error.response
    })
    console.log(res.data)
    return res.data
  },

  userUpdate: async (params: UserPersonalDetatils) => {
    const token = sessionStorage.getItem("onebitflix-token");
    const res = await api.put("/users/current", params, { headers: { Authorization: `Bearer ${token}` } }).catch((error) => {
      if (error.response.status === 400 || error.response.status === 401) {
        return error.response
      }
      return error
    })
    return res.status
  }
}

export default profileService