import axios from "axios";
import userStore from "stores/user";
import Endpoints from "utilities/enums/endpoints";

export default axios.create({
  baseURL: Endpoints.BASE_URL,
  headers: {
    Authorization: userStore.getState().access_token ? "Bearer " + userStore.getState().access_token : "",
  },
});
