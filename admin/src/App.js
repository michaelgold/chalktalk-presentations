import React from "react";
import { Admin, Resource } from "admin-on-rest";
import { authClient, restClient } from "aor-feathers-client";
import feathersClient from "./feathersClient";
import { UsersList, UsersEdit, UsersCreate } from "./services/users";
import {
  PresentationsList,
  PresentationsEdit,
  PresentationsCreate
} from "./services/presentations";
//import { PostList } from './posts';
import { Delete } from "admin-on-rest/lib/mui";
import { SlidesList, SlidesCreate, SlidesEdit } from "./services/slides";
import { ImagesList, ImagesCreate, ImagesEdit } from "./services/images";
import addUploadFeature from "./addUploadFeature";
import Dashboard from "./Dashboard";
import LoginPage from "./LoginPage";
import UsersIcon from 'material-ui/svg-icons/social/group';
import ImagesIcon from 'material-ui/svg-icons/image/collections';
import SlidesIcon from "material-ui/svg-icons/action/view-carousel";
import PresentationsIcon from 'material-ui/svg-icons/image/slideshow';

const authClientOptions = {
  storageKey: "feathers-jwt",
  authenticate: { strategy: "local" }
};

// to rename id field for *all* resources use this syntax:
const options = {
  id: "_id",
  usePatch: true
};

// to rename id field(s) for specific resources use this syntax:
// const options = {'my-resource': {id: '_id'}};

// Use HTTP PATCH method instead of PUT to implement UPDATE
// const options = { usePatch: true };

const App = () => (
  <Admin
    loginPage={LoginPage}
    dashboard={Dashboard}
    title="Chalktalk Presentations"
    authClient={authClient(feathersClient, authClientOptions)}
    restClient={addUploadFeature(restClient(feathersClient, options))}
  >
    {permissions => [
      <Resource
        name="users"
        icon = { UsersIcon }
        list={permissions === "admin" ? UsersList : null}
        edit={permissions === "admin" ? UsersEdit : null}
        create={permissions === "admin" ? UsersCreate : null}
        remove={permissions === "admin" ? Delete : null}
      />,
      <Resource
        name="presentations"
        icon = { PresentationsIcon }
        list={PresentationsList}
        edit={PresentationsEdit}
        create={PresentationsCreate}
        remove={Delete}
      />,
      <Resource
        name="slides"
        icon = { SlidesIcon }
        create={SlidesCreate}
        edit={SlidesEdit}
        list={SlidesList}
        remove={Delete}
      />,
      <Resource
        name="images"
        icon = { ImagesIcon }
        create={ImagesCreate}
        edit={ImagesEdit}
        list={ImagesList}
        remove={Delete}
      />
    ]}
  </Admin>
);

//debugger;
console.log("auth");

export default App;
