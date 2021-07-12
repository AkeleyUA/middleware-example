import React from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { GET_DATA_REQUEST } from "./app/actions";

function App() {
  const { items, loading, err } = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();

  if (loading) {
    return <div className="App">...loading</div>;
  }

  if (err) {
    <div className="App">{err}</div>;
  }

  return (
    <div className="App">
      {!items.length ? (
        <button
          style={{ width: 100, height: 50, margin: 30, color: "darkgreen" }}
          onClick={() => dispatch(GET_DATA_REQUEST())}
        >
          Try get data
        </button>
      ) : (
        items.map((item) => (
          <p key={item.id}>{JSON.stringify(item, null, 4)}</p>
        ))
      )}
    </div>
  );
}

export default App;
