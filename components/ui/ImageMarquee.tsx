import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

function ImageMarquee() {
  return (
    <>
      <div className="relative overflow-hidden">
        <Marquee
          autoFill={true}
          pauseOnHover={true}
          // gradient={true}
          // gradientWidth={20}
          // gradientColor="#DDE0E4"
        >
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <Image
              src={`/images/image${num}.png`}
              height={201}
              width={201}
              alt={`image${num}`}
              key={num}
            />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-white dark:from-slate-900 to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-white dark:from-slate-900 to-transparent" />
      </div>
    </>
  );
}

export default ImageMarquee;
