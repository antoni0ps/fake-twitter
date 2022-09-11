import axios from 'axios'
const url = 'http://localhost:3001/api/tweets'

// let token = null

// const setToken = newToken => {
//     token = `bearer ${newToken}`
// }

const getTweets = async () => {
    const response = await axios.get(url)
    return response.data
}

const getSingleTweet = async (id) => {
    try {
      const response = await axios.get(`${url}/${id}`)
      return response.data;
    } catch {
      alert("El tweet no existe");
    }
  };

const postTweet = async tweetInfo => {
    const response = await axios.post(url, tweetInfo)
    return response.data
}

const updateTweet = async (id, newTweet) => {
    const response = await axios.put(`${url}/${id}`, {content: newTweet})
    return response.data
}

const removeTweet = async id => {
    // const config = {headers: {Authorization: token}}
    const response = await axios.delete(`${url}/${id}`)
    return response
}

export default {getTweets, getSingleTweet, postTweet, updateTweet, removeTweet}