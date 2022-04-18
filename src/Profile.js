import React, { useState } from "react";

export default function Profile() {
  const [loggedIn, setLoggedIn] = useState(3);

  return (
    <div>
      {/* {loggedIn?<h1>Welcome Prashant singh</h1>:<h1>Welcome Guest</h1>} */}

      {/* OR */}

      {loggedIn === 1 ? (
        <h1>Welcome User 1</h1>
      ) : loggedIn === 2 ? (
        <h1>Welcome User 2</h1>
      ) : (
        <h1>Welcome User 3</h1>
      )}
    </div>
  );
}
