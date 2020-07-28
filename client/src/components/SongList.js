import React from "react";
import { useQuery } from "@apollo/client";

import { GET_SONGS } from "../queries";

export default () => {
  const { loading, error, data } = useQuery(GET_SONGS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div className="container">
      <ul className="collection">
        {data.songs.map((song, id) => (
          <li className="collection-item" key={id}>
            {song.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
