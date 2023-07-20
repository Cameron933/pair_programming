import React from "react";

const map = () => {
  // Syntax: map((element, index, array) => {... return v})
  // Example 1: Calling a function on each item in an array
  const numbers = [1, 4, 9];
  const roots = numbers.map((num) => Math.sqrt(num));

  // Example 2: Converting a string to an array
  const myName = "cat";
  const nameArray = myName.split("");
  const newName = nameArray.map((l) => `${l}${l}`);
  const joinedNewName = newName.join("");
  console.log(joinedNewName);

  // Example 3: Rendering lists in JS libraries
  const cats = ["elon", "jeff", "john", "ceci", "bill"];

  // Example 4: Reformatting Array Obj
  const names = [
    { name: "kitty", likes: "coding" },
    { name: "jay", likes: "gaming" },
    { name: "elon", likes: "tesla" },
  ];
  const nameByLikes = names.map(({ name, likes }) => ({
    [name]: likes,
    noOfLettersInName: name.length,
  }));
  console.log(nameByLikes);
  return (
    <article>
      <header>
        <h1>JavaScript .map() function</h1>
        <br />
        <h3>
          The map() method creates a new array populated with the results of calling a provided
          function on every element in the calling array.
        </h3>
        <ul>
          <li>map() creates a new array from calling a function for every array element.</li>
          <li>map() calls a function once for each element in array.</li>
          <li>map() does not execute the function for empty elements.</li>
          <li>map() does not change the original array.</li>
        </ul>
        <br />
        <h3>When NOT to use a map() function</h3>
        <ul>
          <li>-- you are not using the array it returns; and/or</li>
          <li>-- you are not returning a value from the callback</li>
        </ul>
      </header>

      <section>
        <ul>
          {cats.map((name, i) => (
            <li key={i}>
              The #{i} name in the list is {name}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default map;
