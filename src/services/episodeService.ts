import api from "./api";

export interface WatchTimeDetails {
  episodeId: number
  seconds: number
}

const episodeService = {
  getWatchTime: async (episodeId: number) => {
    const token = sessionStorage.getItem("onebitflix-token")
    const res = await api.get(`/episodes/${episodeId}/watchTime`, { headers: { Authorization: `Bearer ${token}` } }).catch((error) => {
      return error.response
    })
    return res
  },

  setWatchTime: async ({ episodeId, seconds }: WatchTimeDetails) => {
    const token = sessionStorage.getItem("onebitflix-token")
    const res = await api.post(`/episodes/${episodeId}/watchTime`, { seconds }, { headers: { Authorization: `Bearer ${token}` } }).catch((error) => {
      return error.response
    })
    return res
  },

}

export default episodeService