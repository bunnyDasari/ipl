import {Link} from 'react-router-dom'
const Teamcard = props => {
  const {data} = props
  const {name, id, teamImageUrl} = data
  return (
    <Link to={`/team-matches/${id}`}>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          alt="ipl logo"
        />
        <h1>IPL Dashboard</h1>
        <div>
          <img src={teamImageUrl} alt={name} />
          <p>{name}</p>
        </div>
      </div>
    </Link>
  )
}

export default Teamcard
