import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IWallet } from "@/types";

const Wallet = ({ address, amount, symbol, destroy }: IWallet) => {
  if (address) {
    return (
      <>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="w-auto p-2">
              {amount ? (
                <>
                  Balance: {amount} <span className="ms-1"> {symbol}</span>
                </>
              ) : (
                // <Spinner animation="border" size="sm" className="opacity-25" />
                <>Connect</>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(address);
                //toast(<NotificationSuccess text="Copied!" />);
              }}
            >
              <i className="bi bi-person-circle fs-4" />
              <span className="font-monospace">{address}</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                destroy();
              }}
            >
              <i className="bi bi-box-arrow-right me-2 fs-4" />
              Disconnect
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    );
  }

  return null;
};

export default Wallet;
