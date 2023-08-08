import Displayer from "./Displayer"
function App() {
  const OuterBox = {
    width: "100vw",
    height: "100vh",
    padding: "5pt",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent:"space-arround",
    flexWrap: "wrap",
    border: "2pt solid black",
    //border: "2pt solid #f04115"
  };
  return (
    <>
      <div style={OuterBox}>
        <Displayer />
      </div>

    </>

  );
}

export default App;
