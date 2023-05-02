function Header(props) {
  
  const headerStyle = {
    display: "flex",
    flexDirection: "row",
    background: "#74BBFB",
    width: "90vw",
    margin: "auto",
    marginTop: "10px",
    justifyContent: "space-around",
    borderRadius: "5px",
    padding: "5px"
  }

  return (
    <h1 style={ headerStyle }>{ props.title }</h1>
  )
}

export default Header;
