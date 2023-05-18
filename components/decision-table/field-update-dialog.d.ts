import React from 'react';
import { SchemaSelectProps } from '../../helpers/components';
import { TableSchemaItem } from './dt.context';
export type FieldUpdateProps = {
    id?: string;
    field?: TableSchemaItem;
    onSuccess?: (column: TableSchemaItem) => void;
    onDismiss?: () => void;
    isOpen?: boolean;
    schema?: SchemaSelectProps[];
};
export declare const FieldUpdate: React.FC<React.PropsWithChildren<FieldUpdateProps>>;
//# sourceMappingURL=field-update-dialog.d.ts.map