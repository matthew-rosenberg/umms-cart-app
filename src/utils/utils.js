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
  history.push(`${window.location.pathname}/${next}`);
};