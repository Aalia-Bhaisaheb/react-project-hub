import RightContentSection from "./common/RightContentSection";
import {monitoringReportingData} from "../data/nextGenBranding"

export default function MonitorinReporting() {
  return (
    <RightContentSection
      title={monitoringReportingData.title}
      image={monitoringReportingData.image}
      imageAlt="Monitoring and Reporting"
      paragraphs={monitoringReportingData.paragraphs}
    />
  );
}