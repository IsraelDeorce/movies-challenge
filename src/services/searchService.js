import { baseUrl } from "./utils";

const search = "/search/shows?q=:";

const myInit = {
  method: "GET"
};

const SearchService = {
  get: (param) => fetch(`${baseUrl}${search}${param}`, myInit)
};

export default SearchService;
