// Write your code here

const LatestMatch = props => {
  const {latestmatch} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    firstInnings,
    secoundInnings,
    matchStatus,
    competingTeamLogo,
  } = latestmatch
  return (
    <div>
      <h1>Latest Match</h1>
      <p>{competingTeam}</p>
      <p>{date}</p>
      <p>{venue}</p>
      <p>{result}</p>
      <img src={competingTeamLogo} alt={`latest match${competingTeam}`} />
      <div>
        <p>First Innings</p>
        <p>{firstInnings}</p>
      </div>
      <div>
        <p>Secound Innings</p>
        <p>{secoundInnings}</p>
      </div>
      <div>
        <p>Man of The Match</p>
        <p>{manOfTheMatch}</p>
      </div>
      <div>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
