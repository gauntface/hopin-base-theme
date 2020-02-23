import { Variable } from './_variable-group';
export declare function createVariableTable(variables: Variable[]): HTMLElement;
export declare function createTable(data: VARIABLE_TABLE): HTMLElement;
interface VARIABLE_TABLE {
    columns: string[];
    rows: Array<Array<string | HTMLElement>>;
}
export {};
