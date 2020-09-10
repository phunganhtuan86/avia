export declare type Multiple<T> = T | T[] | undefined;
export declare type Hash<T> = {
    [key: string]: T;
};
export declare type Serialization = any;
export interface Document {
    data?: Multiple<Resource>;
    links?: any;
    included?: Resource[] | undefined;
}
export interface ResourceId {
    id: string;
    type: string;
    links?: any;
}
export interface Resource extends ResourceId {
    attributes: any;
    relationships?: Hash<RelationshipObj>;
}
export interface RelationshipObj {
    data?: Multiple<ResourceId>;
    links?: any;
    meta?: any;
}
export declare type RelationsHash = Hash<Hash<Resource>>;
