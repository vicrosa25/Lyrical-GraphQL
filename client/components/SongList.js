import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_SONGS = gql`
  {
    songs {
      title
    }
  }
`;

const SongList = () => {
  const { loading, data } = useQuery(GET_SONGS);

  if (loading) return "Loading...";
  return (
    <>
      <h1>Song List</h1>
      {data.songs.map((song, id) => (
        <li key={id}>{song.title}</li>
      ))}
    </>
  );
};

export default SongList;
