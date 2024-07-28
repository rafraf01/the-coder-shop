import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="fixed top-0 z-[100] h-dvh w-full bg-white">
      <div className="grid-cols-auto grid h-full place-items-center content-center justify-center gap-2 text-center font-urbanist">
        <h1 className="text-9xl font-bold text-slate-800">404</h1>
        <p className="text-xl font-bold text-slate-900">Oops! Page not found</p>
        <p className="text-2xl">
          Sorry, the page you're looking for could not be found.
        </p>
        <Link
          to="/"
          className="mt-5 w-44 rounded-full border-2 border-slate-400 bg-slate-800 p-2 text-white hover:bg-slate-600"
        >
          go back home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
