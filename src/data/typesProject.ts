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
            color: 'green',
        },
        {
            id: 3,
            title: 'subSistemas',
            color: 'orange',
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
            color: 'green',
        },
        {
            id: 3,
            title: 'subSystems',
            color: 'orange',
        },
    ],
}
