import ListGroup from "./components/ListGroup";
function App() {
  let listData = [
    { heading: "Title 1", content: "Hello 1" },
    { heading: "Title 2", content: "Hello 2" },
    { heading: "Title 3", content: "Hello 3" },
    { heading: "Title 4", content: "Hello 4" },
    { heading: "Title 5", content: "Hello 5" },
  ];
  return (
    <div>
      <ListGroup list={listData}></ListGroup>
    </div>
  );
}
export default App;
