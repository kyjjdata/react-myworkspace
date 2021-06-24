// AJAX library
import axios from "axios";

const openDataFoodWasteApi = {
  fetchFoodWaste: () =>
    axios.get(`${process.env.REACT_APP_API_BASE}/opendata/foodWaste`),
};

export default openDataFoodWasteApi;
