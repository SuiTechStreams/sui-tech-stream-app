import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge";
import * as fs from "fs";
import { SUI_CLIENT } from "@/hooks/suiClient";



export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export interface IObjectInfo {
  type: string | undefined;
  id: string | undefined;
}


export const getId = (type: string): string | undefined => {
  try {
    const rawData = fs.readFileSync("./created.json", "utf8");
    const parsedData: IObjectInfo[] = JSON.parse(rawData);
    const typeToId = new Map(parsedData.map((item) => [item.type, item.id]));
    return typeToId.get(type);
  } catch (error) {
    console.error("Error reading the created file:", error);
  }
};

export async function getProfile(accountAddress: string) {
  const packageId = getId("package");

  const { data, hasNextPage, nextCursor } = await SUI_CLIENT.getOwnedObjects({
    owner: accountAddress,
    filter: {
      StructType: `${packageId}::profile::ProfileOwnerCap`,
    },
    options: {
      showContent: true,
      showType: true,
    },
  });

  // console.log(JSON.stringify(data[0], null, 2));

  return {
    // @ts-ignore
    profileCapId: data[0].data.objectId,
    // @ts-ignore
    profileId: data[0].data?.content.fields.profile_id,
  };
}