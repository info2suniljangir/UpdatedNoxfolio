"use client";
import { noxfolioUtilits } from "@/utility";
import { useEffect, useState, createContext } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";
import { getData } from "@/data/data";

export const UserContext = createContext();

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
  if (loading) return <p>Loading...</p>
  if (!userData) return <p>No profile data</p>

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
