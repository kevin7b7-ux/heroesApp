export const environment = {
    baseUrl: ' http://localhost:3000',
    permissions: [
        {
            rol:'admin',
            options:[
                { label: "Listado",  icon:'label', url: './list', type: 'item-menu'},
                { label: "Buscar", icon:'search',  url: './search', type: 'item-menu'},
                { label: "Añadir", icon:'add', url: './new-hero', type: 'item-menu'},
                { label: "Editar", icon:'edit', url: '/heroes/edit', type: 'card-action', color:'primary'},
                { label: "More", icon:'more_horiz', url: '/heroes/', type: 'card-action'},
            ]
        },
        {
            rol:'basic',
            options:[
                { label: "Listado", icon:'label',  url: './list', type: 'item-menu'},
                { label: "Buscar", icon:'search',  url: './search', type: 'item-menu'},
                { label: "More", icon:'more_horiz', url: '/heroes/', type: 'card-action'},

            ]
        },

    ]
}