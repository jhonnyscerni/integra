import { FuseNavigation } from '@fuse/types';


export const navigation: FuseNavigation[] = [
    
       
    {
        id       : '',
        title    : 'Aplicações',
        type     : 'group',
        icon     : 'apps',
        children : [
            {
                id       : 'dashboard',
                title    : 'Dashboard',
                type     : 'item',
                icon     : 'dashboard',
                url      : '/apps/dashboard',
            },
             {
                id       : 'lojas',
                title    : 'Lojas',
                type     : 'collapsable',
                icon     : 'location_on',
                children : [
                    {
                        id   : 'loja-list',
                        title: 'Gerenciar',
                        type : 'item',
                        icon : 'format_list_bulleted',
                        url  : '/apps/lojas/list'
                    },
                    {
                        id   : 'loja-edit',
                        title: 'Incluir',
                        type : 'item',
                        icon: 'add_circle_outline',
                        url  : '/apps/lojas/edit'
                    }
                ]
            }

           
        ]
    },

    {
        id       : 'produtos',
        title    : 'Produtos',
        type     : 'item',
        icon     : 'web',
        url      : '/apps/produtos/catalogo',
    },

];
