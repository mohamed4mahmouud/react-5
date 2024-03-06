const reducer = (prevState, action) => {
  if (action.type === "GETPRODUCTS") {
    return { ...prevState, products: action.payload };
  } else if (action.type === "INC") {
    return { ...prevState, count: prevState.count + 1 };
  } else if (action.type === "SHOWPRODUCT") {
    return { ...prevState, products: action.payload };
  }
  return prevState;
};

export default reducer;
