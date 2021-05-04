import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Errorboundary from '../components/Errorboundary';
class App extends Component{
    constructor(){
        super()
        this.state={
            Robots: [],
            searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
            .then(users=>this.setState({ Robots: users }))

    }
    onsearchchange=(event)=>{
    this.setState({searchfield: event.target.value})

    }
render()
    {
    const {Robots, searchfield}=this.state;
    const filterrobots = Robots.filter(Robot => {
        return Robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return !Robots.length ? <h1 className="tc pa7">Loading....</h1> :
    
        (  <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchchange={this.onsearchchange} />
                <Scroll>
                <Errorboundary><Cardlist Robots={filterrobots} /></Errorboundary>
                
                </Scroll>
            </div>
        );
    }
    } 



export default App;