'use client'
/* eslint-disable @next/next/no-img-element */
import { SignInButton } from "@/components/ui/getSignatures";
import { Imessage } from "@/types";
import React, { useState } from "react";
// eslint-disable-next-line @next/next/no-img-element


export default function Bridge() {

    const [messageInfo, setMessage] = useState<Imessage>();
        const [error, onError] = useState<Error>();


  return (
    <div className="w-full">
      <SignInButton setMessage={setMessage} onError={onError} />
    </div>
  );
}
