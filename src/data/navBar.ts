import { navItemTypes } from '@/types/navItemTypes'

export const navBar: { [language: string]: navItemTypes[] } = {
    br: [
        {
            id: 1,
            href: '#home',
            title: 'Início',
        },
        {
            id: 2,
            href: '#about',
            title: 'Sobre',
        },
        {
            id: 3,
            href: '#skills',
            title: 'Habilidades',
        },
        {
            id: 4,
            href: '#projects',
            title: 'Projetos',
        },
        {
            id: 5,
            href: '#contact',
            title: 'Contato',
        },
    ],
    en: [
        {
            id: 1,
            href: '#home',
            title: 'Home',
        },
        {
            id: 2,
            href: '#about',
            title: 'About',
        },
        {
            id: 3,
            href: '#skills',
            title: 'Skills',
        },
        {
            id: 4,
            href: '#projects',
            title: 'Projects',
        },
        {
            id: 5,
            href: '#contact',
            title: 'Contact',
        },
    ],
}
