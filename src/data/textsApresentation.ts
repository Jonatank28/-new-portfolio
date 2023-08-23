import { textsApresentationTypes } from '@/types/textsApresentationTypes'

export const textsApresentation: {
    [language: string]: textsApresentationTypes
} = {
    pt: {
        t1: 'Olá tudo bem,  ',
        t2: 'Sou Jonatan Desenvolvedor',
        t3: 'full stack',
    },
    en: {
        t1: 'About me',
        t2: 'Full stack developer',
        t3: `Hello! It's a pleasure to introduce myself to you. My name is
        `,
    },
}
