// AboutSection.jsx
// Wraps the shared ContentSection with aboutData
// Route: AboutPage (/)

import ContentSection from "./common/ContentSection"
import { aboutData } from "../data/aboutData";

export default function AboutSection() {
  return <ContentSection data={aboutData} />;
}