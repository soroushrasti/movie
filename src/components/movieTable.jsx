import Like from './common/Like'
import React, { Component } from 'react';
import TableHeader from './common/TableHeader'

class MovieTable extends Component {
      columns=[
          {path:'title',label:'Title'},
          {path:'genre.name',label:'Genre'},
          {path:'numberInStock',label:'Stock'},
          {path:'dailyRentalRate',label:'Rate'},
          {},
          {}
      ]
    render() { 
        const {movies, onDelete, onLike}=this.props;
        return ( 
        <table className="table">
            <TableHeader columns={this.columns}  />
    
        <tbody>
        {movies.map(movie=> (
                <tr key={movie._id}>
                    <td>{movie.title} </td>
                    <td> {movie.genre.name} </td>
                    <td> {movie.numberInStock} </td>
                    <td>{movie.dailyRentalRate}</td>
                    <td  ><Like liked={movie.liked} onClick={()=>onLike(movie)} /></td>
                    <td><button onClick={()=>onDelete(movie)} className="btn btn-danger btn-sm">Delete</button> </td>
                </tr>
                ))}
        </tbody>
    </table>  );
    }
}
 
export default MovieTable;
