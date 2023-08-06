import React, { useState } from "react";

type LikeStatus = "liked" | "disliked" | null;

const Like = () => {
  const [status, setStatus] = useState<LikeStatus>(null);
  const [statusCounter, setStatusCounter] = useState({
    liked: 100,
    dislike: 25,
  });
  // Syntax: map((element, index, array) => {... return v})

  return (
    <article>
      <h1>{status ?? "null"}</h1>
    </article>
  );
};

export default Like;
