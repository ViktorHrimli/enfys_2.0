"use client";
import { useState, useEffect, useReducer } from "react";

import { NovaPostList } from "./NovaPostList";

import { doFetchOnNovaPost } from "@/shared/helpers/service-post-api";

class BaseObj {
  apiKey = process.env.NV_API_KEY;
  modelName = "Address";
  calledMethod = "getSettlementAreas";
}

var objPrototype = {
  apiKey: process.env.NV_API_KEY,
  modelName: "Address",
  calledMethod: "getSettlementAreas",
  methodProperties: {
    Ref: "",
  },
};

var objectStateKeys = {
  DATA_REGION: "data_region",
  REGION_REF: "region_ref",
  REGION_NAME: "region_name",
  DATA_CITY: "data_city",
  CITY_REF: "city_ref",
  CITY_NAME: "city_name",
  POST_OFFICE: "post_office",
  POST_OFFICE_DATA: "post_office_data",
  TOGGLE_OFFICE: "office",
  TOGGLE_CITY: "city",
  TOGGLE_REGION: "region",
};

var initialState = {
  data_region: [],
  region_ref: "",
  region_name: "",
  data_city: [],
  city_ref: "",
  city_name: "",
  post_office_data: [],
  post_office: "",
};

var reducerNp = (state, payload) => {
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
      break;
  }
};

var doToggle = (state, payload) => {
  switch (payload.keys) {
    case objectStateKeys.TOGGLE_REGION: {
      return { ...state, region: payload.data };
    }
    case objectStateKeys.TOGGLE_CITY: {
      return { ...state, office: payload.data };
    }
    case objectStateKeys.TOGGLE_OFFICE: {
      return { ...state, city: payload.data };
    }

    default:
      return state;
  }
};

var inititalToggle = {
  office: false,
  city: false,
  region: false,
};

