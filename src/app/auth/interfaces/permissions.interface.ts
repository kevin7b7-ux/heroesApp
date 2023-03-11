export interface Permissions {

    rol: string;
    options: Option[];

}

export interface Option {
    
    label: string;
    icon: string;
    url: string;
    type: string;
    color?: string;
}


