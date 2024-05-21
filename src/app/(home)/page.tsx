import TabBar from "@/components/global/tabbar";
import VideoCard from "@/components/global/videocard";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-6 justify-center items-center">
      <div className="items-center justify-center m-auto">Hero Section</div>
      <TabBar/>
      <VideoCard/>
    </main>
  );
}
