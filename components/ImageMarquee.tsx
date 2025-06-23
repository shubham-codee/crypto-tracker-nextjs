import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

function ImageMarquee() {
  return (
    <>
          <Marquee autoFill={true} pauseOnHover={true} gradient={true} gradientWidth={50} gradientColor="#DDE0E4">
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
    </>
  );
}

export default ImageMarquee;
