import React, { useState } from 'react'
import { ethers } from 'ethers'
import './App.css'
import ConnectWallet from './components/ConnectWallet'
function App() {
  const [balance, setBalance] = React.useState("")

  const handleEthers = async () => {
    //@ts-ignore
    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner()


  }

  return (
    <>
   <ConnectWallet/>
    </>
  )
}

export default App
