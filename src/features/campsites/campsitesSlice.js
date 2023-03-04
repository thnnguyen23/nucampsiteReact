import { CAMPSITES } from "../../app/shared/CAMPSITES";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    campsiteArray: CAMPSITES
}

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState
});

export const selectAllCampsites = (state) => {
    return state.campsites.campsitesArray;
}

// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor(CAMPSITES.length * Math.random()) ];
// }
export const selectCampsiteById = (id) => (state) => {
    return state.campsites.campsitesArray.find(
        (campsite) => campsite.id === parseInt(id)
    );
};

export const selectFeaturedCampsite = (state) => {
    console.log(state)
    return state.campsites.campsitesArray.find((campsite) => campsite.featured);
};

export const campsiteReducer = campsitesSlice.reducer; 

