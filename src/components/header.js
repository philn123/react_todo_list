import React from 'react';


const headerStyle = {
    background: '#DDEFF4',
    color: '#466A73',
    textAlign: 'center',
    padding: '5px'


}



function Header() {
    return ( 
        <header style={headerStyle}>
            <h1>Todo List</h1>
        </header>
    );

}

export default Header;
