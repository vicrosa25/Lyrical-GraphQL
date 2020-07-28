import { gql } from "@apollo/client";

export const GET_SONGS = gql`
  query {
    songs {
      id
      title
    }
  }
`;

export const ADD_SONG = gql`
  mutation ADD_SONG($title: String) {
    song: addSong(title: $title) {
      id
      title
    }
  }
`;
