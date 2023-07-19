import React, { useEffect } from "react";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import axios from "axios";
import ListMovie from "../../Components/ListMovie/ListMovie";
import TabMovie from "../../Components/TabMovie/TabMovie";
const HomePage = () => {
  const getAllBanner = async () => {
    const res = await axios({
      method: "GET",
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwNyIsIkhldEhhblN0cmluZyI6IjE5LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMjk0NDAwMDAwMCIsIm5iZiI6MTY3OTg1MDAwMCwiZXhwIjoxNzAzMDkxNjAwfQ.28D2Nfp6Hy4C5u8pvZDIxH2pzlYoKIqgfsJLI_Dque4",
      },
    });
    // console.log(res);
  };
  useEffect(() => {
    {
      getAllBanner();
    }
  }, []);
  return (
    <div>
      <HomeBanner />
      {/* Danh sách phim  */}
      <ListMovie />
      <TabMovie />
    </div>
  );
};

export default HomePage;
