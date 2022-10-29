import React from "react";
import Header from "../../../components/GlobalComponents/Header/Header";
import TableLayout from "./Table/TableProduct";
import productDataList from "./Modals/data/testProductData";
import schema from "../../../assets/data/stock/product.schema";
import "./Modals/style/Stock.scss";
import { StockContextProvider } from "./Context/StockContext";

function Stock() {
  return (
    <StockContextProvider>
      <div className="Stock">
        <Header
          PageName={"Produtos"}
          SubPageName="s"
          hasReport={true}
          hasAddButton={true}
        />
        <div className="TableContent">
          <TableLayout data={productDataList} schema={schema} />
        </div>
      </div>
    </StockContextProvider>
  );
}

export default Stock;
