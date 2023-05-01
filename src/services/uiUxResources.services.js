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




//news
const getNewsCategory = async (category) => {
  return await axios.get(`https://www.resourchub-laravel.layouti.com/api/frontend/blogs/categories`);
};
//news
const getNews = async (category) => {
  return await axios.get(`https://www.resourchub-laravel.layouti.com/api/frontend/blogs?category=${category=="all"?"":category}`);
};
//news
const getNewsLatest = async () => {
  return await axios.get(`https://www.resourchub-laravel.layouti.com/api/frontend/blogs/resources`);
};


//channels
const getChannels = async () => {
  return await axios.get(`https://www.resourchub-laravel.layouti.com/api/frontend/channels`);
};

//channel
const getChannel = async (name) => {
  return await axios.get(`https://www.resourchub-laravel.layouti.com/api/frontend/channels/getChannel?channel=${name}`);
};
//channel
const getChannelVideos = async (name) => {
  return await axios.get(`https://www.resourchub-laravel.layouti.com/api/frontend/channels/vedios?channel=${name}`);
};


//SOCIAL POSTS

//channel
const getSocialHeader = async () => {
  return await axios.get(`https://www.resourchub-laravel.layouti.com/api/frontend/socialPost/headerContent`);
};
const getSocialDesighners = async () => {
  return await axios.get(`https://www.resourchub-laravel.layouti.com/api/frontend/socialPost/designers`);
};
const getSocialDesigns = async (name) => {
  console.log(name);
  return await axios.get(`https://www.resourchub-laravel.layouti.com/api/frontend/socialPost/designs?category=${name}`);
};

const getSocialCategories = async () => {
  return await axios.get(`https://www.resourchub-laravel.layouti.com/api/frontend/socialPost/categories`);
};


const getDesignerData = async (name) => {
  return await axios.get(`https://www.resourchub-laravel.layouti.com/api/frontend/socialPost/designers/find?designer=${name.split("-").join(" ")}`);
};
const getDesignData = async (name) => {
  return await axios.get(`https://www.resourchub-laravel.layouti.com/api/frontend/socialPost/designs/find?design=${name.split("-").join(" ")}`);
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
  getFav,
  getNewsCategory,
  getNews,
  getNewsLatest,
  getChannels,
  getChannel,
  getChannelVideos,
  getSocialHeader,
  getSocialDesighners,
  getSocialDesigns, 
  getSocialCategories,
  getDesignerData,
  getDesignData
};

export default UiUxResourcesServices;
