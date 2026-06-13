import { Chain } from "viem";
import { mainnet } from "viem/chains";

/**
 * Ensure Ethereum Mainnet (chainId 1) is present in a chain list exactly once.
 *
 * Mainnet must always be enabled so ENS resolution, ETH price feeds, etc. keep
 * working even when the app's active chain is an L2. Shared by `wagmiConfig`
 * (`enabledChains`) and `privyConfig` (`supportedChains`) so the two never drift.
 */
export const withMainnet = (chains: readonly Chain[]): [Chain, ...Chain[]] => {
  const hasMainnet = chains.some((chain: Chain) => chain.id === mainnet.id);
  return (hasMainnet ? [...chains] : [...chains, mainnet]) as [Chain, ...Chain[]];
};
