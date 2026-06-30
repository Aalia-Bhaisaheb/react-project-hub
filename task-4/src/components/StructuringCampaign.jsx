import RightContentSection from "./common/RightContentSection";
import { campaignData } from "../data/strategicPromotionData";

export default function StructuringCampaign() {
  return (
    <RightContentSection
      title={campaignData.title}
      image={campaignData.image}
      imageAlt="Structuring Campaign"
      paragraphs={campaignData.paragraphs}
    />
  );
}