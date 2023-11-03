// Write your code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import MatchCard from '../MatchCard'

import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  state = {updatedArr: [], isLoadingLoader: true}

  componentDidMount() {
    this.dataformat()
  }

  dataformat = () => {
    const response = await fetch('https://apis.ccbp.in/ipl/:id')

    const playerData = await response.json()

    const modifiedPlayerData = {
      teamBannerUrl: playerData.team_banner_url,

      latestMatchDetails: playerData.latest_match_details.map(prevLatest => ({
        umpires: prevLatest.umpires,
        result: prevLatest.result,
        manOfTheMatch: prevLatest.man_of_the_match,
        id: prevLatest.id,
        date: prevLatest.date,
        venue: prevLatest.venue,
        competingTeam: prevLatest.competing_team,
        firstInnings: prevLatest.first_innings,
        secoundInnings: prevLatest.secound_innings,
        matchStatus: prevLatest.match_status,
        competingTeamLogo: prevLatest.competing_team_logo,
      })),

      recentMatches: playerData.recent_match.map(prevMatch => ({
        umpires: prevMatch.umpires,
        result: prevMatch.result,
        manOfTheMatch: prevMatch.man_of_the_match,
        id: prevMatch.id,
        date: prevMatch.date,
        venue: prevMatch.venue,
        competingTeam: prevMatch.competing_team,
        competingTeamLogo: prevMatch.competing_team_logo,
        firstInnings: prevMatch.first_innings,
        secoundInnings: prevMatch.secound_innings,
        matchStatus: prevMatch.match_status,
      })),
    }
    this.setState({updatedArr: modifiedPlayerData, isLoadingLoader: false})
  }

  renderTeamMatch = () => {
    const {updatedArr} = this.state
    const {teamBannerUrl, latestMatchDetails} = updatedArr
    return (
      <div>
        <img src={teamBannerUrl} alt="team banner" />
        <LatestMatch latestmatch={latestMatchDetails} />
        {this.renderReactLoder()}
      </div>
    )
  }

  renderMatchCard = () => {
    const {updatedArr} = this.state
    const {recentMatches} = updatedArr
    return (
      <ul>
        {recentMatches.map(eachMatch => (
          <MatchCard matchData={eachMatch} key={eachMatch.id} />
        ))}
      </ul>
    )
  }

  renderReactLoder = () => {
    ;<div>
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  }
  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {isLoadingLoader} = this.state
    return (
      <div>
        {isLoadingLoader ? this.renderReactLoder() : this.renderTeamMatch()}
      </div>
    )
  }
}

export default TeamMatches
