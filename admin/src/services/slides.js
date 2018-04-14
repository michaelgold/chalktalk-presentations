import React from 'react';
import { List, Edit, Create, Datagrid, TextField, EditButton,
    DisabledInput, TextInput, SimpleForm, ReferenceInput, NumberInput, SelectInput} from 'admin-on-rest';


export const SlidesCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Presentation" source="presentation_id" defaulValue={props.presentation_id} reference="presentations"  allowEmpty>
                <SelectInput optionText="title" />
            </ReferenceInput>
            <NumberInput label="Order" source="order" />
            <TextInput label="Title" source="title" />
            <TextInput label="Slide Caption" source="caption" />
            <TextInput label="Image" source="image" />
        </SimpleForm>
    </Create>
);