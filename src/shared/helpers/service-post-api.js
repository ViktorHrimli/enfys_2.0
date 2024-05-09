var doFetchOnNovaPost = async (obj) => {
  var res = await fetch("https://api.novaposhta.ua/v2.0/json/", {
    body: JSON.stringify(obj),
    method: "POST",
  });

  var { data } = await res.json();
  return data;
};

export { doFetchOnNovaPost };
