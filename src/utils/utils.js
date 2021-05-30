export const queryData = (data, nameList) => {
  let endpoint = null;
  data = data.drugs;

  for (const name of nameList) {
    for (const item of data) {
      if (item.name === name) {
        data = item;
        endpoint = item;
        break;
      }
    }
  }

  return endpoint;
}

export const handleNextPageClick = (history, next) => {
  const url = endInSlash(window.location.pathname);
  const new_url = `${url}${next}`;
  console.log(Boolean(url));
  console.log(url);
  console.log(new_url);
  history.push(new_url);
};

const endInSlash = (url) => {
  if (url.substr(-1) !== '/') {
    url += "/";
  }
  return url;
};