import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_SONG } from "../queries";

export default () => {
  const [title, setTitle] = useState("");
  const [addSong] = useMutation(ADD_SONG);

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = await addSong({ variables: { title } });
    console.log(data);
  };

  return (
    <div className="container">
      <h3>Create a new Song</h3>
      <form onSubmit={onSubmit}>
        <label>Song title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </div>
  );
};
