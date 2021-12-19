import axios from "axios";

const getData = async (userId) => {
    const { data : user } = await axios (`https://jsonplaceholder.typicode.com/users/${userId}`)
    const { data : post } = await axios (`https://jsonplaceholder.typicode.com/posts/${userId}`)

    return {"user" : user, "post" : post}
}
