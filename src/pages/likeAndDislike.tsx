import React from "react";

const likeAndDislike = () => {
  // Syntax: map((element, index, array) => {... return v})

  return (
    <article>
      <header>
        <h1>Introduction</h1>
        <h3>
          Using React 18, create a "likeDislike' component for news articles. The component should
          be the default export (use export default).
        </h3>
        <br />
        <h1>Requirements:</h1>
        <br />
        <h3>You are required to create Like and Dislike buttons following the guidelines below:</h3>
        <br />
        <h2>Like button</h2>
        <ol>
          <li>
            The component should reder a Like button:
            <br />
            <ul>
              <li>The button should have the "like-button' class.</li>
              <li>The initia/number of likes should be set to 100.</li>
              <li>
                The text displayed in the Like button should indicate the number of likes in the
                format Like|180.
              </li>
              <li>
                The number of likes should be wrapped in a "span" element with the className set to
                "likes-counter"
              </li>
            </ul>
          </li>
          <li>
            Clicking the Like button should
            <br />
            <ul>
              <li>Increase the number of displavedlikes by 1.</li>
              <li> Add the "liked" class to the Like button's button element.</li>
            </ul>
          </li>
          <li></li>
          <li></li>
        </ol>
      </header>

      <section></section>
    </article>
  );
};

export default likeAndDislike;
