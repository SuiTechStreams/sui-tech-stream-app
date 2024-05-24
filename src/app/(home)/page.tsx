import TabBar from "@/components/global/tabbar";
import VideoCard from "@/components/global/videocard";

export default function HomePage() {
  return (
    <div className="w-full grid grid-cols-12">
      <section className="col-span-12 md:col-span-8 border-r-2 border-gray-600">
        <div className="flex flex-col gap-6">
          <div className="items-center justify-center m-auto">Hero Section</div>
          <TabBar />
        </div>
      </section>
      {/* Right content */}
      <section className="col-span-12 md:col-span-4 border-gray-600">
        Right Section
      </section>
    </div>
  );
}
