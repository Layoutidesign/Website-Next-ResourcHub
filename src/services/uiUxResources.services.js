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


const getLayoutiFooter = async () => {
  return await axios.get(`https://laravel.layouti.com/api/frontend/footer`);
};
const getFav = async () => {
  return await axios.get(`https://www.resourchub-laravel.layouti.com/api/frontend/resources/pages/favourite`, {
    headers: { 
      'language': 'en', 
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbGFyYXZlbC51aXV4ZWR1LmNvbVwvYXBpXC9PQXV0aCIsImlhdCI6MTY3NzY4MDI2NiwiZXhwIjozNTQzOTIwMjY2LCJuYmYiOjE2Nzc2ODAyNjYsImp0aSI6IjNnVU5ndzFiejRraGtkQnoiLCJzdWIiOjYxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.LXDONU3uxSE134Yk3-cXJfIbHd14NuWpZaOhBQRUYQo', 
      'Cookie': 'laravel_session=2oqXvgaTR4kJ72xL9RuSVld4AbTeRDLYbD3E7oHR'
    }
  });
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
  getSearch,
  getLayoutiFooter,
  getFav
};

export default UiUxResourcesServices;
