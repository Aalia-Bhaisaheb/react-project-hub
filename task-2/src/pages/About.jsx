import React from 'react'
import AboutSection from '../components/About'

const About = () => {
  return (
    <div className="pt-[72px] md:pt-[80px] font-sans overflow-hidden">

{/* PURPLE HEADER */}
      <div className="bg-[#2b2580] text-center relative">
        <div className="pt-5 pb-8">
          <h1 className="text-white font-bold text-[20px] sm:text-[24px]">
            About Us
          </h1>
        </div>

  {/* WAVE SHAPE */}
      <svg
      className="absolute bottom-0 left-0 w-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 60"
      fill="none"
      >
      <path
      fill="#007753"
      d="M0,32L120,34C240,36,480,40,720,40C960,40,1200,36,1320,34L1440,32V60H1320C1200,60,960,60,720,60C480,60,240,60,120,60H0Z"
      />
      </svg>
      </div>
{/* GREEN BREADCRUMB */}
    <div className="bg-[#007753] py-2 relative z-10">
      <div className="flex items-center justify-center gap-2 text-[10px] text-white">
        <a
          href="/"
          className="hover:opacity-80 transition-opacity"
        >
        Home
        </a>
        <span>›</span>
        <span>About Us</span>
    </div>
  </div>
  <AboutSection/>
  <section className="bg-white py-16 sm:py-20 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 flex justify-center">
      <h2 className="text-[24px] sm:text-[32px] font-bold text-[#2b2580] text-right lg:w-[52%]">
        Company Details
      </h2>
    </div>
    <div className="max-w-7xl mx-auto">
  <div className="relative flex flex-col lg:flex-row items-stretch overflow-visible">

    {/* IMAGE */}
    <div className="w-full lg:w-[52%] h-[260px] sm:h-[420px] lg:h-auto">
      <img
        src="/src/assets/images/c_details.png"
        alt="Industrial facility"
        className="w-full h-full object-cover"
      />
    </div>

    {/* OVERLAPPING CARD */}
    <div className="w-full lg:w-[52%] bg-[#EAE7FF] relative lg:-ml-20 lg:mt-10 z-20 shadow-2xl">

      <div className="px-8 sm:px-10 py-8 flex flex-col gap-5 text-[13px] sm:text-[13.5px] text-gray-700">

        <p>
          <strong className="text-gray-900 font-semibold">
            Elemental Trade Corporation Pvt. Ltd. has a strong network of associated partners and clients in over 12 countries.
          </strong>
        </p>
        <p>
        Over the years, we have built a strong relationship with our customers, and the phenomenal success we enjoy today is primarily due to our customer-centric approach. Our focus in eight industry verticals from fields as diverse as soaps and detergents to paint, ink and coatings; flavours and fragrances to foods and beverages; plastics and rubber to water treatment and mining, help in further offering strong value propositions relevant to the industry segment.
        </p>
        <p>
        Based in Ahmedabad we have been catering to the needs of various industries such as Textile, Rubber, Leather, Dyes & Dyes Intermediates, Paints with our range of premium quality Acid dyes / Salt Free Acid Dyes, Direct dyes / Salt Free Direct Dyes, Reactive Dyes, Reactive MP dyes, Reactive HE dyes, Dyes Intermediates, Industrial Chemicals etc.
        </p>
        <p>
        We are an enterprise driven by values, knowledge and relationships. These values, reflected in our leadership and professional team, enable us to surmount new summits year after year. Through dogged insistence on maintaining local knowledge and indigenous approaches we are building partnerships and strategic alliances with partners around the world, making us a global front runner in the industry.
        </p>

      </div>

    </div>

  </div>

</div>

</section>

     
</div>
  )
}

export default About