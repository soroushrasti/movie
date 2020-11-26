import Like from './common/Like'
import React, { Component } from 'react';
import Table from './common/Table'
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
            <Table columns={this.columns} data={movies} 
            sortColumn={this.props.sortColumn} onSort={this.props.onSort} /> 
       );}
}
 
export default MovieTable;
