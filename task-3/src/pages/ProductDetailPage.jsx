import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { productTabs } from "../data/productData";
import { categorySpecs } from "../data/productPageData";

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  let product = null;
  let category = null;

  for (const tab of productTabs) {
    const found = tab.products.find((p) => p.id === id);
    if (found) {
      product = found;
      category = tab;
      break;
    }
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Product not found</p>
      </div>
    );
  }

  const specs = categorySpecs?.[category.id] || [];

  const pageTitle = `${product.name} | ${category.label} | Auro Pumps`;
  const pageDescription = `${product.name} from ${category.label}. ${category.description}`;

  return (
    <div className="min-h-screen bg-[#F5F4FF] pt-[90px] px-4 sm:px-6 lg:px-8">
      {/* SEO */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content={`Auro Pumps, ${product.name}, ${category.label}`}
        />
        <meta name="author" content="Auro Pumps" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://localhost:5173/products/${id}`} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={product.image} />
      </Helmet>

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-[#2D258E] font-semibold hover:underline"
      >
        ← Back
      </button>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
      >
        {/* TOP SECTION (NAME FIRST → IMAGE BELOW) */}
        <div className="p-4 sm:p-6 flex flex-col gap-6">
          {/* CATEGORY */}
          <span className="text-xs sm:text-sm text-gray-500 uppercase">
            {category.label}
          </span>

          {/* PRODUCT NAME (FIRST) */}
          <h1 className="text-2xl sm:text-3xl font-bold text-[#2D258E]">
            {product.name}
          </h1>

          {/* IMAGE (SECOND) */}
          <div className="bg-[#F5F4FF] rounded-lg overflow-hidden flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[250px] sm:h-[350px] object-contain"
            />
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-sm sm:text-base">
            {category.description}
          </p>

          {/* PDF */}
          {product.pdfUrl && (
            <a
              href={product.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2D258E] font-semibold underline"
            >
              Download PDF
            </a>
          )}
        </div>

        {/* SPECS */}
        {specs.length > 0 && (
          <div className="border-t p-4 sm:p-6">
            <h2 className="font-semibold mb-4 text-[#2D258E]">
              Technical Specifications
            </h2>

            <div className="space-y-2">
              {specs.map((s, i) => {
                const isDark = i % 2 === 0;

                return (
                  <div
                    key={i}
                    className={`flex flex-col sm:flex-row justify-between p-3 ${
                      isDark ? "bg-[#2D258E]" : "bg-white"
                    }`}
                  >
                    <span className={isDark ? "text-white" : "text-gray-700"}>
                      {s.label}
                    </span>
                    <span className={isDark ? "text-white" : "text-gray-500"}>
                      {s.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
