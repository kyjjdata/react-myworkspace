// AJAX library
import axios from "axios";

const openDataFoodWasteTimeApi = {
  fetchFoodWaste: () =>
    axios.get(`${process.env.REACT_APP_API_BASE}/opendata/foodWasteTime`),
};

export default openDataFoodWasteTimeApi;
