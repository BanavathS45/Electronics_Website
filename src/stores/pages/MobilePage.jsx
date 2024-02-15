import React, { useState } from "react";
import { mobileData } from "../data/mobiles";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import PageNation from "./PageNation";

const MobilePage = () => {
  const [selectProduct, setSelectProduct] = useState([]);
  //  pageNation
  const [currentPage, setCurrentPage] = useState(1);
  const recrodsPage = 4;
  const lastIndex = currentPage * recrodsPage;
  const firstIndex = lastIndex - recrodsPage;
  const recrods = mobileData.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(mobileData.length / recrodsPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);
  // fitter
  const companyHolder = (selectpr) => {
    if (selectProduct.includes(selectpr)) {
      setSelectProduct(selectProduct.filter((item) => item !== selectpr));
    } else {
      setSelectProduct([...selectProduct, selectpr]);
    }
  };
  const filterProduct =
    selectProduct.length === 0
      ? recrods
      : recrods.filter((fiData) => selectProduct.includes(fiData.company));
  //pagenation change
  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  function changeCpage(id) {
    setCurrentPage(id);
  }
  const nextPage = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="pageSection">
        <div className="row">
          <div className="col-2 ">
            <div className="filtersC mx-2">
              <h3>Filter</h3>
              {recrods.map((phone) => {
                return (
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        className="mx-1"
                        checked={selectProduct.includes(phone.company)}
                        onChange={() => companyHolder(phone.company)}
                      />
                      {phone.company}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col  pageCard ">
            {filterProduct.map((item) => {
              return (
                <>
                  <div className="pageImg" key={item.id}>
                    <Link to={`/mobiles/${item.id}`}>
                      <img src={item.image} alt="" />
                    </Link>
                    <div className="proDetails text-center">
                      <h6>
                        {item.company},{item.model}
                      </h6>
                      <p>&#8377;{item.price}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      {/* <PageNation data={mobileData}/> */}
      {/* <PageNation data1={mobileData}/> */}
      <nav>
        <ul className="pagination mt-5 mb-5">
          <li className="page-item  ">
            <a className="page-link" href="#" onClick={prePage}>
              Previous
            </a>
          </li>

          {numbers.map((n, i) => {
            <li
              className={`page-item ${currentPage === n ? "active" : " "}`}
              key={i}
            >
              <a href="#" className="page-link" onClick={() => changeCpage(n)}>
                {n}
              </a>
            </li>;
          })}

          <li className="page-item">
            <a className="page-link" href="#" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
      {/* <Footer/> */}
    </div>
  );
};

export default MobilePage;
