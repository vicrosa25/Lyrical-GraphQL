import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_SONGS = gql`
  query {
    songs {
      id
      title
    }
  }
`;

export default function SongList() {
  const { loading, error, data } = useQuery(GET_SONGS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <ul className="collection">
      {data.songs.map((song, id) => (
        <li className="collection-item" key={id}>
          {song.title}
        </li>
      ))}
    </ul>
  );
}
