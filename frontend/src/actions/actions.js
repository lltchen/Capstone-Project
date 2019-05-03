// <---------------------------Action Creator----------------------------->


const postCreatedUser = (user) => ({ type: 'CREATE_USER', payload: user })
const postUserFromApi = (user) => ({ type: 'LOGIN_USER', payload: user })
const postCampaignsFromApi = (campaigns) => ({ type: 'GET_CAMPAIGNS', payload: campaigns })




// <---------------------------Thunk  Creator----------------------------->

export const createUserViaApi = (user) => {
  console.log(user);
  return (dispatch) => {
      return fetch("http://localhost:3000/user",{
        method: "POST",
        headers:{
          "content-type":"application/json",
          "Accept":"application/json"
        },
        body:JSON.stringify({user:user})
        })
        .then(res => res.json())
        .then(userInfo => dispatch(postCreatedUser(userInfo.user),
        localStorage.setItem("token", userInfo.jwt) )
      )
}
}
export const getUserFromApi = (user) => {
  console.log(user);
  return (dispatch) => {
      return fetch("http://localhost:3000/login",{
        method: "POST",
        headers:{
          "content-type":"application/json",
          "Accept":"application/json"
        },
        body:JSON.stringify({user:user})
        })
        .then(res => res.json())
        .then(userInfo => dispatch(postUserFromApi(userInfo.user))
      )
    }
}
export const getCurrentUserFromApi = (token) => {
  console.log(token);
  return (dispatch) => {
      return fetch("http://localhost:3000/current_user",{
        method: "GET",
        headers:{
          "content-type":"application/json",
          Accept:"application/json",
          Authorization:token
        }})
        .then(res => res.json())
        .then(userInfo => dispatch(postCreatedUser(userInfo.user)))
    }
}
export const getCampaignFromApi = () => {
  return (dispatch) => {
      return fetch("http://localhost:3000/campaign")
        .then(res => res.json())
        .then(campaigns => dispatch(postCampaignsFromApi(campaigns))
      )
    }
}

export const createDonationThroughApi = (donation) => {
  return (dispatch) => {
      return fetch("http://localhost:3000/donation",{
        method:"POST",
        headers:{
          "content-type":"application/json",
          "Accept":"application/json"
        },
        body: JSON.stringify({
          ...donation
        })
      })
        .then(res => res.json())
        .then(console.log)
    }
}
