"use client";
import { useState, useEffect } from "react";

const NovaPostA = () => {
  const [isCity, setisCity] = useState("");
  const [data, setData] = useState([]);
  const [cityRef, setCityRef] = useState("");

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

  useEffect(() => {
    setTimeout(() => useCity(isCity), 300);
  }, [isCity]);

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
            defaultValue={"dadadad"}
          >
            {data.map((item, id) => (
              <option key={id} value={item.Ref}>
                {item.Present}
              </option>
            ))}
          </select>
        )}

        <label>
          Вибрати тип відділення
          <select>
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
      </form>
    </section>
  );
};

export { NovaPostA };
