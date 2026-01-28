import axios from 'axios';


async function getUsers(){
    try{
        const res=await axios.get('https://jsonplaceholder.typicode.com/users');
        return res.data;
    }catch(error){
        console.error('Error fetching users:', error);
        throw error;
    }
}

async function getUserById(id){
    try{
        const res=await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        return res.data;
    }catch(error){
        console.error('Error fetching user by id:', error);
        throw error;
    }
}

export { getUsers, getUserById };