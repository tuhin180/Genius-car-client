import React from "react";

import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div>
      <section className="">
        <div className=" flex flex-col justify-center p-2 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className=" relative w-1/2 mt-8">
            <img
              src={person}
              alt=""
              className=" w-4/5  h-4/5 rounded-lg shadow-2xl"
            />
            <img
              src={parts}
              alt=""
              className=" w-3/5  absolute right-5 -bottom-4 border-8  shadow-2xl"
            />
          </div>
          <div className="flex flex-col  p-6  rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h6 className="text-red-400 font-semibold">About us</h6>
            <p className="text-4xl  font-bold">
              We are qualified <br /> & of experience <br /> in this field
            </p>
            <div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <p>
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable.
              </p>
              <button className="btn btn-error mt-2">Get More Ifo</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
