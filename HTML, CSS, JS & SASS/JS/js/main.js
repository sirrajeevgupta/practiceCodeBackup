//      ||  ASYNC/AWAIT/FETCH

// fetching data through URL

const requestData = async (firstName, lastName) => {
  const response = await fetch(
    `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
  );
  const jsonResponse = await response.json();
  console.log(jsonResponse.value.joke);
};
requestData("Rajeev", "Gupta");

// 2nd parameter of fetch is alwayts an object
/*
[[
const joke = {
  id: "B5h311TS7h",
  joke: "I couldn't figure out how the seat belt worked. Then it just clicked.",
};
const postData = async (parameter) => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "aplication/json",
    },
    body: JSON.stringify(parameter),
  });
  const jsonResponse = await response.json();
  console.log(jsonResponse);
};
postData(joke);
]]

[[
const getDadJoke = async () => {
  const response = await fetch("https://icanhazdadJoke.com/", {
    method: "GET",
    headers: {
      accept: "application/json",
      //* accept: "text/plain",
    },
  });
  const jsonJokeDate = await response.json();
  // const jsonJokeDate = await response.text();
  console.log(jsonJokeDate);
};
getDadJoke();
]]

[[
const getAllUserEmails = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  console.log(jsonUserData);
  const onlyUserMails = jsonUserData.map((user) => {
    return user.email;
  });
  console.log(onlyUserMails);
  postToWebpage(onlyUserMails);
};
const postToWebpage = (parameter) => {
  console.log(parameter);
};
getAllUserEmails();
]] */
