import React from "react";
import Markdown from "react-markdown";
import Loader from "./Loader";

const AIResults = ({ result, isLoading }) => {
  return (
    <div className="card bg-gray-800 p-4 w-full">
      <div className="card-body">
        {isLoading ? (
          <Loader />
        ) : (
          <Markdown className="text-justify text-lg text-white">
            {result ? result : "Hasil kamu bakal ditampilkan di sini!"}
          </Markdown>
        )}
      </div>
    </div>
  );
};

export default AIResults;
