import ApplicationsSection from "../components/ApplicationsSection";
import PageHeader from "../components/PageHeader";

export default function ApplicationsPage() {
  return (
    <>
      <div className="min-h-screen font-sans">
        <PageHeader title="Applications" breadcrumb="Home / Applications" />
        <ApplicationsSection whiteBg showHeader={false}/>
      </div>
    </>
  );
}
