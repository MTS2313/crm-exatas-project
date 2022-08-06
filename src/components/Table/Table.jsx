import { Table } from 'react-bootstrap'
import '../../assets/styles/scss/Table/Table.scss'
import ButtonPopup from './ButtonPopup'


const TableLayout = ({ schema, data }) => {


    function buildRow(dataItem){
        return (
            <tr>
                {schema.properties.map((schemaItem) => {
                    return (
                        <td 
                            colSpan={schemaItem.colgap}
                            className={schemaItem.bold && 'bold'}
                            >

                           {dataItem[schemaItem.entityName]}

                        </td>
                    )
                })}
                <td>
                    <ButtonPopup 
                        onDelete={() => console.log('delete')} 
                        onUpdate={() => console.log('update')} 
                        />
                </td>
            </tr>
        )
    }

    return (
        <Table responsive className='tablelayout' cellspacing="0"> 
            <thead>
                <tr>
                    {schema.properties.map(({name,colgap}, index) => (
                        <th colSpan={colgap} key={index}>
                            {name}
                        </th>
                    ))}

                    <th key='options'>
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => buildRow(item))}
            </tbody>
      </Table>
    )
}

export default TableLayout