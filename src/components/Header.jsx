import React from 'react';

class Header extends React.Component{
    render(){
        return (
            <div id="header">
                <nav>
                    <span className="brand">Movie Show App</span>
                </nav>
                    <div className="input">
                        <form action="">
                        <input type="text" placeholder="Avanger End Game"/>
                        <button type="submit">Search</button>
                        </form>
                    </div>
                
            </div>
        )
    }
}


export default Header;