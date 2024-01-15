export const logOut = async () => {
  const res = await fetch("http://localhost:3000/api/users/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
