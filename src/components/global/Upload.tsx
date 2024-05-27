import Image from "next/image";
import { ChangeEvent } from "react";
import { IpfsUploadBatchOptions, ThirdwebStorage } from "@thirdweb-dev/storage";
import { useStorageUpload } from "@thirdweb-dev/react";



interface IUploadFile {
    updateLink: (value: string) => void;
    className: string;
}


export const UploadToStorage = ({ updateLink, className }: IUploadFile) => {
  const { mutateAsync: upload } = useStorageUpload();

  const uploadFile = async (event: ChangeEvent<HTMLInputElement | null>) => {
    let file = event.currentTarget.files && event.currentTarget.files[0];
    const uris = await upload({ data: [file] });
    updateLink(uris[0]);
  };
  return (
    <label htmlFor="myfile">
      <div className={className}>
        <Image
          src="/images/upload.webp"
          alt="upload Logo"
          height="150"
          width="300"
        />
      </div>
      <input
        className="h-[80px]"
        id="myfile"
        type="file"
        accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, image/*"
        style={{ display: "none" }}
        onChange={(event) => uploadFile(event)}
      />
    </label>
  );
};
