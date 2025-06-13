import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const NewsMediaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="type" source="typeField" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};
