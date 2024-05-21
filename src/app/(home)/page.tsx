import VideoCard from "@/components/global/videocard";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-6">
      <div className="items-center justify-center m-auto">Hero Section</div>
      <VideoCard/>
    </main>
  );
}
