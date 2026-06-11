// VisionMission.jsx
// Responsive Vision & Mission section using reusable AnimatedCard
import { visionMissionData } from "../data/aboutData";
import AnimatedCard from "./common/AnimatedCard";

export default function VisionMission() {
  const bgStyle = visionMissionData.backgroundImage
    ? `url(${visionMissionData.backgroundImage})`
    : "linear-gradient(180deg, #334155 0%, #1e293b 100%)";

  return (
    <section
      className="
        relative
        w-full
        lg:mt-16
        lg:h-[420px]
        flex
        items-end
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{ backgroundImage: bgStyle }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-[1500px]
          mx-auto
          px-6
          sm:px-10
          md:px-16
          lg:px-24
          xl:px-[165px]
          py-16
          md:py-20
          lg:translate-y-[50%]
        "
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

          {/* Vision */}
          <AnimatedCard
            title={visionMissionData.vision.title}
            borderColor="#1E3D88"
            fillColor="#1E3D88"
            titleColor="#1E3D88"
            delay={0}
            className="hover:shadow-[0_20px_50px_rgba(30,61,136,0.35)]"
          >
            <p className="text-[15px] md:text-[16px] leading-[30px]">
              {visionMissionData.vision.description}
            </p>
          </AnimatedCard>

          {/* Mission */}
          <AnimatedCard
            title={visionMissionData.mission.title}
            borderColor="#009846"
            fillColor="#009846"
            titleColor="#009846"
            delay={150}
            className="hover:shadow-[0_20px_50px_rgba(0,152,70,0.35)]"
          >
            <p className="text-[15px] md:text-[16px] leading-[30px]">
              {visionMissionData.mission.description}
            </p>
          </AnimatedCard>

        </div>
      </div>
    </section>
  );
}