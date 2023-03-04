/** @format */
import axios from "axios";

const getUiUxResources = async () => {
  return await axios.get(process.env.REACT_APP_API);
};
const getUiUxResourcesHomePage = async () => {
  return await axios.get(`${process.env.REACT_APP_API}/homePage`);
};

const getUiUxResourcesFooter = async () => {
  return await axios.get(`${process.env.REACT_APP_API}/footer`);
};

const getSubCategoryByName = async (name, type) => {
  return await axios.get(
    `https://www.resourchub-laravel.layouti.com/api/frontend/resources/category?search=${name}&status=${type}`
  );
};
const getPages = async (name) => {
  return await axios.get(
    `https://www.resourchub-laravel.layouti.com/api/frontend/resources/pages?category=${name}&status=SubCategory`
  );
};

const getSearch = async (name) => {
  return await axios.get(
    `https://www.resourchub-laravel.layouti.com/api/frontend/resources/pages?search=${name}`
  );
};

const getFooter = async () => {
  return await axios.get(
    `https://www.resourchub-laravel.layouti.com/api/frontend/resources/footer`
  );
};


const getResourcesTags = async () => {
  return await axios.get(`${process.env.REACT_APP_API}/getAllTags`);
};
const getResourcesDetailsSeo = async () => {
  return await axios.get(`${process.env.REACT_APP_API}/details/seo`);
};

const addResource = async (title, link) => {
  return await axios.post(
    `https://www.resourchub-laravel.layouti.com/api/frontend/resources/requestResource`,
    {
      title,
      link,
    }
  );
};

const likeResource = async (id) => {
  return await axios.post(
    `https://www.resourchub-laravel.layouti.com/api/frontend/resources/like`,
    {
      id,
    }
  );
};

const ViewrsResource = async (id) => {
  return await axios.post(
    `https://www.resourchub-laravel.layouti.com/api/frontend/resources/view`,
    {
      id,
    }
  );
};

const UiUxResourcesServices = {
  getUiUxResources,
  getSubCategoryByName,
  getUiUxResourcesHomePage,
  getUiUxResourcesFooter,
  getPages,
  getResourcesDetailsSeo,
  getResourcesTags,
  addResource,
  likeResource,
  ViewrsResource,
  getFooter,
  getSearch
};

export default UiUxResourcesServices;
