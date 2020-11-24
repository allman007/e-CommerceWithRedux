import React, { useState } from "react";
import Directory from "../../components/directory/directory";
import "./homepage.styles.scss";

const HomePage = () => {
  const [loading, setLoading] = useState();

  setTimeout(() => {
    setLoading({
      loading,
    });
  }, 2000);

  return (
    <div className="homepage">
      {!loading ? (
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <Directory />
      )}
    </div>
  );
};

export default HomePage;
