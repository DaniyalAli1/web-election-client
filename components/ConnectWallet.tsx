import { chain, client } from "@/lib/thirdweb";
import { ConnectButton } from "@/providers/ThirdWebProviders";


const ConnectWallet = () => {
  return (
    <div className='fixed top-6 right-6'>
      <ConnectButton client={client} chain={chain}>

      </ConnectButton>
    </div>
  )
}

export default ConnectWallet