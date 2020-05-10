import { baseUrl } from "./utils";

const search = "/shows/";

const myInit = {
  method: "GET"
};

const ShowsService = {
  getEpisodes: (id) => fetch(`${baseUrl}${search}${id}/episodes`, myInit),
  getCew: (id) => fetch(`${baseUrl}${search}${id}/crew`, myInit),
  getCast: (id) => fetch(`${baseUrl}${search}${id}/cast`, myInit)
};

export default ShowsService;
