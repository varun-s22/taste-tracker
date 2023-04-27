const loginHandler = async (
  username: string | undefined,
  password: string | undefined
) => {
  if (!username || !password) {
    return { message: "Something went wrong" };
  }
  const params = new URLSearchParams({
    view: "Grid view",
    filterByFormula: `AND(username="${username}",password="${password}")`,
  });
  const response = await fetch(
    `https://api.airtable.com/v0/${process.env.REACT_APP_LOGIN_ID}/credenitals?` +
      params,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
      },
    }
  );
  try {
    const data = await response.json();
    return data.records?.length > 0
      ? data.records[0]
      : { message: "Incorrect credentials" };
  } catch (error) {
    console.log(error);
  }
};

const logoutHandler = async () => {
  if (localStorage.getItem("username")) {
    localStorage.removeItem("username");
  }
};
export { loginHandler, logoutHandler };
