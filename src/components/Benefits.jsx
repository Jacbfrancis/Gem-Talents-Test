import React from "react";
import Button from "./Button";

export default function Benefits() {
  return (
    <div className="bg-[#f8f8f8]">
      <div className="px-6 py-6 justify-between items-start gap-15 md:flex md:py-12 md:px-45">
        <div className="block w-full mb-8 md:hidden">
          <img
            className="md:h-[32rem]"
            src="/images/Rectangle 15.png"
            alt="dogfood_img"
          />
        </div>

        <div className="mb-4 md:w-1/2">
          <h2 className="text-center text-[1.5rem] font-bold mb-5 md:text-[2rem] md:text-left">
            Nutrition is the foundation for longer, healthier lives in dogs.
          </h2>
          <p className="font-light text-center mb-8 md:text-left">
            Invest in your dog's future with our scientifically formulated
            superfood-powered supplements. Give them the nutrition they deserve
            and watch them thrive with vitality, energy, and the joy of a
            longer, healthier life.
          </p>

          <div>
            <h4 className="text-[1rem] text-center font-bold mb-2 md:text-left">
              Key Points:
            </h4>

            <div className="flex justify-between items-center gap-6 mb-6">
              <h2 className="text-[#EE6F4B] text-[1rem] font-bold md:text-[1.7rem]">
                97%
              </h2>
              <p className="font-light text-[0.9rem] md:text-[1rem]">
                Dogs choose our dog food over leading brands because of its real
                functional ingredients and delicious flavor.
              </p>
            </div>

            <div className="flex justify-between items-center gap-6 mb-6">
              <h2 className="text-[#EE6F4B] text-[1rem] font-bold md:text-[1.7rem]">
                84%
              </h2>
              <p className="font-light text-[0.9rem] md:text-[1rem]">
                Our dog food provides superior nutrition and a patented
                probiotic for optimal nutrient absorption.
              </p>
            </div>

            <div className="flex justify-between items-center gap-6 mb-6">
              <h2 className="text-[#EE6F4B] text-[1rem] font-bold md:text-[1.7rem]">
                92%
              </h2>
              <p className="font-light">
                Our dog food's high protein and fat digestibility contribute to
                ideal stool quality.
              </p>
            </div>
          </div>

          <div className="w-[90%] m-auto md:w-auto">
            <Button>
              Give your furry friend the gift of wholesome nutrition
            </Button>
          </div>
        </div>
        <div className="hidden w-1/2 md:block">
          <img
            className="md:h-[32rem]"
            src="/images/Rectangle 15.png"
            alt="dogfood_img"
          />
        </div>
      </div>
    </div>
  );
}
