import React from "react";

type PaginationButtonsProps = {
  currentPage: number;
  onPageChange: (page: number) => void;
};

function PaginationButtons({
  currentPage,
  onPageChange,
}: PaginationButtonsProps) {
  const pages = [1, 2, 3, 4];

  function handleClick(page: number) {
    onPageChange(page);
  }

  return (
    <>
      <div className="flex justify-center my-8 space-x-4">
        {pages.map((page: number) => (
          <button
            key={page}
            onClick={() => {
              handleClick(page);
            }}
            className={`w-10 h-10 rounded-full flex items-center cursor-pointer justify-center text-md font-bold transition-colors duration-200 ${
              currentPage === page
                ? "bg-black text-white"
                : "text-black hover:bg-gray-200"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </>
  );
}

export default PaginationButtons;
