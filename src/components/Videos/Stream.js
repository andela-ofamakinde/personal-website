import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import StreamCreate from './StreamCreate';
import StreamDelete from './StreamDelete';
import StreamEdit from './StreamEdit';
import StreamList from './StreamList';
import StreamShow from './StreamShow';


const Stream = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/videos/create">Create Video</Link>
        <Link to="/videos/show">Show Videos</Link>
        <Link to="/videos/delete">Delete Videos</Link>
        <Link to="/videos/edit">Edit Video</Link>
        <Link to="/videos/list">List Videos</Link>
        
        <Route path='/videos/create' component={StreamCreate}></Route>
        <Route path='/videos/show' component={StreamShow}></Route>
        <Route path='/videos/delete' component={StreamDelete}></Route>
        <Route path='/videos/edit' component={StreamEdit}></Route>
        <Route path='/videos/list' component={StreamList}></Route>
        
      </div>
    </BrowserRouter>
  )
}
export default Stream;