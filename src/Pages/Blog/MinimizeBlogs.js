import React from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const MinimizeBlogs = ({ blog }) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => navigate(`/blog-details/${blog.id}`)}
        className="flex flex-col lg:flex-row px-5 lg:px-10 mb-10 cursor-pointer"
      >
        <img className="w-2/4" src={blog.img} alt="" />
        <div className="ml-5 mt-3 lg:mt-16">
          <h2 className="font-xl mb-3 font-bold">{blog.tittle}</h2>
          <h2 className="mb-3 font-medium text-gray-500 text-sm">
            Posted By Admin 22 Apr {new Date().getFullYear()}
          </h2>
          <p className="text-justify mt-5 text-gray-500">
            {blog.description.slice(0, 149)}
          </p>
          <div className="mt-5">
            <button className=" py-2 overflow-hidden  border  transition-all border-1 border-secondary rounded-sm hover:bg-slate-200 text-secondary font-medium px-10">
              Reed More
            </button>
          </div>
          <div className="icons flex space-x-5 mt-10">
            <Link
              className="text-2xl rounded-full hover:bg-primary text-white p-2  shadow-md bg-secondary"
              to="/"
            >
              {" "}
              <AiFillFacebook></AiFillFacebook>{" "}
            </Link>
            <Link
              className="text-2xl rounded-full hover:bg-primary text-white p-2  shadow-md bg-secondary"
              to="/"
            >
              {" "}
              <AiFillLinkedin></AiFillLinkedin>{" "}
            </Link>
            <Link
              className="text-2xl rounded-full hover:bg-primary text-white p-2  shadow-md bg-secondary"
              to="/"
            >
              {" "}
              <AiFillInstagram></AiFillInstagram>{" "}
            </Link>
            <Link
              className="text-2xl rounded-full hover:bg-primary text-white p-2  shadow-md bg-secondary"
              to="/"
            >
              {" "}
              <AiFillTwitterSquare></AiFillTwitterSquare>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MinimizeBlogs;
