var React = require('react');
const api = require('../utils/api');

function SelectLanguage(props) {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];        
    return (
    <div> 
        <ul className = 'languages'>
            {languages.map( function(lan) {
                return (
                    <li 
                        style = {lan === props.selectedLanguage? {color: '#d0021b'}: null}
                        onClick = { () => {
                            console.log(`clicked on ${lan}`);
                            props.onSelect(lan);
                        }}
                        key={lan}>
                        {lan}
                    </li>
                )
            })

            }
        </ul>
     </div>
    )
}

function RepoGrid(props){
    return(
        <ul className='popular-list'>
        {props.repos.map(function (repo, index) {
          return (
            <li key={repo.name} className='popular-item'>
              <div className='popular-rank'>#{index + 1}</div>
              <ul className='space-list-items'>
                <li>
                  <img
                    className='avatar'
                    src={repo.owner.avatar_url}
                    alt={'Avatar for ' + repo.owner.login}
                  />
                </li>
                <li><a href={repo.html_url}>{repo.name}</a></li>
                <li>@{repo.owner.login}</li>
                <li>{repo.stargazers_count} stars</li>
              </ul>
            </li>
          )
        })}
      </ul>
    )
}

class Popular extends React.Component {
    constructor(props){
        super(props)
        this.state = { selectedLan: 'All', repos: null}
    }

    componentDidMount() {
        this.updateLanguage(this.state.selectedLan);
    }
    
    updateLanguage(lan){
        this.setState( function() {
            return {
                selectedLan: lan
            }
        });
        api.fetchPopularRepos(lan).then(
            function(repos) {
                this.setState( () => {return {repos: repos}}
                )
            }.bind(this)
        )
    }

    render() {
        return (
            <div>
                <SelectLanguage 
                    selectedLanguage = {this.state.selectedLan}
                    onSelect = {(lan) => { this.updateLanguage(lan)}}/>
                {!this.state.repos? <p>Loading</p> : 
                    <RepoGrid repos = {this.state.repos}  />     
                }                  
            </div>
        )
    }
}

module.exports = Popular;