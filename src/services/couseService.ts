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
}

const coursesService = {
  getFeaturedCourses: async () => {
    const token = sessionStorage.getItem("onebitflix-token")
    const res = await api.get("/courses/featured", { headers: { Authorization: `Bearer ${token}` } }).catch((error) => {
      console.log(error.response.data.error)
      return error.response
    })
    return res
  }
}

export default coursesService