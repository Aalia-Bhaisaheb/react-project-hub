import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { MdCalendarToday, MdLocationOn } from "react-icons/md";
import eventImage from './assets/Mask group.png'

const events = [
  {
    id: 1,
    title: "The Foundation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula ulla ut purus blandit, vitae tincidunt enim viverra. Suspendisse id facilisis leo.",
    status: "Online",
    image: eventImage,
    eventDate: "20-23 Oct, 2023",
    registrationTill: "10 Oct, 2023",
    location: "Gotri, Vadodara",
  },
  {
    id: 2,
    title: "Ephemeral Expressions:\nA Visual Journey",
    description:
      "Donec et ex sit amet diam imperdiet euismod. Duis nisl erat, lobortis ac risus a, faucibus egestas mauris. Quisque ultrices libero sit amet scelerisque consectetur. Morbi efficitur lacus rutrum libero egestas, eu ornare suscipit.",
    status: "Offline",
    image: eventImage,
    eventDate: "20-23 Oct, 2023",
    registrationTill: "10 Oct, 2023",
    location: "Nilamber Chowk, Vadodara",
  },
  {
    id: 3,
    title: "Threads of Creativity",
    description:
      "Suspendisse ultrices lorem at turpis scelerisque, nec suscipit leo pulvinar. Vestibulum congue sem nec augue varius, nec consectetur odio feugiat.",
    status: "Offline",
    image: eventImage,
    eventDate: "20-23 Oct, 2023",
    registrationTill: "10 Oct, 2023",
    location: "Vasna -Bhaili, Vadodara",
  },
];

function StatusBadge({ status }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium text-white bg-black/50">
      <span className={`w-2 h-2 rounded-full ${status === "Online" ? "bg-green-400" : "bg-gray-400"}`} />
      {status}
    </span>
  );
}

function EventCard({ event }) {
  return (
    <div className="bg-white rounded-sm overflow-hidden shadow-sm flex flex-col">
      <div className="relative">
        <img src={event.image} alt={event.title} className="w-full object-cover" />
        <div className="absolute top-3 right-3">
          <StatusBadge status={event.status} />
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-[#E87722] text-[20px] leading-snug mb-3 whitespace-pre-line">
          {event.title}
        </h3>

        <p className="text-gray-600 text-[16px] leading-relaxed mb-4 flex-1">
          {event.description}{" "}
          <button className="text-[#E87722] font-semibold text-[15px] hover:underline">{">>"}</button>
        </p>

        <div className="border-t border-gray-100 pt-3 space-y-2">
          <div className="flex items-start gap-2">
            <MdCalendarToday className="text-[#E87722] mt-0.5 shrink-0" size={14} />
            <div className="flex justify-between w-full text-[14px]">
              <span className="text-gray-500 font-semibold">Event Date</span>
              <span className="text-gray-700 font-medium">{event.eventDate}</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MdCalendarToday className="text-[#E87722] mt-0.5 shrink-0" size={14} />
            <div className="flex justify-between w-full text-[14px]">
              <span className="text-gray-500 font-semibold">Registration Till</span>
              <span className="text-gray-700 font-medium">{event.registrationTill}</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MdLocationOn className="text-[#E87722] mt-0.5 shrink-0" size={14} />
            <div className="flex justify-between w-full text-[14px]">
              <span className="text-gray-500 font-semibold">Locations</span>
              <span className="text-gray-700 font-medium text-right">{event.location}</span>
            </div>
          </div>
        </div>
      </div>

      <button className="w-full bg-[#9E9E9E] hover:bg-[#8a8a8a] text-white font-semibold tracking-widest p-10 transition-colors uppercase">
        Register Now
      </button>
    </div>
  );
}

export default function Upcoming() {
  const [current, setCurrent] = useState(0);
  const total = events.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const visibleEvents = [
    events[current % total],
    events[(current + 1) % total],
    events[(current + 2) % total],
  ];

  return (
    <div className="min-h-screen bg-[#EEEEEE] relative">

      <div className="mx-5 px-8 py-12 ml-20 mr-20">
        <div className="flex items-start justify-between mb-6 ml-11">
          <div>
            <h2 className="text-5xl font-light text-gray-800 mb-2">Upcoming Events</h2>
            <p className="text-gray-500 text-xl mt-7">
              The Foundation invites artists to participate in the group show at Akruti Art Gallery, Vadodara.
            </p>
          </div>
          <button className="bg-[#E87722] hover:bg-[#d06a1a] text-white text-xs font-bold tracking-widest px-5 py-2.5 transition-colors uppercase shrink-0 mt-1 mr-12">
            All Events
          </button>
        </div>

        <div className="relative flex items-center gap-3">
          <button
            onClick={prev}
            className="shrink-0 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={28} strokeWidth={1.5} />
          </button>

          <div className="grid grid-cols-3 gap-4 flex-1">
            {visibleEvents.map((event, i) => (
              <EventCard key={`${event.id}-${i}`} event={event} />
            ))}
          </div>

          <button
            onClick={next}
            className="shrink-0 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={28} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {events.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === current % total ? "bg-[#E87722]" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}