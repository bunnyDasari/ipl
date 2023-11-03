// Write your code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {arry: [], isLoading: true}

  componentDidMount() {
    this.formatedData()
  }

  formatedData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const dataModified = data.teams.map(prevData => ({
      name: prevData.name,
      id: prevData.id,
      teamImageUrl: prevData.team_image_url,
    }))
    this.setState({arry: dataModified, isLoading: false})
  }

  renderCall = () => {
    const {arry} = this.state
    return (
      <div>
        {arry.map(data => (
          <li>
            <TeamCard data={data} key={data.id} />
          </li>
        ))}
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        <h1>IPL Dashboard</h1>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderCall()
        )}
      </div>
    )
  }
}

export default Home
