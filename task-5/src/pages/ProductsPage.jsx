import PackagingSection from "../components/PackagingSection";
import PageHeader from "../components/PageHeader";
import ProductDetailSection from "../components/ProductDetailSection";
import QualitySection from "../components/QualitySection";

export default function ProductsPage(){
  return(
    <>
    <PageHeader title="Cadmium Oxide" breadcrumb="Home / Cadmium Oxide" />
    <ProductDetailSection/>
    <QualitySection/>
    <PackagingSection/>
    </>
  )
}