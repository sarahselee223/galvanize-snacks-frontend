const axios = require('axios')
const base = 'http://localhost:3000/'
const userId = localStorage.getItem('userId')
const url = `${base}/users/${userId}/snacks/`

const attachHeader = () => {
    let bearer = ''
    const token = localStorage.getItem('token')
    if (token) bearer = `Bearer ${token}`
  
    return {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': bearer
      }
    }
}

const login = (credentials) => axios.post(`${base}/login`, credentials)
const signup = (credentials) => axios.post(`${base}/users`, credentials)
const getid = () => axios.get(`${base}/login`, attachHeader())
const getOneUser = (userId) => axios.get(`${base}/users/${userId}`)

const getAllSnacks = () => axios.get(`${base}/snacks`) 
const getOneSnack = (snackId) => axios.get(`${base}/snacks/${snackId}`) 
const getAllReviews = (snackId) => axios.get(`${base}/snacks/${snackId}/reviews`) 
const getOneReview = (snackId, reviewId) => axios.get(`${base}/snacks/${snackId}/reviews/${reviewId}`) 
const createReview = (snackId, review) => axios.post(`${url}/${snackId}/reviews`, review, attachHeader())
const editReview = (snackId, review, reviewId) => axios.put(`${url}/${snackId}/reviews/${reviewId}`, review, attachHeader())
const deleteReview = (snackId, reviewId) => axios.delete(`${url}/${snackId}/reviews/${reviewId}`, attachHeader())

module.exports = {
    login,
    signup,
    getid,
    getOneUser,
    getAllSnacks,
    getOneSnack,
    getAllReviews,
    getOneReview,
    createReview,
    editReview,
    deleteReview
}