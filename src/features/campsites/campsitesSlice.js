import { createSlice } from "@reduxjs/toolkit";
import { CAMPSITES } from "../../app/shared/CAMPSITES";


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

export const selectRandomCampsite = () => {
    return CAMPSITES[Math.floor(CAMPSITES.length * Math.random()) ];
}
export const selectCampsiteById = (id) => (state) => {
    return state.campsites.campsitesArray.find(
        (campsite) => campsite.id === parseInt(id)
    );
    console.log(state)
};

export const selectFeaturedCampsite = (state) => {
    console.log(state)
    return state.campsites.campsitesArray.find((campsite) => campsite.featured);
};

export const campsitesReducer = campsitesSlice.reducer; 


