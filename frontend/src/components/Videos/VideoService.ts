import axios from "axios";
import { Video } from "./VideoInterface";

const url = "http://localhost:4000";

export const getVideos = async () => {
  return await axios.get<Video[]>(`${url}/videos`);
};

export const createVideo = async (video: Video) => {
  return await axios.post(`${url}/videos`, video);
};

export const getVideo = async (id: string) => {
  return await axios.get<Video>(`${url}/videos/${id}`);
};

export const updateVideo = async (id: string, video: Video) => {
  return await axios.put<Video>(`${url}/videos/${id}`, video);
};

export const deleteVideo = async (id: string) => {
  return await axios.delete(`${url}/videos/${id}`);
};
