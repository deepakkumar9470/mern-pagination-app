import axios from 'axios';

const url =   "http://localhost:5000/api/banks"


// Adding new banks data here
export const addBank = async (inputs) => {
    return await axios.post(`${url}/add`, inputs);
}

// export const getBanks = async () => {
//     return await axios.get(`${url}`);
// }

// Get all data here by pagination query
export const getBanks = async ({page,perPage} ={}) => {
    try {
         const res = await axios.get(`${url}?page=${page}&perPage=${perPage}`);
         return res.data
    } catch (error) {
        console.log(error)
    }
    
}

// Get single bank data here
export const getBank = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

// Edit bank here
export const editBank= async (id, inputs) => {
    return await axios.put(`${url}/${id}`, inputs)
}

// Delete bank here
export const deleteBank = async (id) => {
    return await axios.delete(`${url}/${id}`);
}


