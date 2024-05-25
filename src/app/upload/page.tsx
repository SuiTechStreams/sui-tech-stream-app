/* eslint-disable @next/next/no-img-element */
import TabBar from "@/components/global/tabbar";
import Image from "next/image";
import { Input } from '@/components/ui/input';
import { TextArea } from "@/components/ui/textarea";

// eslint-disable-next-line @next/next/no-img-element

export default function UploadPage() {
  return (
    <section className="upload flex flex-col gap-8 max-w-screen-lg mx-auto mt-14 h-full">
      <h2 className="text-white text-xl">Upload New Video</h2>
      <div className="flex flex-row gap-8">
        <form className="flex flex-col gap-5 bg-gray-800 p-6 rounded-md">
          <label className="w-full flex flex-col gap-2">
            <p className="text-white">Enter title</p>
            <Input name="title" className="text-gray-800" />
          </label>
          <label className="flex flex-col gap-2 w-full">
            <p className="text-white">Description</p>
            <TextArea
              name="description"
              className="resize-none rounded-md p-2 text-gray-800"
              rows={7}
            />
          </label>
          <label className="flex flex-col gap-2">
            <p className="text-white">Select category</p>
            <select
              name="category"
              id="category"
              className="rounded-md p-2 text-gray-800"
            >
              <option value="categ1">Category1</option>
            </select>
          </label>
          <div className="tags-check flex items-center gap-5">
            <label className="flex items-center gap-2 flex-1">
              <p className="text-white">Tags</p>
              <Input name="tags" className="text-gray-800" />
            </label>
            <label className="flex flex-row-reverse items-center gap-2">
              <p className="text-white">Subscribers only </p>
              <input
                type="checkbox"
                checked
                className="rounded-md p-2 text-gray-800"
              />
            </label>
          </div>
          <button className="px-2 py-2 mt-7 bg-black text-white self-start border border-white rounded-md">
            Publish video
          </button>
        </form>
        <div className="flex flex-col gap-8 flex-1">
          <div className="video flex-1 bg-gray-800 rounded-md flex items-center justify-center">
            <p className="bg-gray-700 px-3 py-2 text-white border border-white rounded-md">
              Click to upload new video
            </p>
          </div>
          <div className="thumbnail flex-1 bg-gray-800 rounded-md flex items-center justify-center">
            <p className="bg-gray-700 px-3 py-2 text-white border border-white rounded-md">
              Click to upload ne thumbnail
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
