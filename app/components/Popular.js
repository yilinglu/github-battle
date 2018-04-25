var React = require('react');

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
        <p>
            {props.selectedLanguage}
        </p>
     </div>
    )
}

class Popular extends React.Component {
    constructor(props){
        super(props)
        this.state = { selectedLan: 'All'}
    }

    updateLanguage(lan){
        this.setState( function() {
            return {
                selectedLan: lan
            }
        })
    }

    render() {
        return (
            <div>
                <SelectLanguage 
                    selectedLanguage = {this.state.selectedLan}
                    onSelect = {(lan) => { this.updateLanguage(lan)}}/>
            </div>
        )
    }
}

module.exports = Popular;