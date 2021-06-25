import React from 'react'
import PropTypes from 'prop-types'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const CarByYear = ({onYearOption,handleChange,year,infoYear}) => {
    return (
        <>
            <FormControl>
              <InputLabel htmlFor="year">Año del coche</InputLabel>
              <Input id="year" onChange={handleChange}/>
            </FormControl>
            <FormControl>
              <Button variant="contained" color="primary" onClick = {() => onYearOption(year)} >
                 Buscar
            </Button>
            </FormControl>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell padding="default">CoverageType</TableCell>
                    <TableCell padding="default">Id</TableCell>
                    <TableCell align="default">Brand</TableCell>
                    <TableCell align="default">Company</TableCell>
                    <TableCell align="default">Price</TableCell>
                    <TableCell align="default">Extra Coverage Price</TableCell>
                    <TableCell align="default">Year Range</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                 
                    {infoYear.map(el => ([ 
                    <TableRow key={el._id ? el._id: "No results" }>
                        <TableCell padding="default">{el.coverageType}</TableCell>
                        <TableCell padding="default">{el._id ? el._id: "No results" }</TableCell>
                        <TableCell padding="default">{el.brand ? el.brand: "No results" }</TableCell>
                        <TableCell padding="default">{el.company ? el.company: "No results" }</TableCell>
                        <TableCell padding="default">{el.price ? el.price: "No results" }</TableCell>
                        <TableCell padding="default">{el.extraCoveragePrice ? el.extraCoveragePrice: "No results" }</TableCell>
                        <TableCell padding="default">{el.yearRange ? `${el.yearRange[0]} -  ${el.yearRange[1]}`: "No results"    }</TableCell> 
                    </TableRow>
                    ]))}
                </TableBody>
             </Table>
           
        </>
    )
}

CarByYear.propTypes = {
    onYearOption: PropTypes.func.isRequired,
    handleChange : PropTypes.func.isRequired,
    year: PropTypes.string.isRequired
}

export default CarByYear
