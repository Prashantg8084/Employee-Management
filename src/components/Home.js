import React, { useEffect, useState } from "react";
import banner from "../assests/images/banners.png";
import "../assests/css/home.css";
import CircularProgress from '@mui/material/CircularProgress';
import CSkeleton from "./CSkeleton";


const Home = () => {
  const [employee, setEmployee] = useState([]);
  const [loadingButton, setLoadingButton] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  
  // useEffect(() => {
  //   setIsLoading(true);
  //   let apiUrl = "https://reqres.in/api/users?page="+pageNumber;
  //   fetch(apiUrl)
  //     .then((response) => response.json())
  //     .then((actualData) => {
  //       console.log(actualData.data);
  //       setTimeout(() => {
  //         setIsLoading(false);
  //         setPageNumber(pageNumber + 1);
  //         setEmployee([...employee, ...actualData.data]);
  //       }, 3000);
  //     });
  // }, []);

  const dataCall = () => {
    setIsLoading(true);
    setLoadingButton(false);
    setPageNumber(pageNumber + 1);
    let apiUrl = `https://reqres.in/api/users?page=${pageNumber}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData.data);
        setTimeout(() => {
          setIsLoading(false);
          setEmployee([...employee, ...actualData.data]);
        }, 3000);
      });
  };

  return (
    <>
      <div className="banner">
        <div className="section">
          <p>Welcome </p>
          <p>To</p>
          <h2>Employee</h2>
          <h1> Management</h1>
        </div>
      </div>
      {/* here comes the api section */}

      <div className="employees-data">
        {
          <button onClick={() => dataCall()}>
            Load Data
          </button>
        }
        {/* {isLoading && <p>Loading</p>} */}

        <h1>My Employees</h1>
        {/* <CSkeleton /> */}
        {/* {isLoading && <CircularProgress classsName="loading" color="secondary" />} */}

        {employee.length > 0 &&
          employee.map((items) => (
            <>
              <div key={items.id} className="employee">
                <div className="pic">
                  <img src={items.avatar} alt="df" />
                </div>
                <div className="info">
                  <h5>
                    Name :- {items.first_name} {items.last_name}
                  </h5>
                  <h5> Email :- {items.email}</h5>
                </div>
              </div>
            </>
          ))}

          {isLoading &&
            <>
            <CSkeleton />
            <CSkeleton />
            <CSkeleton />
            <CSkeleton />
            <CSkeleton />
            <CSkeleton />
            </>
          }
      </div>
    </>
  );
};

export default Home;
