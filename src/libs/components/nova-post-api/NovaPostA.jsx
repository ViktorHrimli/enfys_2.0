"use client";
import { useState, useEffect, useReducer } from "react";

import { doFetchOnNovaPost } from "@/shared/helpers/service-post-api";

var objectStateKeys = {
  DATA_REGION: "data_region",
  REGION_REF: "region_ref",
  REGION_NAME: "region_name",
  DATA_CITY: "data_city",
  CITY_REF: "city_ref",
  CITY_NAME: "city_name",
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

    default:
      return state;
      break;
  }
};

const NovaPostA = () => {
  const [theMapOptionsState, setTheMapOptionsState] = useState(new Map());

  var [state, dispatch] = useReducer(reducerNp, initialState);
  // ГОРОД
  const [theCityData, settheCityData] = useState([]);
  const [theCityRef, setTheCityRef] = useState("");
  const [theCity, setTheCity] = useState("");
  // ТИП ВІДДІЛЕННЯ
  const [theWareHouseRef, setTheWareHouseRef] = useState("");
  const [postOffice, setPostOffice] = useState("");
  // ВІДДІЛЕННЯ
  const [postOfficesData, setPostOfficesData] = useState([]);
  const [office, setOffice] = useState("");
  // OPTIONS
  const [isToggle, setIsToggle] = useState(false);

  console.log();
  var getCity = async (city) => {
    var obj = {
      apiKey: process.env.NV_API_KEY,
      modelName: "Address",
      calledMethod: "getSettlements",
      methodProperties: {
        AreaRef: theMapOptionsState.get(objectStateKeys.CITY_REF),
        Page: "1",
        FindByString: city,
        Limit: "40",
      },
    };

    // doFetchOnNovaPost(obj).then((data) => settheCityData(data));
    doFetchOnNovaPost(obj).then((data) =>
      setTheMapOptionsState((prev) => prev.set(objectStateKeys.DATA_CITY, data))
    );
  };

  console.log(state[objectStateKeys.REGION_NAME]);
  var getPostOffice = async (postOffice) => {
    var obj = {
      apiKey: process.env.NV_API_KEY,
      modelName: "Address",
      calledMethod: "getWarehouses",
      methodProperties: {
        FindByString: postOffice,
        CityName: theCityRef,
        CityRef: "",
        Page: "1",
        Limit: "150",
        Language: "UA",
        TypeOfWarehouseRef: theWareHouseRef,
        WarehouseId: "",
      },
    };

    doFetchOnNovaPost(obj).then((data) => setPostOfficesData(data));
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
    console.log("DO");
    theMapOptionsState.has(objectStateKeys.CITY_NAME) &&
      setTimeout(
        () => getCity(theMapOptionsState.get(objectStateKeys.CITY_NAME)),
        300
      );
  }, [theMapOptionsState.get(objectStateKeys.CITY_NAME)]);

  useEffect(() => {
    postOffice && setTimeout(() => getPostOffice(postOffice), 500);
  }, [postOffice]);

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
        <label htmlFor="">
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
              <li
                key={id}
                title={item.Ref}
                onClick={(event) => {
                  dispatch({
                    data: item.ref,
                    keys: objectStateKeys.REGION_REF,
                  });
                  dispatch({
                    data: item.Description,
                    keys: objectStateKeys.REGION_NAME,
                  });

                  setIsToggle(!isToggle);
                }}
              >
                <p>{item.Description}</p>
              </li>
            ))}
          </ul>
        )}

        <label>
          Місто
          <input
            type="text"
            color="black"
            value={theMapOptionsState.get(objectStateKeys.CITY_NAME)}
            defaultValue={""}
            onChange={(event) => {
              setTheMapOptionsState((prev) =>
                prev.set(objectStateKeys.CITY_NAME, event.currentTarget.value)
              );
            }}
          />
        </label>
        {theMapOptionsState.has(objectStateKeys.DATA_CITY) && (
          <select
            name="cityNP"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            onChange={(event) => setTheCityRef(event.target.value)}
            value={theCityRef}
          >
            {theMapOptionsState
              .get(objectStateKeys.DATA_CITY)
              .map((item, id) => (
                <option key={id} value={item.Description}>
                  {item.Description}
                </option>
              ))}
          </select>
        )}

        <label>
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
        </label>

        <label>
          Вибрати відділення
          <input
            type="text"
            value={office || postOffice}
            onChange={(event) => setPostOffice(event.target.value)}
          />
        </label>

        {Boolean(postOfficesData.length) && (
          <select
            name="OfficeNP"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            onChange={(event) => setOffice(event.target.value)}
            value={office}
          >
            {postOfficesData.map((item, id) => (
              <option key={id} value={item.Description}>
                {item.Description}
              </option>
            ))}
          </select>
        )}
      </form>
    </section>
  );
};

export { NovaPostA };
