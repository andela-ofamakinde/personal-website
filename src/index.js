import React from 'react'
import ReactDOM from 'react-dom'
import HomepageLayout from './HomepageLayout'

const App = () => {
    return (
        <HomepageLayout />
    )
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);