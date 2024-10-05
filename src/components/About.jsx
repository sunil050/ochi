import React from "react";

function About() {
  return (
      <div  data-scroll-section
      data-scroll
      data-scroll-offset="-100%, 150%"
      data-scroll-speed="2"
      data-scroll-position="top" className="w-full h-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
        <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>
          Ouchi is a strategic partner for fast-growing tech businesses that
          need to raise funds, sell products, explain complex ideas, and hire
          greate people.
        </h1>
        <div className="grid gap-y-6 md:grid-cols-12 py-[15px] border-t-[1px] pt-10 mt-20 border-[#a4b661] mb-[60px] md:mb-[90px] text-[22px] font-['Neue_Montreal']">
          <div className="md:col-span-4 lg:col-span-6 reset-last">
            <p>What you can expect:</p>
          </div>
          <div className="md:col-span-4 lg:col-span-4">
            <div className="w-[20vw] justify-items-start">
              <p>
                We create tailored presentations to help you persuade your
                colleagues, clients, or investors. Whether it’s live or digital,
                delivered for one or a hundred people.{" "}
              </p>
              <p className="pt-10">
                We believe the mix of strategy and design (with a bit of coffee)
                is what makes your message clear, convincing, and captivating.
              </p>
            </div>
          </div>
          <div className=" md:items-end md:justify-start md:flex laptop:justify-start">
            <div>
              <p className="mb-15">S:</p>
              <ul className="social-list leading-loose social-list--default">
                <li className="social-list__item">
                  <a
                    className="social-list__link link link--underline"
                    href=""
                  >
                    Instagram{" "}
                  </a>
                </li>
                <li className="social-list__item">
                  <a
                    className="social-list__link link link--underline"
                    href=""
                  >
                    Behance{" "}
                  </a>
                </li>
                <li className="social-list__item">
                  <a
                    className="social-list__link link link--underline"
                    href=""
                  >
                    Facebook{" "}
                  </a>
                </li>
                <li className="social-list__item">
                  <a
                    className="social-list__link link link--underline"
                    href=""
                  >
                    Linkedin{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a4b661]">
          <div className="w-1/2">
            <h1 className="text-7xl">Our Approach:</h1>
            <button className="flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white">
              Read More
              <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
            </button>
          </div>
          <div className="w-1/2 h-[65vh] rounded-3xl bg-[#9bae57] overflow-hidden">
            <img
              className="w-full h-full bg-cover "
              src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
              alt=""
            ></img>
          </div>
        </div>
      </div>
  );
}

export default About;
