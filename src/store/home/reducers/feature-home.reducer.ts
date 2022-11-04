import { PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "../initial.state";

const reducer = {
  addFeatureHome: (state: any) => {
    state.featureHome.loading = true;
    state.featureHome.addSuccess = false;
  },
  addFeatureHomeSuccess: (state: any) => {
    state.featureHome.loading = false;
    state.featureHome.addSuccess = true;
  },
  addFeatureHomeFailure: (state: any) => {
    state.featureHome.loading = false;
  },

  fetchFeatureHome: (state: any) => {
    state.featureHome.loadingEntities = true;
  },
  fetchFeatureHomeSuccess: (state: any, action: any) => {
    state.featureHome.loadingEntities = false;
    state.featureHome.entities = action.payload?.content;
    state.featureHome.totalItems = action.payload?.totalElements;
    state.featureHome.totalPages = action.payload?.totalPages;
  },
  fetchFeatureHomeFailure: (state: any, action: PayloadAction) => {
    state.featureHome.loadingEntities = false;
    state.featureHome.errorMessage = action.payload;
  },

  fetchFeatureHomeById: (state: any) => {
    state.featureHome.loading = true;
  },
  fetchFeatureHomeByIdSuccess: (state: any, action: any) => {
    state.featureHome.loading = false;
    state.featureHome.entity = action.payload;
  },
  fetchFeatureHomeByIdFailure: (state: any, action: PayloadAction) => {
    state.featureHome.loading = false;
    state.featureHome.errorMessage = action.payload;
  },

  updateFeatureHome: (state: any) => {
    state.featureHome.loading = true;
    state.featureHome.updateSuccess = false;
  },
  updateFeatureHomeSuccess: (state: any) => {
    state.featureHome.loading = false;
    state.featureHome.updateSuccess = true;
  },
  updateFeatureHomeFailure: (state: any, action: PayloadAction) => {
    state.featureHome.loading = false;
    state.featureHome.errorMessage = action.payload;
  },

  resetFeatureHome: (state: any) => {
    state.featureHome = initialState.featureHome;
  }
};

export default reducer;
