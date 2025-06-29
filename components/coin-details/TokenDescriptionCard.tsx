import React from "react";

function TokenDescriptionCard({
  title,
  description,
  website,
}: {
  title: string;
  description: string;
  website: string;
}) {
  const isLong = description.length > 200;
  const shownText = isLong ? description.slice(0, 200).trim() : description;

  return (
    <>
      <div className="max-w-7xl mx-auto px-10 my-6">
        <div className="relative bg-gradient-to-br from-amber-50 via-white to-lime-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-3xl shadow-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-l from-green-400 via-blue-400 to-blue-600 dark:from-teal-400 dark:via-sky-500 dark:to-blue-700 rounded-t-3xl" />
          <div className="relative z-10 px-8 py-8 sm:px-12 sm:py-10 flex flex-col items-center animate-fadeIn">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-4xl">📝</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 dark:text-slate-100 tracking-tight font-sora drop-shadow">
                {title}
              </h2>
            </div>
            <p className="text-gray-600 dark:text-slate-300 text-lg sm:text-xl text-center leading-relaxed font-inter">
              {shownText}
              {isLong && (
                <>
                  ...{" "}
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sky-500 dark:text-teal-400 font-semibold hover:text-sky-700 dark:hover:text-teal-300 hover:underline underline-offset-4 transition"
                  >
                    Read more
                  </a>
                </>
              )}{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TokenDescriptionCard;
