import { useState } from "react";
import axios from "axios";
import { searchOp } from "../Redux/actions";
import { Link } from "react-router-dom";

export const SearchInp = () => {
  const [query, setQuery] = useState();
  const [data, SetData] = useState([]);
  const getSearchData = () => {
    axios
      .get("https://fast-reef-22226.herokuapp.com/data", {
        params: {
          title: query,
        },
      })
      .then((res) => res.data)
      .then((data) => {
        SetData(data);
      });
  };

  return (
    <div>
      <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"></img>
      <div id="navbar">
        <input
          onKeyPress={(e) => {
            e.code === "Enter" ? getSearchData() : null;
          }}
          className="search-box"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="search"
          style={{ marginLeft: "20px" }}
          onClick={() => {
            getSearchData();
          }}
        >
          ENTER
        </button>
      </div>
      <div id="search-result">
        {data.map((e, i) => {
          return (
            <div key={i} className="result" style={{ backgroundColor: "red" }}>
              <p>{e.url}</p>
              <div>
                <span>{e.title}  |  </span>
                <span>{e.author}</span>
              </div>
              <div>{e.description}</div>
              <div>creation date:{e.creation_date}</div>
              <div>
                <span>Explicit: {e.explicit}  |  </span>
                <span>Quality: {e.quality}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
