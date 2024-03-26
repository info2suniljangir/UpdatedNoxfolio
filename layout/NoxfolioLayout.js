"use client";
import { noxfolioUtilits } from "@/utility";
import { useEffect, useState, createContext } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

export const UserContext = createContext();


async function getData() {
  const apiUrl =
    "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae";
  const res = await fetch(apiUrl);
  if (!res.ok) {
    throw new Error(res);
  }

  return res.json();
}


const NoxfolioLayout = ({
  children,
  header,
  footer,
  noFooter,
  onePageMenu,
}) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    noxfolioUtilits.animaiton();
  }, []);

  // if data is not available or loading
  // if (loading) return <p>Loading...</p>
  // if (!userData) return <p>No profile data</p>

  return (
    <div className="page-wrapper">
      {/* {!loading && ( */}
      <UserContext.Provider value={userData}>
        <Header header={header} onePageMenu={onePageMenu} />
        <SideBar />
        {children}
        {!noFooter && <Footer footer={footer} />}
      </UserContext.Provider>
      {/* )} */}
    </div>
  );
};
export default NoxfolioLayout;
