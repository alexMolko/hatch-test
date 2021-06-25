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
import Switch from '@material-ui/core/Switch';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const QuoteCar = ({handleFormChange,onQuoteCar,quoteCar,infoQuoteCar}) => {
    return (
        <>
            <FormControl style={{minWidth : "200px"}}>
              <InputLabel htmlFor="brand">Marca del coche</InputLabel>
              <Select
                id="brand" 
                name="brand" 
                onChange={handleFormChange}
              >
                <MenuItem value={'Chevrolet'}>Chevrolet</MenuItem>
                <MenuItem value={'Dodge'}>Dodge</MenuItem>
                <MenuItem value={'Ford'}>Ford</MenuItem>
                <MenuItem value={'GMC'}>GMC </MenuItem>
                <MenuItem value={'Honda'}>Honda</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="year">Año del coche</InputLabel>
              <Input type="number" id="year" name="year" onChange={handleFormChange} />
            </FormControl>
            <FormControlLabel
                control={(
                  <Switch
                  id="hasAC"
                  name="hasAC"
                  checked={quoteCar.hasAC}
                  onChange={handleFormChange}
                  />
                )}
                label="AC?"
              />
            <FormControl>
              <Button variant="contained" color="primary" onClick = {() => onQuoteCar(quoteCar) } >
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
                   {infoQuoteCar.map(el => ([ 
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

QuoteCar.propTypes = {
  handleFormChange: PropTypes.func.isRequired,
  onQuoteCar : PropTypes.func.isRequired,
}

export default QuoteCar
