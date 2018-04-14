
import React from 'react';
import { Admin, Resource } from 'admin-on-rest';
import { authClient, restClient } from 'aor-feathers-client';
import feathersClient from './feathersClient';
import { UsersList, UsersEdit, UsersCreate } from './services/users';
import { PresentationsList, PresentationsEdit, PresentationsCreate } from './services/presentations';
//import { PostList } from './posts';
import { Delete } from 'admin-on-rest/lib/mui';
import {SlidesCreate} from "./services/slides";


const authClientOptions = {
    storageKey: 'feathers-jwt',
    authenticate: { strategy: 'local' },
};

// to rename id field for *all* resources use this syntax:
const options = { id: '_id' };

// to rename id field(s) for specific resources use this syntax:
// const options = {'my-resource': {id: '_id'}};

// Use HTTP PATCH method instead of PUT to implement UPDATE
// const options = { usePatch: true };

const App = () => (
    <Admin
        title="Chalktalk Presentations"
        authClient={authClient(feathersClient, authClientOptions)}
        restClient={restClient(feathersClient, options)}
    >
        {permissions => [
            permissions === 'admin' ?
                <Resource name="users"
                          list={UsersList}
                          edit={UsersEdit}
                          create={UsersCreate}
                          remove={Delete}
                /> : null,
                <Resource name="presentations"
                          list={PresentationsList}
                          edit={PresentationsEdit}
                          create={PresentationsCreate}
                          remove={Delete}
                />,
                <Resource name="slides" create={SlidesCreate} />
        ]}

    </Admin>
);

//debugger;


export default App;