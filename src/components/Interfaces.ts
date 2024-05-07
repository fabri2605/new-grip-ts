export interface formObj {
    'subtitle': string;
    'version': number;
    'active': boolean;
    'title': string;
    'id': number;
    'type': string;
    [key: string]: string | number | boolean; // Index signature
}