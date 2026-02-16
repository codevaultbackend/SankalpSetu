import Arrow from "@/app/svg-icons/icons/Arrow";
import Dustbin from "@/app/svg-icons/icons/Dustbin";
import HandPick from "@/app/svg-icons/icons/HandPick";
import Humanity from "@/app/svg-icons/icons/Humanity";
import Oval from "@/app/svg-icons/icons/Oval";
import Pia from "@/app/svg-icons/icons/Pia";

export default function DanateHero() {
    return (
        <section className="w-full lg:min-h-[820px] min-h-auto bg-black text-white overflow-hidden relative">
            <div className=" absolute top-0 right-0 object-cover">
                <HandPick className="lg:h-[205px] lg:w-[235px] w-[134px] h-[134px]" />
            </div>

            {/* Main Container */}
            <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-[80px]">

                {/* ================= LEFT CONTENT ================= */}
                <div className="space-y-6 z-10">

                    {/* Logo */}
                    <h4 className="text-yellow-400 font-semibold tracking-wide absolute top-[40px]">
                        <Humanity />
                    </h4>

                    {/* Heading */}
                    <h1 className="lg:text-4xl text-2xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        <span className="flex items-end lg:text-[70px] text-[41px] font-[400] text-[#F8EBD7]"><div className=" !mt-4 leading-[100%]">Need <br /> to    Help</div>  <div className=""><Pia className="ml-[-34px] lg:h-[164px] lg:w-[144px] h-[124px] w-[114px]" /></div></span>
                        <span className="text-[#78C376] lg:text-[90px] text-[45px] sm:!mt-[14px] font-[400] leading-[100%]">sankalp-setu</span>
                    </h1>

                    {/* Description */}
                    <p className="text-[#FFFFFF] lg:text-[20px] text-[16px] font-[500] max-w-md leading-relaxed leading-[35px]">
                        We are responding with emergency assistance where needed and
                        supporting families who have lost their homes due to conflict.
                    </p>

                    {/* Button */}
                    <button className="bg-[#F8EBD7] w-[230px] text-[#000000] text-[20px]  py-3 rounded-full font-[500] hover:bg-gray-200 transition">
                        Donate
                    </button>
                </div>


                {/* ================= RIGHT IMAGE ================= */}
                <div className="relative flex justify-center items-center">

                    {/* Outer Circle */}
                    <div >

                        {/* Image */}
                        <div className=" w-full flex justify-center items-center">
                            {/* BIG GRADIENT CIRCLE */}
                            <div
                                className="
      relative
      w-[412px] h-[382px]
      max-[768px]:w-[312px] max-[768px]:h-[282px]
      rounded-full
      bg-linear-[to_bottom_right,#7BC17A,#BFA13A] z-40
     
    "
                            >
                                {/* CLOUD OVERLAY */}
                                <img
                                    src="/HeroSectioncomp2.png"
                                    alt="cloud"
                                    className="
        relative
        top-[70px]
        right-[20px]
        w-[643.1px]
        max-[768px]:top-[60px]
        max-[768px]:right-[10px]
        max-[768px]:w-[362px] 
        z-20
        pointer-events-none
      "
                                />

                    
                               
                            </div>
                        </div>



                    </div>

                    {/* Decorative Ring */}
                    <div className="absolute lg:-bottom-6 -bottom-18 lg:right-14 right-0  border-[14px] !border-0  rounded-full z-[99999999]">
                        <Dustbin className="absolute bottom-0 right-0" />
                        <Oval className="max-w-[768px]:h-[120px] max-w-[768px]:right-[-20px] max-w-[768px]:absolute max-w-[768px]:top-0" />
                    </div>

                </div>

            </div>


            {/* ================= ARROW DECORATION ================= */}
            <div className="hidden lg:flex absolute left-1/2 top-1/3 -translate-y-1/2 -translate-x-1/2 space-x-2">
                <Arrow className="w-[113px] object-cover h-[149px]" />
            </div>

        </section>
    );
}
