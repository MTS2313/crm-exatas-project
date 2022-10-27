import TableComponent from "./components/Table/Table";
import productSchema from "./assets/data/stock/product.schema";
import './assets/styles/scss/App.scss';


export default function App(){
    const fakeDataProducts = [
        {
            id: "1",
            description: "Lorem ipsum dolor sit amet...",
            date_of_register:"12/03/2023",
            cost: "R$600,00",
            value: "R$1200,00"
        },
        {
            id: "2",
            description: "gsdfs Lorem fsdf.",
            date_of_register:"9/03/2021",
            cost: "R$900,00",
            value: "R$700,00"
        },
        {
            id: "4",
            description: "gsfsd.",
            date_of_register:"9/03/2021",
            cost: "R$900,00",
            value: "R$700,00"
        }
    ]
    return (
        <div className="container-app">
            <TableComponent schema={productSchema} data={fakeDataProducts} />
        </div>
    )
}  