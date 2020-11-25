import Like from './common/Like'
import React, { Component } from 'react';
import TableHeader from './common/TableHeader'
import TableBody from './common/TableBody'
class MovieTable extends Component {

      columns=[
          {path:'title',label:'Title'},
          {path:'genre.name',label:'Genre'},
          {path:'numberInStock',label:'Stock'},
          {path:'dailyRentalRate',label:'Rate'},
          {key:'Like', content:movie=><Like liked={movie.like} 
          onClick={()=>this.props.onLike(movie)} />},
          {key:'Delete',content:movie=><button onClick={()=>this.props.onDelete(movie)} className="btn btn-danger btn-sm">Delete</button>    }
      ]
    render() { 
        const {movies}=this.props;
        return ( 
        <table className="table">
            <TableHeader columns={this.columns} 
            sortColumn={this.props.sortColumn} onSort={this.props.onSort} />
         <TableBody data={movies} columns={this.columns} />
        
    </table>  );
    }
}
 
export default MovieTable;
