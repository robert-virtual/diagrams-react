import { useEffect, useState } from "react";
import ReactFlow, { Controls, StepEdge } from "react-flow-renderer";

const test = [
  {
    id: "1",
    type: "input", // input node
    data: { label: "Input Node" },
    position: { x: 250, y: 25 },
  },
  // default node
  {
    id: "2",
    // you can also pass a React component as a label
    data: { label: <div>Default Node</div> },
    position: { x: 100, y: 125 },
  },
  {
    id: "3",
    type: "output", // output node
    data: { label: "Output Node" },
    position: { x: 250, y: 250 },
  },
  // animated edge
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
];

export default function Home() {
  useEffect(() => {
    var url = "https://es.wikipedia.org/w/api.php";

    var params = {
      action: "opensearch",
      search: "Hampi",
      limit: "5",
      namespace: "0",
      format: "json",
    };

    url = url + "?origin=*";
    Object.keys(params).forEach((key) => {
      url += "&" + key + "=" + params[key];
    });

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const [newElement, setNewElement] = useState("");
  const [elements, setElements] = useState([]);
  function addElement() {
    setElements((e) =>
      e.concat({
        id: "1",
        type: "input", // input node
        data: { label: newElement },
        position: { x: 250, y: 25 },
      })
    );
  }
  return (
    <div style={{ height: "90vh" }}>
      <input
        onChange={({ target }) => setNewElement(target.value)}
        value={newElement}
        type="text"
        placeholder="tema"
        style={{
          padding: "0.5rem",
          borderRadius: "0.5rem",
          outline: "none",
          border: "solid 1px gray",
        }}
      />
      <button className="bg-blue-600" onClick={addElement}>
        get info
      </button>
      <ReactFlow elements={elements}></ReactFlow>
    </div>
  );
}