const NovaPostA = () => {
  var [state, dispatch] = useReducer(reducerNp, initialState);
  // ТИП ВІДДІЛЕННЯ
  const [theWareHouseRef, setTheWareHouseRef] = useState("");
  // OPTIONS
  const [isToggleMenager, dispatchToggle] = useReducer(
    doToggle,
    inititalToggle
  );
  const [isToggle, setIsToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  var getCity = async (city) => {
    var obj = {
      apiKey: process.env.NV_API_KEY,
      modelName: "Address",
      calledMethod: "getSettlements",
      methodProperties: {
        AreaRef: state[objectStateKeys.REGION_REF],
        Page: "1",
        FindByString: city,
        Limit: "40",
      },
    };

    doFetchOnNovaPost(obj).then((data) =>
      dispatch({ data: data, keys: objectStateKeys.DATA_CITY })
    );
  };

  var getPostOffice = async (postOffice) => {
    var obj = {
      apiKey: process.env.NV_API_KEY,
      modelName: "Address",
      calledMethod: "getWarehouses",
      methodProperties: {
        FindByString: postOffice,
        CityName: state[objectStateKeys.CITY_NAME],
        CityRef: "",
        Page: "1",
        Limit: "150",
        Language: "UA",
        TypeOfWarehouseRef: "",
        WarehouseId: "",
      },
    };
    doFetchOnNovaPost(obj).then((data) =>
      dispatch({ data: data, keys: objectStateKeys.POST_OFFICE_DATA })
    );
  };

  var getRegion = () => {
    var obj = {
      apiKey: process.env.NV_API_KEY,
      modelName: "Address",
      calledMethod: "getSettlementAreas",
      methodProperties: {
        Ref: "",
      },
    };

    doFetchOnNovaPost(obj).then((data) =>
      dispatch({ data: data, keys: objectStateKeys.DATA_REGION })
    );
  };

  useEffect(() => getRegion(), []);

  useEffect(() => {
    var city = state[objectStateKeys.CITY_NAME];

    Boolean(city) && getCity(city);
  }, [state[objectStateKeys.CITY_NAME]]);

  useEffect(() => {
    var office = state[objectStateKeys.POST_OFFICE];

    Boolean(office) && getPostOffice(office);
  }, [state[objectStateKeys.POST_OFFICE]]);

  return (
    <section
      style={{
        width: "100vw",
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>
        <strong style={{ color: "black" }}>NovaPostA</strong>
      </h1>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "100px",
          color: "black",
          paddingTop: "100px",
        }}
      >
        <label>
          Виберіть область
          <input
            readOnly
            onClick={() => setIsToggle(!isToggle)}
            value={state[objectStateKeys.REGION_NAME]}
          />
        </label>

        {Boolean(state[objectStateKeys.DATA_REGION].length) && isToggle && (
          <ul
            style={{
              marginTop: "30px",
              height: "150px",
              display: "flex",
              flexDirection: "column",
              overflow: "scroll",
            }}
          >
            {state[objectStateKeys.DATA_REGION].map((item, id) => (
              <NovaPostList
                key={id}
                onClick={() => {
                  dispatch({
                    data: item.Ref,
                    keys: objectStateKeys.REGION_REF,
                  });
                  dispatch({
                    data: item.Description,
                    keys: objectStateKeys.REGION_NAME,
                  });
                }}
              >
                <p>{item.Description}</p>
              </NovaPostList>
            ))}
          </ul>
        )}

        <label>
          Місто
          <input
            type="text"
            color="black"
            value={state[objectStateKeys.CITY_NAME]}
            onChange={(event) => {
              dispatch({
                data: event.currentTarget.value,
                keys: objectStateKeys.CITY_NAME,
              });
            }}
          />
        </label>
        {Boolean(state[objectStateKeys.DATA_CITY].length) && (
          <ul
            name="cityNP"
            style={{
              marginTop: "30px",
              height: "150px",
              display: "flex",
              flexDirection: "column",
              overflow: "scroll",
            }}
          >
            {state[objectStateKeys.DATA_CITY].map((item, id) => (
              <NovaPostList
                key={id}
                onClick={() => {
                  dispatch({ data: item.Ref, keys: objectStateKeys.CITY_REF });
                  dispatch({
                    data: item.Description,
                    keys: objectStateKeys.CITY_NAME,
                  });
                  setIsOpen(!isOpen);
                }}
              >
                {item.Description}
              </NovaPostList>
            ))}
          </ul>
        )}

        {/* <label>
          Вибрати тип відділення
          <select
            onChange={(event) => setTheWareHouseRef(event.target.value)}
            value={theWareHouseRef}
          >
            <option value="f9316480-5f2d-425d-bc2c-ac7cd29decf0">
              Поштомат
            </option>
            <option value="841339c7-591a-42e2-8233-7a0a00f0ed6f">
              Відділення
            </option>
            <option value="9a68df70-0267-42a8-bb5c-37f427e36ee4">
              Грузове
            </option>
          </select>
        </label> */}

        <label>
          Вибрати відділення
          <input
            type="text"
            value={state[objectStateKeys.POST_OFFICE]}
            onChange={(event) =>
              dispatch({
                data: event.currentTarget.value,
                keys: objectStateKeys.POST_OFFICE,
              })
            }
          />
        </label>

        {Boolean(state[objectStateKeys.POST_OFFICE_DATA].length) && (
          <ul
            style={{
              marginTop: "30px",
              height: "150px",
              display: "flex",
              flexDirection: "column",
              overflow: "scroll",
            }}
          >
            {state[objectStateKeys.POST_OFFICE_DATA].map((item, id) => (
              <NovaPostList
                key={id}
                onClick={() => {
                  dispatch({
                    data: item.Description,
                    keys: objectStateKeys.POST_OFFICE,
                  });
                }}
              >
                {item.Description}
              </NovaPostList>
            ))}
          </ul>
        )}
      </form>
    </section>
  );
};

export { NovaPostA };
