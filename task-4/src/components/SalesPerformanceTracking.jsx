import RightContentSection from "./common/RightContentSection";
import { salesPerformanceData } from "../data/creativeMarketingData";

export default function SalesPerformanceTracking() {
  return (
    <RightContentSection
      title={salesPerformanceData.title}
      image={salesPerformanceData.image}
      imageAlt="Sales Performance Tracking"
      paragraphs={salesPerformanceData.paragraphs}
    />
  );
}