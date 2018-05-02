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
import addUploadFeature from './addUploadFeature';


const authClientOptions = {
  storageKey: "feathers-jwt",
  authenticate: { strategy: "local" }
};

// to rename id field for *all* resources use this syntax:
const options = { id: "_id" };

// to rename id field(s) for specific resources use this syntax:
// const options = {'my-resource': {id: '_id'}};

// Use HTTP PATCH method instead of PUT to implement UPDATE
// const options = { usePatch: true };

const App = () => (
  <Admin
    title="Chalktalk Presentations"
    authClient={authClient(feathersClient, authClientOptions)}
    restClient={addUploadFeature(restClient(feathersClient, options))}
  >
    {permissions => [
      <Resource
        name="users"
        list={permissions === "admin" ? UsersList : null}
        edit={permissions === "admin" ? UsersEdit : null}
        create={permissions === "admin" ? UsersCreate : null}
        remove={permissions === "admin" ? Delete : null}
      />,
      <Resource
        name="presentations"
        list={PresentationsList}
        edit={PresentationsEdit}
        create={PresentationsCreate}
        remove={Delete}
      />,
    <Resource name="slides" create={SlidesCreate} edit={SlidesEdit} list={SlidesList} />
    ]}
  </Admin>
);

//debugger;
console.log("auth");

export default App;
