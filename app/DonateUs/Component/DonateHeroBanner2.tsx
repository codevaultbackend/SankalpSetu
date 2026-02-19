import SmallCup from "../../svg-icons/icons/SmallCup";
import Drop from "../../svg-icons/icons/Drop";
import Ambulance from "../../svg-icons/icons/Ambulance";
import Backpack from "../../svg-icons/icons/Backpack";

export default function DonateHeroBanner2({
    open,
    setOpen,
}: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {

  const bannerIconRow = [
    {
      text: "Charity for Foods",
      icon: <SmallCup />,
    },
    {
      text: "Charity for Water",
      icon: <Drop />,
    },
    {
      text: "Charity for Education",
      icon: <Backpack />,
    },
    {
      text: "Charity for Medical",
      icon: <Ambulance />,
    },
  ];

  return (
    <section className="w-full bg-[#FFD84D] overflow-hidden">

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* ================= LEFT IMAGE ================= */}
        <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[520px] rounded-2xl overflow-hidden">

          <img
            src="/HeroBanner2.png"
            alt="Sankalp-Setu Donation"
            className="w-full h-full object-cover object-center"
          />

          {/* Decorative Shape */}
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#FFD84D] rounded-tl-[80px]"></div>
        </div>


        {/* ================= RIGHT CONTENT ================= */}
        <div className="space-y-6 text-gray-900">

          {/* Small Title */}
          <h4 className="uppercase tracking-widest !text-[18px] !font-semibold !text-[#094C3B] leading-[140%] tracking-[20%] mb-0">
            About Us
          </h4>

          {/* Main Heading */}
          <h2 className=" text-[#000000] sm:text-2xl lg:text-[28px] leading-[100%] font-[600] leading-tight">
            Committed to Compassion and Community
          </h2>

          {/* Description */}
          <p className="text-gray-800 leading-relaxed max-w-xl text-[15px] font-[400] text-[#333333] leading-[140%] tracking-[-2%]">
            At the heart of our organization is a deep commitment to compassion
            and community. We believe that every individual deserves respect,
            support, and the opportunity to thrive. Our mission is to provide
            inclusive services that cater to the diverse needs of people from
            all walks of life. Through our various programs, we strive to create
            lasting change by addressing issues such as hunger, homelessness,
            education, and healthcare access.
          </p>


          {/* Divider */}
          <div className="w-full h-[1px] bg-black/20 m-0"></div>


          {/* ================= ICON ROW ================= */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-1 pt-2">

            {bannerIconRow.map((item, index) => (
              <div
                key={index}
                className="flex items-center text-sm font-medium"
              >

                {/* Icon */}
                <div className="w-8 h-8   flex items-center justify-center  text-white rounded-full">
                  {item.icon}
                </div>

                {/* Text */}
                <span className="text-[#094C3B] text-[12px] font-[500] ">{item.text}</span>

              </div>
            ))}

          </div>


          {/* ================= BUTTON ================= */}
          <div className="pt-4">

            <button onClick={() => setOpen(true)} className="bg-green-900 text-white px-8 py-3 rounded-full font-semibold
                               hover:bg-green-800 transition !rounded-full">
              Donate Now
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}
