/** @format */
import axios from "axios";

const getUiUxResources = async () => {
  return await axios.get(process.env.REACT_APP_API);
};
const getUiUxResourcesHomePage = async () => {
  return await axios.get(`${process.env.REACT_APP_API}/homePage`);
};

const getSubCategoryByName = async (name) => {
  return await axios.get(
    `${process.env.REACT_APP_API}/category?search=${name}`
  );
};

const getResourcesTags = async () => {
  return await axios.get(`${process.env.REACT_APP_API}/getAllTags`);
};

const addResource = async (title, link) => {
  return await axios.post(
    `https://laravel.layouti.com/api/frontend/resources/category?search`,
    {
      title,
      link,
    }
  );
};

const likeResource = async (id) => {
  return await axios.post(
    `https://laravel.layouti.com/api/frontend/resources/like`,
    {
      id,
    }
  );
};

const ViewrsResource = async (id) => {
  return await axios.post(
    `https://laravel.layouti.com/api/frontend/resources/view`,
    {
      id,
    }
  );
};

const UiUxResourcesServices = {
  getUiUxResources,
  getSubCategoryByName,
  getUiUxResourcesHomePage,
  getResourcesTags,
  addResource,
  likeResource,
  ViewrsResource
};

export default UiUxResourcesServices;
