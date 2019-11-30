import React from 'react';

class Header extends React.Component{
    render(){
        return (
            <div id="header">
                <nav>
                    <span className="brand">Movie Show App</span>
                </nav>
                    <div >
                        <form action="" className="search">
                        <input type="text" className="custom-input" placeholder="Ex : Avanger End Game"/>
                        <button type="submit">Search</button>
                        </form>
                    </div>
                
            </div>
        )
    }
}


export default Header;