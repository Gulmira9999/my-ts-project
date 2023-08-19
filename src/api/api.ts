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
