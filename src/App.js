import { useState } from "react";

function App() {
  const [tooth, setTooth] = useState([
    {
      id: 1,
      count: 5,
      top: false,
      bottom: false,
      left: false,
      right: false,
      center: false,
    },
    {
      id: 1,
      count: 5,
      top: false,
      bottom: false,
      left: false,
      right: false,
      center: false,
    },
    {
      id: 2,
      top: false,
      bottom: false,
      left: false,
      right: false,
    },
  ]);

  function Click(item, index, pos) {
    if (pos == "top_2023") {
      tooth.map((item, index) => {
        setTooth(item.top ? false : true);
      });
      console.log(item.top);
    }

    if (pos == "bottom_2023") {
    }
  }

  return (
    <div style={{ display: "flex" }}>
      {tooth.map((item, index, id) => {
        return (
          <div>
            {item.count == 5 ? (
              <div className="outbox">
                <div
                  onClick={(e) => Click(item, index)}
                  className={item.top ? "top_2023Active" : "top_2023"}
                ></div>
                <div className="bottom_2023"></div>
                <div className="left_2023"></div>
                <div className="right_2023"></div>
                <div className="center_2023"></div>
              </div>
            ) : (
              <div className="outbox">
                <div className="top_4_2023"></div>
                <div className="bottom_4_2023"></div>
                <div className="left_4_2023"></div>
                <div className="right_4_2023"></div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default App;
