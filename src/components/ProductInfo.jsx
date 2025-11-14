export default function ProductInfo() {
  return (
    <div className="px-6 py-6 mb-10 md:py-12 md:px-45">
      <div className="justify-between items-center mb-15 gap-15 md:mb-25 md:flex">
        <img
          className="mb-[1.5rem] md:mb-auto md:w-1/2"
          src="/images/Rectangle 8.png"
          alt="dog-eating_img"
        />

        <div className="md:w-1/2">
          <h2 className="font-bold text-center text-[1.5rem] mb-5 md:text-[2rem] md:text-left">
            Improve overall gastrointestinal health for better nutrient
            absorption
          </h2>
          <p className="font-light text-center md:text-left">
            Through rigorous scientific studies and consultations with
            veterinarians, we have created a breakthrough formula exclusively
            tailored to combat the health challenges prevalent in dogs. A
            staggering 91% of our customers have reported significant
            improvements in their dogs' health after incorporating our product
            into their diet.
          </p>
        </div>
      </div>

      <div className="justify-between items-center gap-15 md:flex">
        <div className="mb-[1.5rem] md:w-1/2">
          <h2 className="font-bold text-center text-[1.5rem] mb-5 md:text-[2rem] md:text-left">
            Prebiotics nourish the beneficial gut bacteria, supporting digestive
            health
          </h2>
          <p className="font-light text-center md:text-left">
            Our dog food formula contains carefully selected prebiotics that
            work in harmony with the gut microbiota, providing the necessary
            nutrients for the growth and maintenance of beneficial bacteria,
            ultimately supporting digestive health.
          </p>
        </div>

        <img
          className="md:w-1/2"
          src="/images/Rectangle 7.png"
          alt="dog-eating_img"
        />
      </div>
    </div>
  );
}
