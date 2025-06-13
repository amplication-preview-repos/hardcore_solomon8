import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { NewsList } from "./news/NewsList";
import { NewsCreate } from "./news/NewsCreate";
import { NewsEdit } from "./news/NewsEdit";
import { NewsShow } from "./news/NewsShow";
import { NewsMediaList } from "./newsMedia/NewsMediaList";
import { NewsMediaCreate } from "./newsMedia/NewsMediaCreate";
import { NewsMediaEdit } from "./newsMedia/NewsMediaEdit";
import { NewsMediaShow } from "./newsMedia/NewsMediaShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"News"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="News"
          list={NewsList}
          edit={NewsEdit}
          create={NewsCreate}
          show={NewsShow}
        />
        <Resource
          name="NewsMedia"
          list={NewsMediaList}
          edit={NewsMediaEdit}
          create={NewsMediaCreate}
          show={NewsMediaShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
