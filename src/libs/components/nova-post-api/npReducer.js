import { objectStateKeys } from "./enums/keys";

export var reducerNp = (state, payload) => {
  switch (payload.keys) {
    case objectStateKeys.DATA_REGION:
      return { ...state, data_region: payload.data };

    case objectStateKeys.REGION_REF:
      return { ...state, region_ref: payload.data };

    case objectStateKeys.REGION_NAME:
      return { ...state, region_name: payload.data };

    case objectStateKeys.CITY_NAME:
      return { ...state, city_name: payload.data };

    case objectStateKeys.DATA_CITY:
      return { ...state, data_city: payload.data };

    case objectStateKeys.CITY_REF:
      return { ...state, city_ref: payload.data };

    case objectStateKeys.POST_OFFICE:
      return { ...state, post_office: payload.data };

    case objectStateKeys.POST_OFFICE_DATA:
      return { ...state, post_office_data: payload.data };

    default:
      return state;
  }
};
