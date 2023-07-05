import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/60">
      <div className="h-screen  bg-gradient-to-r from-black/30 via-black/50 to-black/60 py-32 text-center xl:text-left flex items-center justify-center">
        <div className="container text-center flex flex-col items-center justify-center">
          <h2 className="h2 text-4xl">
            Reviews by <span className="text-accent">Loved</span> ones
          </h2>
          <div className="flex justify-between mt-10 gap-x-5">
            <div className="hidden xl:flex flex-col items-center justify-center bg-white h-[475px] w-[495px] text-center rounded-lg">
              <p className="text-black p text-sm">
                Writing is a mesmerizing tapestry of words, skillfully woven
                together to create a captivating symphony of emotions that
                effortlessly embraces the power of love, resonating deeply
                within the reader&apos;s soul and leaving an indelible
                impression that lingers long after the final page is turned.
              </p>
            </div>
            <div className="flex flex-col gap-y-5 xl:flex-row xl:gap-x-4  xl:gap-y-0 w-full ">
              <div className="container mx-auto bg-accent flex flex-col max-h-[475px] p-20 justify-evenly gap-y-5 rounded-lg">
                <div className="profile flex flex-col items-center justify-center gap-y-2">
                  <Image
                    src="/profile-pic1.png"
                    width={80}
                    height={80}
                    alt=""
                    className="rounded-full w-[80px] h-[80px] object-cover"
                  />
                  <h4 className="h4 text-[16px]">Annie Marrie</h4>
                </div>
                <div className="content">
                  <p className="text-sm font-thin text-white">
                    “ We provide IT staffing services that involve sourcing,
                    managing, and deploying highly skilled professionals in the
                    field of information technology to fulfill the staffing
                    requirements of your organization.”
                  </p>
                </div>
              </div>

              <div className="container mx-auto bg-accent flex flex-col max-h-[475px] p-20 justify-evenly gap-y-5 rounded-lg">
                <div className="profile flex flex-col items-center justify-center gap-y-2">
                  <Image
                    src="/profile-pic1.png"
                    width={80}
                    height={80}
                    alt=""
                    className="rounded-full w-[80px] h-[80px] object-cover"
                  />
                  <h4 className="h4 text-[16px]">Annie Marrie</h4>
                </div>
                <div className="content">
                  <p className="text-sm font-thin text-white">
                    “ We provide IT staffing services that involve sourcing,
                    managing, and deploying highly skilled professionals in the
                    field of information technology to fulfill the staffing
                    requirements of your organization.”
                  </p>
                </div>
              </div>

              <div className="container mx-auto bg-accent flex flex-col max-h-[475px] p-20 justify-evenly gap-y-5 rounded-lg">
                <div className="profile flex flex-col items-center justify-center gap-y-2">
                  <Image
                    src="/profile-pic1.png"
                    width={80}
                    height={80}
                    alt=""
                    className="rounded-full w-[80px] h-[80px] object-cover"
                  />
                  <h4 className="h4 text-[16px]">Annie Marrie</h4>
                </div>
                <div className="content">
                  <p className="text-sm font-thin text-white">
                    “ We provide IT staffing services that involve sourcing,
                    managing, and deploying highly skilled professionals in the
                    field of information technology to fulfill the staffing
                    requirements of your organization.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
