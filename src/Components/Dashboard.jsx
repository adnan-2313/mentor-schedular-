import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
function App() {
  const [dishes, setDishes] = useState([]);
  const [error, setError] = useState(null);
  const [toggleStatus, setToggleStatus] = useState(true);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await fetch("http://localhost:5000/dishes");
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        const data = await response.json();
        setDishes(data);
      } catch (error) {
        setError(error.toString());
      }
    };

    fetchDishes();
  }, []);

  const toggleDishStatus = async (dishId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/dishes/${dishId}/toggle`,
        {
          method: "POST",
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const data = await response.json();
      setDishes((prevDishes) =>
        prevDishes.map((dish) =>
          dish.dishId === dishId
            ? { ...dish, isPublished: data.newStatus }
            : dish
        )
      );
    } catch (error) {
      setError(error.toString());
    }
  };
  const handleClick = (dishId) => {
    toggleDishStatus(dishId);
    setToggleStatus(!toggleStatus);
  };
  
  if(dishes.length === 0) return <Shimmer/> 
  return (
    <div className="w-[80%] p-[2rem_4rem] flex justify-center bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200   ">
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="flex w-full flex-wrap gap-[20px]  ">
        {dishes.map((dish) => (
          <div
            key={dish.dishId}
            className="flex flex-col mb-[1rem] items-center "
          >
            <img
              className="shadow-xl absolute w-[10rem] rounded-[50%] h-[10rem]"
              src={dish.imageUrl}
              alt={dish.dishName}
              width="100"
            />
            <div className="flex flex-col mt-[5rem] bg-[#fcfcfc] rounded-xl pb-[3rem] w-[18rem] items-center shadow-lg">
              <div className="mt-[5rem] m-[10px] w-[80%] flex flex-col justify-center items-center text-center">
                <h1 className="font-bold text-[23px]">{dish.dishName}</h1>
                <p className="font-semibold text-[15px]">{dish.isPublished ? "Published" : "Unpublished"}</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Saepe, tempora?
                </p>
              </div>
              <button
                className="bg-[#ff7000] rounded-[20px] text-white shadow-lg p-[8px_25px]"
                onClick={() => handleClick(dish.dishId)}
              >
                {dish.isPublished ? "Unpublish" : "Publish"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default App;
