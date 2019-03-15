import React from 'react'
import ReactDOM from 'react-dom'
import HomepageLayout from './components/Home/HomepageLayout'

const App = () => {
    return (
        <HomepageLayout />
    )
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);