import React, { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useMenu/useAxiosSecure";
import useCart from "../../../hooks/useMenu/useCart";

const Foodcard = ({ item }) => {
  const { name, recipe, category, image, price, _id } = item;
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const [,refetch] = useCart()

  const axiosSecure = useAxiosSecure();

  const handleAddToCart = (food) => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} Added to the cart`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch() // Refresh the cart after adding item to it
      });
    } else {
      Swal.fire({
        title: "Please Login",
        text: "You won't be able to add in cart without login!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signin", { state: { from: location } });
        }
      });
    }
    // Add to cart logic here
    console.log(food);
  };
  return (
    <div className="bg-gray-200 relative">
      <img className="w-full" src={image} alt="" />
      <p className=" absolute right-4 top-4  bg-slate-900 text-white px-2 rounded">
        ${price}
      </p>
      <div className="text-center p-4">
        <h3 className="text2xl font-semibold">{name}</h3>
        <p>{recipe}</p>
        <button
          onClick={() => handleAddToCart(item)}
          className="btn btn-outline border-0 border-b-4 border-b-black bg-lime-200 hover:bg-green-400 text-center my-2"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Foodcard;
