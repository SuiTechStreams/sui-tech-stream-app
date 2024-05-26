import TabBar from "@/components/global/tabbar";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="w-full grid grid-cols-12">
      <section className="col-span-12 md:col-span-8 border-r-2 border-gray-600">
        <div className="flex flex-col gap-6">
          <div className="w-full items-center justify-center m-auto">
            <Image
              src="/images/banner.png"
              alt="upload Logo"
              width={500}
              height={250}
              className="w-full"
            />
          </div>
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
