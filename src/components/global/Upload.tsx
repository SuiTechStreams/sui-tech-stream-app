import Image from "next/image";
import { ChangeEvent } from "react";
import { IpfsUploadBatchOptions, ThirdwebStorage } from "@thirdweb-dev/storage";
import { useStorageUpload } from "@thirdweb-dev/react";



interface IUploadFile {
    updateLink: (value: string) => void;
  className?: string;
  accept?: string;
}


export const UploadToStorage = ({ updateLink, className }: IUploadFile) => {
  const { mutateAsync: upload } = useStorageUpload();
  let file;
  const uploadFile = async (event: ChangeEvent<HTMLInputElement | null>) => {
    file = event.currentTarget.files && event.currentTarget.files[0];
    const uris = await upload({ data: [file] });
    //    updateLink(file?.name);
    updateLink(uris[0]);
  };
  return (
    <label htmlFor="myfile">
      <div className={className}>
        <Image
          src={file ? file : "/images/upload.webp"}
          alt="upload Logo"
          height="150"
          width="300"
        />
      </div>
      <input
        className="h-[80px]"
        id="myfile"
        type="file"
        style={{ display: "none" }}
        accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, image/*"
        onChange={(event) => uploadFile(event)}
      />
    </label>
  );
};
