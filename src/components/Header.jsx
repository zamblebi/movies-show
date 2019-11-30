import React from 'react';
import Movie from './Movie'

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchMovie: '',
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({value : event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        const value = this.state.searchMovie;
        this.setState({value})
        // value = '';
        
        console.log(this.state.value)
    }

    render(){
        // console.log(this.state.searchMovie)
        return (
            <div id="header">
                <nav>
                    <span className="brand">Movie Show App</span>
                </nav>
                
                    <div >
                        <form action="" className="search" onSubmit={this.handleSubmit}>
                        <input type="text" className="custom-input" value={this.state.value} onChange={this.handleChange} placeholder="Ex : Avanger End Game"/>
                        <button type="submit">Search</button>
                        </form>
                    </div>
                <Movie search={this.state.value}/>
                
            </div>
        )
    }
}


export default Header;