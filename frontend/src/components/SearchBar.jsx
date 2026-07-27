
import { useState, useEffect } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import Searchdata from "../data/Searchdata";

function SearchBar() {

  const [query, setQuery] = useState("");

  const [results, setResults] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    const fetchSearch = async () => {

      if (!query.trim()) {

        setResults([]);

        return;

      }

      try {

        // BACKEND SEARCH

        const res = await axios.get(
          `http://localhost:8080/search/${query}`
        );

        // STATIC SEARCH

        const staticResults = Searchdata.filter(
          (item) =>
            item.title
              .toLowerCase()
              .includes(query.toLowerCase())
        );

        // FORMAT PLACE RESULTS

        const placeResults = res.data.places.map(
          (place) => ({
            title: place.name,
            path: `/place/${place._id}`
          })
        );

        // FORMAT ART RESULTS

        const artResults = res.data.arts.map(
          (art) => ({
            title: art.name,
            path: `experiences/detail/art/${art._id}`
          })
        );

        // FORMAT CUISINE RESULTS

        const cuisineResults =
          res.data.cuisines.map((cuisine) => ({
            title: cuisine.name,
            path: `experiences/detail/cuisine/${cuisine._id}`
          }));


        // COMBINE ALL RESULTS

        setResults([

          ...staticResults,

          ...placeResults,

          ...artResults,

          ...cuisineResults

        ]);

      } catch (err) {

        console.log(err);

      }

    };

    fetchSearch();

  }, [query]);



  return (

    <div
      className="position-relative"
      style={{ width: "300px" }}
    >

      {/* INPUT */}

      <input
        type="text"
        className="form-control rounded-pill px-4"
        placeholder="Search destinations, cuisine..."
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
      />



      {/* DROPDOWN */}

      {results.length > 0 && (

        <div
          className="position-absolute bg-white shadow rounded-4 mt-2 w-100 overflow-hidden"
          style={{
            zIndex: 1000,
            maxHeight: "400px",
            overflowY: "auto"
          }}
        >

          {results.map((item, index) => (

            <div
              key={index}
              className="px-4 py-3 border-bottom search-item"
              style={{
                cursor: "pointer"
              }}
              onClick={() => {

                navigate(item.path);

                setQuery("");

                setResults([]);

              }}
            >

              {item.title}

            </div>

          ))}

        </div>

      )}

    </div>

  );
}

export default SearchBar;
