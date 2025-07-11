import { setupMyNearWallet } from '@near-wallet-selector/my-near-wallet';
import { setupMeteorWallet } from '@near-wallet-selector/meteor-wallet';
import { setupMeteorWalletApp } from '@near-wallet-selector/meteor-wallet-app';
import { setupBitteWallet } from '@near-wallet-selector/bitte-wallet';
import { setupEthereumWallets } from '@near-wallet-selector/ethereum-wallets';
import { setupHotWallet } from '@near-wallet-selector/hot-wallet';
import { setupLedger } from '@near-wallet-selector/ledger';
import { setupSender } from '@near-wallet-selector/sender';
import { setupHereWallet } from '@near-wallet-selector/here-wallet';
import { setupNearMobileWallet } from '@near-wallet-selector/near-mobile-wallet';
import { setupWelldoneWallet } from '@near-wallet-selector/welldone-wallet';
import { WalletSelectorProvider } from '@near-wallet-selector/react-hook';
import { wagmiAdapter, web3Modal } from '@/wallets/web3modal';
import { Navigation } from "@/components/Navigation";
import { DonationNearContract, NetworkId } from "@/config";
import "@/styles/globals.css";
import '@near-wallet-selector/modal-ui/styles.css';

const walletSelectorConfig = {
  network: NetworkId,
  createAccessKeyFor: DonationNearContract,
  modules: [
    setupEthereumWallets({ wagmiConfig: wagmiAdapter.wagmiConfig, web3Modal }),
    setupBitteWallet(),
    setupMeteorWallet(),
    setupMeteorWalletApp({contractId: DonationNearContract}),
    setupHotWallet(),
    setupLedger(),
    setupSender(),
    setupHereWallet(),
    setupNearMobileWallet(),
    setupWelldoneWallet(),
    setupMyNearWallet(),
  ],
}

export default function App({ Component, pageProps }) {

  return (
    <WalletSelectorProvider config={walletSelectorConfig}>
      <Navigation />
      <Component {...pageProps} />
    </WalletSelectorProvider>
  );
}
