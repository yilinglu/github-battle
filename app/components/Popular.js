var React = require('react');

class Popular extends React.Component {
    constructor(props){
        super(props)
        this.state = { selectedLan: 'All'}
    }

    selectLanguage(lan){
        this.setState( function() {
            return {
                selectedLan: lan
            }
        })
    }
    render() {
        var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];        
        return (
        <div> 
            <ul className = 'languages'>
                {languages.map( function(lan) {
                    return (
                        <li 
                            style = {lan === this.state.selectedLan? {color: '#d0021b'}: null}
                            onClick = { () => {
                                console.log(`clicked on ${lan}`);
                                this.selectLanguage(lan);
                            }}
                            key={lan}>
                            {lan}
                        </li>
                    )
                }, this)

                }
            </ul>
            <p>
                {this.state.selectedLan}
            </p>
         </div>
        )
    }
}

module.exports = Popular;