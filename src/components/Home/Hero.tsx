import Image from "next/image";
import React from 'react';
import { BsSearch } from "react-icons/bs";
import HeroBg from "../../assets/images/hero.jpg";

const Hero = () => {

  return (
    <section className="hero relative">
      <div className="container flex flex-col items-center  md:flex-row ">
        <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
          <h1 className="mb-4">
            Learn more and make success with <span className="text-royal-blue">ACADEMIST</span>
          </h1>
          <p className="mb-8 text-2xl leading-relaxed text-left text-blueGray-600 ">
            Pick from over <strong>100,000</strong> online video courses with
            new additions published every month.
          </p>
          <div className="flex shadow justify-center flex-row w-full">
            <div className="flex w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end">
              <div className="relative flex-grow w-full lg:mb-0 sm:mb-0  mb-3">
                <input
                  type="text"
                  placeholder="Search for new course..."
                  id="email"
                  name="search"
                  className="font-1 text-lg w-full bg-gray-100 bg-opacity-50 h-14  border border-gray-300 focus:border-royal-blue focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="text-white h-full lg:w-auto md:w-auto lg:block md:block w-full flex justify-center align-middle text-center bg-royal-blue border-0 py-2 px-8 focus:outline-none hover:bg-chateau-green transition-all text-2xl  text-lg">
                <BsSearch />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2 hero__video relative">
          <Image
            className="object-cover object-center rounded-lg"
            src={HeroBg}
          />
          
        </div>
      </div>
    </section>
  );
};
export default Hero;