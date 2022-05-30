import React from "react";
import p from "./sa.mp4";

const About = () => {
  return (
    <div>
      <div>
        <div
          className="relative object-center overflow-hidden bg-cover "
          style={{
            backgroundPosition: "50%",
            backgroundImage:
              'url("https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80")',
            height: 350,
          }}
        ></div>
      </div>
      <div className="relative">
        <div
          className="absolute bottom-0 left-0 right-0 w-full overflow-hidden "
          style={{ height: 350, backgroundColor: "rgba(0, 0, 0, 0.35)" }}
        >
          <div className="flex items-center justify-center h-full">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="relative mt-0 mb-6 text-4xl font-bold top-20 lg:text-7xl md:text-5xl">
                About us
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-5 px-5 py-5 mx-5 my-5 lg:flex-row md:flex-row">
        <div className="w-full bg-white h-96">
          <div className="h-full">
            <video loop autoPlay muted>
              <source src={p} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="w-full mx-5 bg-white h-96">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
      </div>
    </div>
  );
};

export default About;
