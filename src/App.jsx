import React, { useEffect, useState } from "react";
import MainSection from "./components/mainSection/MainSection";
import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";
import { getAccessToken, getCategories, getNewRelease } from "./App";

const App = () => {
  const [newRelease, setNewRelease] = useState(null);
  const [categories, setCategories] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    let token = sessionStorage.getItem("access_token");

    const fetchData = async () => {
      if (!token) {
        const {
          data: { access_token },
        } = await getAccessToken();
        token = access_token;
        sessionStorage.setItem("access_token", access_token);
      }

      const {
        data: { albums },
      } = await getNewRelease(token);
      const {
        data: { categories },
      } = await getCategories(token);

      setNewRelease(albums);
      setCategories(categories);
    };

    fetchData().catch((err) => {
      if (err.status === 401) {
        getAccessToken()
          .then(({ data: { access_token } }) => {
            sessionStorage.setItem("access_token", access_token);
          })
          .catch((error) => console.error(error));
        setRefresh((prev) => !prev);
      }
    });
  }, [refresh]);

  return newRelease && categories ? (
    <>
      <Navigation />
      <MainSection newRelease={newRelease} categories={categories} />
      <Footer />
    </>
  ) : (
    <div className="flex  justify-center items-center h-lvh bg-black">
      <p className="text-3xl text-white">Loading...</p>
    </div>
  );
};

export default App;
