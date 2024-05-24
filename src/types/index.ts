// Types goes here// Types goes here

export type IWallet = {
  address: string;
  amount: string;
  symbol: string;
  destroy: () => void
}

export type SidebarProps = {
  className?: string;
};
