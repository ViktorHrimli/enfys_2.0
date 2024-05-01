"use client";
import { useState, useEffect } from "react";

import { doFetchOnNovaPost } from "@/shared/helpers/service-post-api";

const NovaPostA = () => {
  const [data, setData] = useState([]);

  // ОБЛАСТЬ
  const [theRegionRef, setTheRegionRef] = useState("");
  const [dataRegion, setdataRegion] = useState([]);

  const [theWareHouseRef, setTheWareHouseRef] = useState("");
  const [postOffice, setPostOffice] = useState("");

  const [theCityRef, setTheCityRef] = useState("");
  const [theCity, setTheCity] = useState("");

  const [postOfficesData, setPostOfficesData] = useState([]);
  const [office, setOffice] = useState("");

  var getCity = async (city) => {
    var obj = {
      apiKey: process.env.NV_API_KEY,
      modelName: "Address",
      calledMethod: "getSettlements",
      methodProperties: {
        AreaRef: theRegionRef,
        Page: "1",
        FindByString: city,
        Limit: "40",
      },
    };

    doFetchOnNovaPost(obj).then((data) => setData(data));
  };

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

    doFetchOnNovaPost(obj).then((data) => setdataRegion(data));
  };

  useEffect(() => getRegion(), []);

  useEffect(() => {
    theCity && setTimeout(() => getCity(theCity), 300);
  }, [theCity]);

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
        }}
      >
        {Boolean(dataRegion.length) && (
          <select
            name="regionNP"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            onChange={(event) => setTheRegionRef(event.target.value)}
            value={theCityRef}
          >
            {dataRegion.map((item, id) => (
              <option key={id} value={item.Ref}>
                {item.Description}
              </option>
            ))}
          </select>
        )}

        <label>
          Місто
          <input
            type="text"
            color="black"
            value={theCity}
            onChange={(evn) => setTheCity(evn.currentTarget.value)}
          />
        </label>
        {Boolean(data.length) && (
          <select
            name="cityNP"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            onChange={(event) => setTheCityRef(event.target.value)}
            value={theCityRef}
          >
            {data.map((item, id) => (
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
