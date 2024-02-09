import BestGrearSection from "@/components/BestGearSection";
import CategorySection from "@/components/CategorySection";
import HomeBanner from "@/components/HomeBanner";
import HomeFeaturesSection from "@/components/HomeFeaturesSection";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <div className="flex flex-col mx-2.5 md:mx-auto md:w-[690px] lg:w-[1020px] xl:w-[1110px]">
        <CategorySection />
        <HomeFeaturesSection />
        <BestGrearSection />
      </div>
    </>
  );
}
