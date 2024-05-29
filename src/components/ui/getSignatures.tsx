import * as React from 'react'
import { useAccount, useSignMessage, useChainId } from 'wagmi'
import { SiweMessage, generateNonce } from "siwe";
import { Imessage } from '@/types';
import { ChainTubeService } from "@/hooks/chainTubeCall";


function SignInButton({
  setMessage,
  onError,
}: {
  setMessage: ({ message, signature }: Imessage) => void;
  onError: ({}:any) => void;
}) {
  const [state, setState] = React.useState<{
    loading?: boolean;
    nonce?: string;
  }>({});

  const fetchNonce = React.useCallback(async () => {
    try {
      const nonce = generateNonce();
      setState((x) => ({ ...x, nonce }));
    } catch (error) {
      setState((x) => ({ ...x, error: error as Error }));
    }
  }, []);

  const chainTubeService = new ChainTubeService();

  React.useEffect(() => {
    fetchNonce();
  }, [fetchNonce]);

  // Pre-fetch random nonce when button is rendered
  // to ensure deep linking works for WalletConnect
  // users on iOS when signing the SIWE message

  const { address } = useAccount();
  const chain = useChainId();
  const { signMessageAsync } = useSignMessage();

  const signIn = async () => {
    try {
      const chainId = chain;
      if (!address || !chainId) return;

      setState((x) => ({ ...x, loading: true }));
      // Create SIWE message with pre-fetched nonce and sign with wallet
      const message = new SiweMessage({
        domain: window.location.host,
        address,
        statement: "Sign in with Ethereum to the app.",
        uri: window.location.origin,
        version: "1",
        chainId,
        nonce: state.nonce,
      });
      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      });

      setState((x) => ({ ...x, loading: false }));

      const suiSignature = chainTubeService.getSuiMessageCall();

      //setMessage({ message, signature });
      console.log(
        "Ethereum signature ==================================",
        signature
      );

    } catch (error) {
      setState((x) => ({ ...x, loading: false, nonce: undefined }));
      onError({ error });
      fetchNonce();
    }
  };

  return (
    <button disabled={!state.nonce || state.loading} onClick={signIn}>
      Sign-In with Ethereum
    </button>
  );
}


export {SignInButton}
