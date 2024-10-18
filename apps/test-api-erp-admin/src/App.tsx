import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { InventoryList } from "./inventory/InventoryList";
import { InventoryCreate } from "./inventory/InventoryCreate";
import { InventoryEdit } from "./inventory/InventoryEdit";
import { InventoryShow } from "./inventory/InventoryShow";
import { SalesList } from "./sales/SalesList";
import { SalesCreate } from "./sales/SalesCreate";
import { SalesEdit } from "./sales/SalesEdit";
import { SalesShow } from "./sales/SalesShow";
import { PurchasingList } from "./purchasing/PurchasingList";
import { PurchasingCreate } from "./purchasing/PurchasingCreate";
import { PurchasingEdit } from "./purchasing/PurchasingEdit";
import { PurchasingShow } from "./purchasing/PurchasingShow";
import { FinancialList } from "./financial/FinancialList";
import { FinancialCreate } from "./financial/FinancialCreate";
import { FinancialEdit } from "./financial/FinancialEdit";
import { FinancialShow } from "./financial/FinancialShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"test api erp"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Inventory"
          list={InventoryList}
          edit={InventoryEdit}
          create={InventoryCreate}
          show={InventoryShow}
        />
        <Resource
          name="Sales"
          list={SalesList}
          edit={SalesEdit}
          create={SalesCreate}
          show={SalesShow}
        />
        <Resource
          name="Purchasing"
          list={PurchasingList}
          edit={PurchasingEdit}
          create={PurchasingCreate}
          show={PurchasingShow}
        />
        <Resource
          name="Financial"
          list={FinancialList}
          edit={FinancialEdit}
          create={FinancialCreate}
          show={FinancialShow}
        />
      </Admin>
    </div>
  );
};

export default App;
