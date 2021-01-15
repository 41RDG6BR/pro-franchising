import axios from 'src/utils/axios';

const list = async () => {
  const response = await axios.get('/product/list').catch((request) => {
    return request.response;
  });
  return response.data;
};

const save = async (id, image, ingredients, name, price) => {
  const result = await axios.post('/product/save', {
    id, image, ingredients, name, price
  }).catch((request) => {
    return request.response;
  });
  return result.data;
};

const remove = async (id) => {
  const result = await axios.delete(`/product/delete/${id}`).catch((request) => {
    return request.response;
  });
  console.log(result);
  return result;
};

const update = async (id) => {
  const result = await axios.put(`/product/save/${id}`).catch((request) => {
    return request.response;
  });
  console.log(result);
  return result;
};

export {
  list,
  save,
  remove,
  update
};
export default list;
