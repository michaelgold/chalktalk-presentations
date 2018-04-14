import React from 'react';
import { List, Edit, Create, Datagrid, TextField, EditButton,
    DisabledInput, TextInput, SimpleForm } from 'admin-on-rest';

export const UsersList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField label= "_id" source="_id" />
            <TextField label= "Name" source="name" />
            <TextField label="E-mail" source="email" />
            <TextField label="Role" source="roles" />
            <EditButton />
        </Datagrid>
    </List>
);


export const UsersEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="_id" />
            <TextInput label= "Name" source="name" />
            <TextInput label="E-mail" source="email" />
            <TextInput label="Role" source="roles" />
            <TextInput label="Password" source="password" />
        </SimpleForm>
    </Edit>
);


export const UsersCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label= "Name" source="name" />
            <TextInput label="E-mail" source="email" />
            <TextInput label="Role" source="roles" />
            <TextInput label="Password" source="password" />
        </SimpleForm>
    </Create>
);

