const getItem = (item) => {
    try {
      return JSON.parse(localStorage.getItem(item)) || false;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  
  export default getItem;
  