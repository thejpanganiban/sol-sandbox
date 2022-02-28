import { useState, useEffect } from "react"
import { ethers } from "ethers"
import SimpleCoinArtifact from "../contracts/SimpleCoin.json"

const provider = new ethers.providers.Web3Provider(window.ethereum)
const SimpleCoin = new ethers.Contract("0xE4d88370A879446aBBC77BfEBE082fA2b903e9FD", SimpleCoinArtifact.abi, provider)

function CoinBalance() {
  const [balance, setBalance] = useState(0)

  useEffect(async function() {
    const simpleCoin = await SimpleCoin.deployed()
    const signer = provider.getSigner()
    const contract = simpleCoin.connect(provider.getSigner())
    const signerAddress = await signer.getAddress()
    const balance = ethers.utils.formatEther(await contract.balanceOf(signerAddress))
    setBalance(balance)
  })

  return (
    <div>
      <p>Balance: {balance}</p>
    </div>
  )
}

export default function SimpleCoinPage() {
  return (
    <div>
      <h2>SimpleCoin</h2>
      <CoinBalance />
    </div>
  )
}