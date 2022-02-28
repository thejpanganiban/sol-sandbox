import { useState, useEffect } from "react"
import { ethers } from "ethers"
import SimpleStorageArtifact from "../contracts/SimpleStorage.json"

const provider = new ethers.providers.Web3Provider(window.ethereum)
const SimpleStorage = new ethers.Contract("0x4ddd596385657e997928c923f3faac5bec5fdfd4", SimpleStorageArtifact.abi, provider)

function MessageForm() {
  const [message, setMessage] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    const simpleStorage = await SimpleStorage.deployed()
    const signer = simpleStorage.connect(provider.getSigner())
    const tx = await signer.setMessage(message)
    console.log(tx)
  }

  return (
    <form onSubmit={e => handleSubmit(e) }>
      <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
      <button>Set Message</button>
    </form>
  )
}

function Message() {
  const [message, setMessage] = useState("")

  useEffect(async function() {
    const simpleStorage = await SimpleStorage.deployed()
    console.log()
    setMessage(await simpleStorage.message())
  })

  if (!message) return (
    <p>No message is currently set.</p>
  )

  return (
    <p>Message: {message}</p>
  )
}


export default function StoragePage() {
  return (
    <div>
      <h2>Storage</h2>
      <Message />
      <MessageForm />
    </div>
  )
}