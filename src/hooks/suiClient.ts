import { SuiClient, getFullnodeUrl } from '@mysten/sui.js/client';

// node rpc url
const FULLNODE_URL: string = process.env.NEXT_PUBLIC_FULLNODE_TESTNET_URL || '';
// the id of the package of a deployed contract
export const PACKAGE_ID = process.env.NEXT_PUBLIC_PACKAGE_ID;

export const SUI_CLIENT = new SuiClient({ url: getFullnodeUrl("testnet") })
