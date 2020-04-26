import React, {Fragment} from 'react';

function Header(props) {

     return (
        <Fragment>
        <h1>{ props.title }</h1>
        <p>{props.description}</p>
        </Fragment>
    )
}

export default Header;