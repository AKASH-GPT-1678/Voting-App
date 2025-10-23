
import CandidateForm from './components/candidate'
import ConnectWallet from './components/ConnectWallet'
import VotingContract from './components/voting'
function App() {

  return (
    <>
      <ConnectWallet />
      <VotingContract />
      <CandidateForm />
    </>
  )
}

export default App
