import React, { useState } from "react";

type LikeStatus = "liked" | "disliked" | null;

const Like = () => {
  const [status, setStatus] = useState<LikeStatus>(null);
  const [statusCounter, setStatusCounter] = useState({
    liked: 100,
    disliked: 25,
  });
  const onStatusChange = (_status: LikeStatus) => {
    if (_status === "liked")
      setStatusCounter((prev) => ({
        liked: status === _status ? prev.liked - 1 : prev.liked + 1,
        disliked: status === "disliked" ? prev.disliked - 1 : prev.disliked,
      }));

    if (_status === "disliked")
      setStatusCounter((prev) => ({
        liked: status === "liked" ? prev.liked - 1 : prev.liked,
        disliked: status === _status ? prev.disliked - 1 : prev.disliked + 1,
      }));

    setStatus((prev) => (prev !== _status ? _status : null));
  };

  return (
    <div>
      <h1>{status ?? "null"}</h1>
      <button onClick={() => onStatusChange("liked")}>{`Like | ${statusCounter.liked}`}</button>
      <button
        onClick={() => onStatusChange("disliked")}
      >{`Dislike | ${statusCounter.liked}`}</button>
    </div>
  );
};

export default Like;
