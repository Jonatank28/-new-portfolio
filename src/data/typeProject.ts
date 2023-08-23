import { typeProjectTypes } from '@/types/typeProjectTypes'

export const typeProject: { [language: string]: typeProjectTypes[] } = {
    pt: [
        {
            id: 1,
            title: 'Todos',
        },
        {
            id: 2,
            title: 'Sistemas',
        },
        {
            id: 3,
            title: 'subSistemas',
        },
    ],
    en: [
        {
            id: 1,
            title: 'All',
        },
        {
            id: 2,
            title: 'Systems',
        },
        {
            id: 3,
            title: 'subSystems',
        },
    ],
}
