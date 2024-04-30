"use client";
import { useState, useEffect } from "react";

const NovaPostA = () => {
  const [data, setData] = useState([]);

  const [theRegion, setTheRegion] = useState("");
  const [dataRegion, setdataRegion] = useState([]);

  const [wareHouseRef, setWareHouseRef] = useState("");
  const [postOffice, setPostOffice] = useState("");

  const [cityRef, setCityRef] = useState("");
  const [isCity, setisCity] = useState("");

  const [postOfficesData, setPostOfficesData] = useState([]);
  const [office, setOffice] = useState("");

  var useCity = async (city) => {
    var obj = {
      apiKey: process.env.NV_API_KEY,
      modelName: "Address",
      calledMethod: "searchSettlements",
      methodProperties: {
        CityName: city,
        Limit: "50",
        Page: "1",
      },
    };

    var res = await fetch("https://api.novaposhta.ua/v2.0/json/", {
      body: JSON.stringify(obj),
      method: "POST",
    });
    var { data } = await res.json();
    setData(data[0].Addresses);
  };

  var getPostOffice = async (postOffice) => {
    var obj = {
      apiKey: process.env.NV_API_KEY,
      modelName: "Address",
      calledMethod: "getWarehouses",
      methodProperties: {
        FindByString: postOffice,
        CityName: cityRef,
        CityRef: "",
        Page: "1",
        Limit: "150",
        Language: "UA",
        TypeOfWarehouseRef: wareHouseRef,
        WarehouseId: "",
      },
    };

    var res = await fetch("https://api.novaposhta.ua/v2.0/json/", {
      body: JSON.stringify(obj),
      method: "POST",
    });
    var { data } = await res.json();

    setPostOfficesData(data);
  };

  var getRegion = async () => {};

  useEffect(() => {
    isCity && setTimeout(() => useCity(isCity), 300);
  }, [isCity]);

  useEffect(() => {
    postOffice && setTimeout(() => getPostOffice(postOffice), 500);
  }, [postOffice]);

  useEffect(() => {
    var obj = {
      apiKey: process.env.NV_API_KEY,
      modelName: "Address",
      calledMethod: "getSettlementAreas",
      methodProperties: {
        Ref: "",
      },
    };

    fetch("https://api.novaposhta.ua/v2.0/json/", {
      body: JSON.stringify(obj),
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => setdataRegion(res.data));
  }, []);

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
            onChange={(event) => setTheRegion(event.target.value)}
            value={theRegion}
          >
            {dataRegion.map((item, id) => (
              <option key={id} value={item.Description}>
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
            value={isCity}
            onChange={(evn) => setisCity(evn.currentTarget.value)}
          />
        </label>
        {Boolean(data.length) && (
          <select
            name="cityNP"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            onChange={(event) => setCityRef(event.target.value)}
            value={cityRef}
          >
            {data.map((item, id) => (
              <option key={id} value={item.MainDescription}>
                {item.MainDescription}
              </option>
            ))}
          </select>
        )}

        <label>
          Вибрати тип відділення
          <select
            onChange={(event) => setWareHouseRef(event.target.value)}
            value={wareHouseRef}
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
