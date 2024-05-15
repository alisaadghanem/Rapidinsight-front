const { useState, useEffect } = require("react");


const UseToken = (user) => {
  const [token, setToken] = useState();
  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    const email = user?.user?.email;
    const postData = async () => {
      if (email) {
        const userName = await user?.user?.displayName;
        const newUser = { userName: userName, email: email };

        await fetch(url, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("accessToken", data.token);

            setToken(data);
            setWaiting(false);
          });
      }
    };

    postData();
  }, [user]);

  return [token, waiting];
};



export {
  UseToken,
};
