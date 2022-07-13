// Va ser utilizada para crear o actualizar una instacia en la Base de Datos
// se utiliza en el Backend
export interface iCatalogueAttributes {
    id?: number;
    description: string;
    status?: boolean;
}

// Va ser utilizada cuando hagamos una peticion a la base de datos o se nos
// retorne información de la Base de Datos
export interface iCatalogueInstance {
    id: number;
    description: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
}
