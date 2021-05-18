

export class Book {

    // below properties should match with
    // JSON data returned from REST API
    id: string;
    sku: string;
    name: string;
    description: string;
    unitPrice: number;
    imageUrl : string;
    active: boolean;
    unitsInStock: number;
    dateCreated: Date;
    lastUpdated: Date;
}
