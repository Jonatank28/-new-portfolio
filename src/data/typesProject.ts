import { typeProjectTypes } from '@/types/typeProjectTypes'

export const typesProject: { [language: string]: typeProjectTypes[] } = {
    pt: [
        {
            id: 1,
            title: 'Todos',
            color: 'blue',
        },
        {
            id: 2,
            title: 'Sistemas',
            color: '#c4b5fd',
        },
        {
            id: 3,
            title: 'subSistemas',
            color: '#FFC0CB',
        },
    ],
    en: [
        {
            id: 1,
            title: 'All',
            color: 'blue',
        },
        {
            id: 2,
            title: 'Systems',
            color: '#F5F5DC',
        },
        {
            id: 3,
            title: 'subSystems',
            color: '#FFC0CB',
        },
    ],
}
