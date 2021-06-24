// AJAX library
import axios from "axios";

const openDataFoodWasteDayApi = {
  fetchFoodWaste: () =>
    axios.get(`${process.env.REACT_APP_API_BASE}/opendata/foodWasteDay`),
};

export default openDataFoodWasteDayApi;
