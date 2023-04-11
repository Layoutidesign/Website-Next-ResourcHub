/** @format */
import axios from "axios";

const getUiUxResources = async () => {
  return await axios.get(process.env.REACT_APP_API);
};
const getUiUxResourcesHomePage = async (token) => {
  return await axios.get(`${process.env.REACT_APP_API}/homePage`,{
    headers: token !== undefined?{ 
      'Authorization': `Bearer ${token}`
    }:{'language': 'en', }
  });
};

const getUiUxResourcesFooter = async (token) => {
  return await axios.get(`${process.env.REACT_APP_API}/footer`,{
    headers: token !== undefined?{ 
      'Authorization': `Bearer ${token}`
    }:{'language': 'en', }
  });
};

const getSubCategoryByName = async (name, type) => {
  return await axios.get(
    `https://www.resourchub-laravel.layouti.com/api/frontend/resources/category?search=${name}&status=${type}`
  );
};
const getPages = async (name, token) => {
  return await axios.get(
    `https://www.resourchub-laravel.layouti.com/api/frontend/resources/pages?category=${name}&status=SubCategory`
    ,{
      headers: token !== undefined?{ 
        'Authorization': `Bearer ${token}`
      }:{'language': 'en', }
    });
};

const getSearch = async (name, token) => {
  return await axios.get(
    `https://www.resourchub-laravel.layouti.com/api/frontend/resources/pages?search=${name}`
    ,{
      headers: token !== undefined?{ 
        'Authorization': `Bearer ${token}`
      }:{'language': 'en', }
    });
};

const getFooter = async () => {
  return await axios.get(
    `https://www.resourchub-laravel.layouti.com/api/frontend/resources/footer`
  );
};


const getResourcesTags = async () => {
  return await axios.get(`${process.env.REACT_APP_API}/getAllTags`);
};


const getResourcesDetailsSeo = async (token) => {
  return await axios.get(`${process.env.REACT_APP_API}/details/seo`,{
    headers: token !== undefined?{ 
      'Authorization': `Bearer ${token}`
    }:{'language': 'en', }
  });
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

const likeResource = async ({id, token}) => {
  return await axios.post(
    `https://www.resourchub-laravel.layouti.com/api/frontend/resources/pages/favourite`,
    {
      id,
    }, {
      headers: { 
        'language': 'en', 
        'Authorization': `Bearer ${token}`
      }
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
const getFav = async (token) => {
  return await axios.get(`https://www.resourchub-laravel.layouti.com/api/frontend/resources/pages/favourite`, {
    headers: { 
      'language': 'en', 
      'Authorization': `Bearer ${token}`
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
