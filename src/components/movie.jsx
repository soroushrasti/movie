import React, { Component } from 'react';
import {getMovies} from '../../services/fakeMovieService'
class Movie extends Component {
    state = { movie:getMovies }
    render() { 
        return (  <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table> );
    }
}
 
export default Movie;