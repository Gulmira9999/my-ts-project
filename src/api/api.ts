const users = [{ username: "username", password: "password" }];

export const signin = (username: string, password: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      resolve("token");
    } else {
      reject(new Error("Inccorect username and password!"));
    }
  });
};

export const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    throw new Error("Error with fetch");
  }
};

export const getPostDetail = async (postId) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  console.log(response);

  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    throw new Error("Error with fetch");
  }
};
