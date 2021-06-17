const filterData = (data, query) => {
  if (!query) {
      return data
  }
  return data.filter((d) => d.toLowerCase().includes(query.toLowerCase()));
}

export default filterData;