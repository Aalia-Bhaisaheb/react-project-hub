import RightContentSection from "./common/RightContentSection";
import { costOptimizationData } from "../data/marketInsightsData";

export default function CostOptimization() {
  return (
    <div className="lg:mt-50">
      <RightContentSection
        title={costOptimizationData.title}
        image={costOptimizationData.image}
        imageAlt="Cost Optimization"
        paragraphs={costOptimizationData.paragraphs}
      />
    </div>
  );
}
