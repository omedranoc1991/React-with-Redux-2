import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

//function component
/*const App = () =>{
    
    navigator.geolocation.getCurrentPosition( (position) =>{
        console.log(position)}, (err) => {
            console.log(err)
        }
    )
    return (
    <div>
        Oscar Medrano
       <SeasonDisplay/>
    </div>)

}*/

//class component

class App extends React.Component {
    
  /*  constructor(props){
        super(props)
        
        // initialize the state
        this.state = {lat : null, error : ''}     
              
    }*/

    state = {lat : null, error : ''}

    componentDidMount(){
          //get current position; the firts argument is an object that contain all the information of the current position
          navigator.geolocation.getCurrentPosition( 
            (position) =>{
                //update the state
                this.setState({lat : position.coords.latitude})},
            (err) => {
                this.setState({error : err.message })
            }
        )     
    }

    renderContent(){
        if(this.state.lat && !this.state.error){
            return <SeasonDisplay lat={this.state.lat}/>
        }
        if(!this.state.lat && this.state.error){
            return <div>Error : {this.state.error}</div>
        }
        return <Spinner message='Please accept location request'/>     
    }

    render(){ 
       return <div>{this.renderContent()}</div> 
    }  
      
}

ReactDOM.render( <App/>, document.getElementById('root')  )