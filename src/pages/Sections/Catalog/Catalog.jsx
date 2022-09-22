import React from "react";
import Header from "../../../components/GlobalComponents/Header/Header";
import TableLayout from "./Table/Table";
import testSkuDataList from "./Modals/data/testSkuData";
import schema from "../../../assets/data/tables/product.schema";
import "./Modals/style/Catalog.scss"
function Catalog() {
  return (
    <div className="Catalog">
      <Header PageName={"Produtos"} SubPageName="s" hasReport={true} hasAddButton={true} />
      <div className="TableContent">
        <TableLayout data={testSkuDataList} schema={schema} />
      </div>
    </div>
  );
}

export default Catalog;
