import { useState } from "react";
import faceimg from './assets/Faceimage.png'
import rectangleimg from './assets/Rectangle 13.png'
import paint from './assets/paint.png'

const galleryItems = [
  {
    id: 1,
    title: "Canvas Chronicles",
    date: "02-05 Feb, 2023",
    image: rectangleimg
  },
  {
    id: 2,
    title: "Masterful Creations",
    date: "14-15 Mar, 2023",
    image: rectangleimg
  },
  {
    id: 3,
    title: "A Palette of Dreams",
    date: "21-23 Apr, 2023",
    image: rectangleimg
  },
  {
    id: 4,
    title: "Captivating Strokes",
    date: "17-20 May, 2023",
    image: rectangleimg
  },
];

function NewsletterSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-[#6B6B6B] relative overflow-hidden py-30 px-8">
      {/* Decorative triangle + paintbrush image */}
      <div className="absolute top-0 right-0 w-48 h-48">
        {/* Orange triangle */}
        <div
          className="absolute bottom-4 right-4 w-0 h-0"
          
        />
        {/* <img
          src={paint}
          alt="Paintbrushes"
          className="absolute top-0 right-0 w-40 h-40 object-cover rounded-bl-full opacity-90"
        /> */}
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h2 className="text-white text-6xl font-light mb-4">Newsletter</h2>
        <p className="text-gray-300 text-md mb-6">
          Join Our Creative Community : Subscribe to Our Newsletter for Exclusive Updates
        </p>
        <div className="flex max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email Address"
            className="flex-1 px-4 py-2.5 text-sm text-gray-700 bg-white outline-none placeholder-gray-400"
          />
          <button className="bg-[#E87722] hover:bg-[#d06a1a] text-white text-xs font-bold tracking-widest px-5 py-2.5 uppercase transition-colors">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}

function AboutUsSection() {
  return (
    <section className="bg-white flex min-h-[380px]">
      {/* Left: Artwork image */}
      <div className="w-1/2 relative overflow-hidden">
        <img
          src= {faceimg}
          alt="Indian Art"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Text content */}
      <div className="w-1/2 flex flex-col justify-center px-10 py-12">
        <h2 className="text-6xl font-light text-gray-700 mb-5">About Us</h2>

        <p className="text-gray-600 text-md leading-relaxed mb-4">
          Welcome to The Foundation — a captivating hub where artistic legacies
          intertwine through the enchanting realms of art, exhibitions, paintings,
          sculptures, and photography. Our acronym, KALA, encapsulates our mission of
          Knitting Artists' Legacies Around, bridging generations and cultures through
          the universal language of creativity.
        </p>

        <p className="text-gray-600 text-md leading-relaxed mb-7">
          At The Foundation, we believe that art is a profound expression that transcends
          time and borders. Our dedication to fostering artistic excellence is reflected in
          the diverse range of exhibitions we curate. Each exhibition is a meticulously
          crafted journey that celebrates the brilliance of both established and emerging
          artists, spanning various genres and mediums.
        </p>

        <div>
          <button className="bg-[#F18E38] hover:bg-[#d06a1a] text-white text-xs font-bold tracking-widest px-6 py-2.5 uppercase transition-colors">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}

function PastEventGallery() {
  return (
    <section className="bg-[#6B6B6B] py-20 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-5xl font-light">Past Event Gallery</h2>
          <button className="bg-[#E87722] hover:bg-[#d06a1a] text-white text-xs font-bold tracking-widest px-5 py-2.5 uppercase transition-colors">
            All Photos
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div key={item.id} className="cursor-pointer group">
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[270px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-white text-xl font-semibold mt-2">{item.title}</p>
              <p className="text-gray-400 text-xl">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <div className="font-sans">
      <NewsletterSection />
      <AboutUsSection />
      <PastEventGallery />
    </div>
  );
}