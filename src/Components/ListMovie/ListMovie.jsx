import React, { useEffect, useState } from "react";
import { movieServ } from "../../services/movieServices";
import "./listmovie.scss";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import {
  set_loading_end,
  set_loading_started,
} from "../../redux/slice/loadingSlice";
const ListMovie = () => {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(set_loading_started());
    movieServ
      .getAllMovie()
      .then((result) => {
        // console.log(result);
        setMovies(result.data.content);
        dispatch(set_loading_end());
      })
      .catch((err) => {
        console.log(err);
        dispatch(set_loading_end());
      });
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <h2 className="text-3xl font-bold">Danh Sách Phim</h2>
      <div className="grid grid-cols-4 gap-5">
        {/*movie_item */}
        {movies.map((item, index) => {
          return (
            <div className="movie_item" key={index}>
              <img
                src={item.hinhAnh}
                alt=""
                className="h-80 w-full object-cover"
              />
              <div className="text my-3">
                <h3 className="font-bold text-xl ">
                  <span className="text-white py-1 px-2 bg-red-700 rounded-md mr-4">
                    C18
                  </span>
                  {item.tenPhim}
                </h3>
                <p className="line-clamp-2 my-2">{item.moTa}</p>
                <NavLink
                  className="w-full inline-block"
                  to={`/detail/${item.maPhim}`}
                >
                  <Button type="primary" danger className="w-full text-lg h-10">
                    {" "}
                    Xem Ngay
                  </Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListMovie;
