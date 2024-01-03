import api from "./api"

export type EpisodeType = {
  id: number
  name: string
  synopsis: string
  order: number
  videoUrl: string
  secondsLong: number
}

export type CourseType = {
  id: number
  name: string
  thumbnailUrl: string
  synopsis: string
  episodes?: EpisodeType[]
  favorited?: boolean
  liked?: boolean
}

const coursesService = {
  getFeaturedCourses: async () => {
    const token = sessionStorage.getItem("onebitflix-token")
    const res = await api.get("/courses/featured", { headers: { Authorization: `Bearer ${token}` } }).catch((error) => {
      return error.response
    })
    return res.data
  },

  getNewestCourses: async () => {
    const token = sessionStorage.getItem("onebitflix-token")
    const res = await api.get("/courses/newest", { headers: { Authorization: `Bearer ${token}` } }).catch((error) => {
      return error.response
    })
    return res.data
  },

  addToFav: async (courseId: number | string) => {
    const token = sessionStorage.getItem("onebitflix-token")
    const res = await api.post("/favorites", { courseId }, { headers: { Authorization: `Bearer ${token}` } }).catch((error) => {
      return error.response
    })
    return res
  },

  removeFav: async (courseId: number | string) => {
    const token = sessionStorage.getItem("onebitflix-token")
    const res = await api.delete("/favorites", { headers: { Authorization: `Bearer ${token}` }, data: { courseId } }).catch((error) => {
      return error.response
    })
    return res
  },

  getFavCourses: async () => {
    const token = sessionStorage.getItem("onebitflix-token")
    const res = await api.get("/favorites", { headers: { Authorization: `Bearer ${token}` } }).catch((error) => {
      return error.response
    })
    return res.data.courses
  },

  like: async (courseId: number | string) => {
    const token = sessionStorage.getItem("onebitflix-token")
    const res = await api.post("/likes", { courseId }, { headers: { Authorization: `Bearer ${token}` } }).catch((error) => {
      return error.response
    })
    return res
  },

  removeLike: async (courseId: number | string) => {
    const token = sessionStorage.getItem("onebitflix-token")
    const res = await api.delete("/likes", { headers: { Authorization: `Bearer ${token}` }, data: { courseId } }).catch((error) => {
      return error.response
    })
    return res
  },

  getSearch: async (name: string) => {
    const token = sessionStorage.getItem("onebitflix-token")
    const res = await api.get(`/courses/search?name=${name}`, { headers: { Authorization: `Bearer ${token}` } }).catch((error) => {
      return error.response
    })
    return res
  },

  getEpisodes: async (courseId: number | string) => {
    const token = sessionStorage.getItem("onebitflix-token")
    const res = await api.get(`/courses/${courseId}`, { headers: { Authorization: `Bearer ${token}` } }).catch((error) => {
      return error.response
    })
    return res
  }
}

export default coursesService