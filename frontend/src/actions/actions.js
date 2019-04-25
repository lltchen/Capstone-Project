<---------------------------Action Creator----------------------------->


const loadCampaigns = (campaignArray) => ({ type: 'LOAD_CAMPAIGNS', payload: campaignArray })




<---------------------------Thunk  Creator----------------------------->

const getAllCampaigns = () => {
  return  (dispatch) => {
      return fetch("http://localhost:3000/campaign")
             .then(res => res.json())
             .then(campaignArray => dispatch(loadCampaign(campaignArray)))
  }
}