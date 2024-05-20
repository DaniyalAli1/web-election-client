import { chain, client } from "@/lib/thirdweb";
import { ConnectButton } from "@/providers/ThirdWebProviders";


const ConnectWallet = () => {
  return (
    <div className='fixed top-6 right-6'>
      <ConnectButton client={client} chain={chain} connectButton={{
        style: {
          backgroundColor: 'RGB(17 24 39 / VAR(--tw-bg-capacity))',
        }
      }}>

      </ConnectButton>
    </div>
  )
}

export default ConnectWallet