import Image from "next/image";
import { TextArea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function Comment() {
  return (
    <div className="flex flex-col border border-gray-300 p-6 rounded-md">
      <h3 className="text-lg font-bold mb-2">Comments</h3>
      <div className="flex flex-col space-y-4">
        <div className="comment flex items-start space-x-2">
          <div className="rounded-full bg-gray-200 w-10 h-10 flex items-center justify-center">
            <Image
              width={30}
              height={30}
              src="/images/user.svg"
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
          <div className="bg-gray-100 px-4 py-2 rounded-lg">
            <p className="text-sm font-medium">User1</p>
            <p className="text-sm">This is great!</p>
          </div>
        </div>
        <div className="comment flex items-start space-x-2">
          <div className="rounded-full bg-gray-200 w-10 h-10 flex items-center justify-center">
            <Image
              width={30}
              height={30}
              src="/images/user.svg"
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
          <div className="bg-gray-100 px-4 py-2 rounded-lg">
            <p className="text-sm font-medium">User2</p>
            <p className="text-sm">Awesome video!</p>
          </div>
        </div>
        {/* Add your comment form here */}
        <div className="flex items-center space-x-2">
          <TextArea
            placeholder="Type your message here."
            className="flex-1 bg-gray-100 px-4 py-2 rounded-lg"
          />
          <Button>Send message</Button>
        </div>
      </div>
    </div>
  );
}
