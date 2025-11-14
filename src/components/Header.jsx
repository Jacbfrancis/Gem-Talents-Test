import Button from "./Button";

export default function Header() {
  return (
    <div className="pt-10 px-6 mb-20 md:px-45 md:pt-15">
      <h1 className="text-[1.5rem] text-center font-bold mb-10 md:text-[2rem] md:mb-15">
        What makes us different <br className="hidden md:block" /> makes them
        stronger
      </h1>

      <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        <div className="flex flex-col justify-start items-start gap-10 md:gap-25">
          <div className="flex justify-start items-center">
            <span className="p-4">
              <img src="/public/images/food1.png" alt="food_icon" />
            </span>
            <div>
              <h2 className="font-semibold">Real Food</h2>
              <p className="font-extralight">
                Wholesome recipes for dogs with real meat and veggies.
              </p>
            </div>
          </div>

          <div className="flex justify-start tems-center">
            <span className="p-4">
              <img src="/public/images/pet-bowl1.png" alt="bowl_icon" />
            </span>

            <div>
              <h2 className="font-semibold">Premium Ingredient</h2>
              <p className="font-extralight">
                Elevating pet care with umatched safety and quality
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-start items-start px-15 md:px-0">
          <img src="/public/images/food-bowl.png" alt="foodbowl_img" />
        </div>

        <div className="flex flex-col justify-start items-start gap-10 md:gap-25">
          <div className="flex justify-start items-center">
            <span className="p-4">
              <img src="/public/images/pet-food1.png" alt="petfood_icon" />
            </span>

            <div>
              <h2 className="font-semibold">Made Fresh</h2>
              <p className="font-extralight">
                We prioritize maintaining the integrity of whole foods and
                nutrition.
              </p>
            </div>
          </div>
          <div className="flex justify-start tems-center">
            <span className="p-4">
              <img src="/public/images/vet1.png" alt="vet_icon" />
            </span>

            <div>
              <h2 className="font-semibold">Vet Developed</h2>
              <p className="font-extralight">
                We raise the bar for dog nutrition, surpassing industry
                expectations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] md:w-[35%] m-auto">
        <Button>Get your dog's healthy today!</Button>
        <div className="flex justify-start items-center gap-3 mt-2 lg:mt-4 lg:justify-center ">
          <img src="/images/secure.png" alt="secure_icon" />
          <p className="text-[0.6rem]">30 day money back guarntee</p>
          <span className="flex justify-start items-center w-[8%] md:w-auto">
            <img src="/public/images/paypal.png" alt="secure_icon" />
            <img src="/public/images/visa.png" alt="secure_icon" />
            <img src="/public/images/mastercard.png" alt="secure_icon" />
            <img src="/public/images/ipay.png" alt="secure_icon" />
            <img src="/public/images/googlepay.png" alt="secure_icon" />
          </span>
        </div>
      </div>
    </div>
  );
}
