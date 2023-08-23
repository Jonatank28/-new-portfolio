import { projectTypes } from '@/types/projectTypes'

export const projects: { [language: string]: projectTypes[] } = {
    pt: [
        {
            id: 25,
            title: 'Food Explorer',
            description:
                'Projeto final do programa Explorer da Rocketseat, o mesmo é um aplicativo de pedir comida, com a possibilidade de adicionar e remover itens do carrinho.',
            typeID: 2,
            image: 'carousel/foodExplorer/home.jpg',
            imageCarousel: [
                'carousel/foodExplorer/home.jpg',
                'carousel/foodExplorer/pedidos.jpg',
                'carousel/foodExplorer/mobile.jpg',
            ],
            repository: 'https://github.com/Jonatank28/Explorer-FoodExplorer',
            link: 'https://foodexplorer.johncode.tech',
            tecs: [
                'Next.js',
                'Tailwind',
                'Axios',
                'server Componentes',
                'Formik',
                'Yup',
                'Node.js',
                'MySQL',
                'JWT',
            ],
        },
        {
            id: 26,
            title: 'Chat Gpt',
            description:
                'Sistema de chat, inspirado no ChatGpt da OpenAI, com a possibilidade de enviar mensagens, e receber respostas.',
            typeID: 3,
            image: 'carousel/chatGpt/home.jpg',
            imageCarousel: [
                'carousel/chatGpt/home.jpg',
                'carousel/chatGpt/mobile.jpg',
            ],
            repository: 'https://github.com/Jonatank28/chat-gpt-clone',
            link: 'https://chat-gpt-clone-jonatank28.vercel.app/',
            tecs: ['Next.js', 'Tailwind', 'Axios', 'server Componentes'],
        },
        {
            id: 27,
            title: 'John Notes',
            description:
                'Sistema que possibilita a criação de notas e listas de tarefas, com a possibilidade de editar, excluir e favoritar as notas.',
            typeID: 2,
            image: 'carousel/jhonNotes/notesDark2.jpg',
            imageCarousel: [
                'carousel/jhonNotes/notesDark2.jpg',
                'carousel/jhonNotes/notesNewNote.jpg',
                'carousel/jhonNotes/notesWhite.jpg',
                'carousel/jhonNotes/opcoesTag.jpg',
            ],
            repository: 'https://github.com/Jonatank28/Projeto-Notes',
            link: 'https://projeto-notes.vercel.app',
            tecs: ['Next.js', 'Tailwind', 'Formik', 'Yup'],
        },
        {
            id: 28,
            title: 'Poke Next',
            description:
                'Pokedex desenvolvida em Next.js, com a possibilidade de pesquisar pokemons, ver detalhes.',
            typeID: 3,
            image: '/pokeNext.png',
            imageCarousel: [
                'carousel/pokeNext/home.jpg',
                'carousel/pokeNext/descricao.jpg',
            ],
            repository: 'https://github.com/Jonatank28/Pokedex-em-Next',
            link: 'https://pokedex-em-next.vercel.app',
            tecs: ['Next.js', 'Stitches', 'Axios'],
        },
        {
            id: 29,
            title: 'GitFav',
            description:
                'Projeto desenvolvido no curso Explorer da Rocketseat, com o intuito de favoritar repositórios do github, e ver detalhes do mesmo.',
            typeID: 3,
            image: 'gitFav.jpg',
            imageCarousel: [
                'carousel/GitFav/home.jpg',
                'carousel/GitFav/remover.jpg',
            ],
            repository: 'https://github.com/Jonatank28/GITHUB-FAVORITES',
            link: 'https://jonatank28.github.io/GITHUB-FAVORITES/',
            tecs: ['JavaScript', 'HTML', 'CSS'],
        },
        {
            id: 30,
            title: 'FocusTimer',
            description:
                'Projeto desenvolvido no curso Explorer da Rocketseat, o memso é um timer para foco, com a possibilidade de pausar, e reiniciar o timer.',
            typeID: 3,
            image: 'FocusTimer.jpg',
            imageCarousel: [
                'carousel/FocusTimer/ligth.jpg',
                'carousel/FocusTimer/dark.jpg',
            ],
            repository: 'https://github.com/Jonatank28/FocusTimer2.0-DarkMode',
            link: 'https://jonatank28.github.io/FocusTimer2.0-DarkMode/',
            tecs: ['JavaScript', 'HTML', 'CSS'],
        },
    ],
    en: [
        {
            id: 25,
            title: 'Food Explorer',
            description:
                'Final project of the Rocketseat Explorer program, it is a food ordering application, with the possibility of adding and removing items from the cart.',
            typeID: 2,
            image: 'carousel/foodExplorer/home.jpg',
            imageCarousel: [
                'carousel/foodExplorer/home.jpg',
                'carousel/foodExplorer/pedidos.jpg',
                'carousel/foodExplorer/mobile.jpg',
            ],
            repository: 'https://github.com/Jonatank28/Explorer-FoodExplorer',
            link: 'https://foodexplorer.johncode.tech',
            tecs: [
                'Next.js',
                'Tailwind',
                'Axios',
                'server Componentes',
                'Formik',
                'Yup',
                'Node.js',
                'MySQL',
                'JWT',
            ],
        },
        {
            id: 26,
            title: 'Chat Gpt',
            description:
                "Chat system, inspired by OpenAI's ChatGpt, with the possibility of sending messages, and receiving responses.",
            typeID: 3,
            image: 'carousel/chatGpt/home.jpg',
            imageCarousel: [
                'carousel/chatGpt/home.jpg',
                'carousel/chatGpt/mobile.jpg',
            ],
            repository: 'https://github.com/Jonatank28/chat-gpt-clone',
            link: 'https://chat-gpt-clone-jonatank28.vercel.app/',
            tecs: ['Next.js', 'Tailwind', 'Axios', 'server Componentes'],
        },
        {
            id: 27,
            title: 'John Notes',
            description:
                'System that allows the creation of notes and task lists, with the possibility of editing, deleting and favoring the notes.',
            typeID: 2,
            image: 'carousel/jhonNotes/notesDark2.jpg',
            imageCarousel: [
                'carousel/jhonNotes/notesDark2.jpg',
                'carousel/jhonNotes/notesNewNote.jpg',
                'carousel/jhonNotes/notesWhite.jpg',
                'carousel/jhonNotes/opcoesTag.jpg',
            ],
            repository: 'https://github.com/Jonatank28/Projeto-Notes',
            link: 'https://projeto-notes.vercel.app',
            tecs: ['Next.js', 'Tailwind', 'Formik', 'Yup'],
        },
        {
            id: 28,
            title: 'Poke Next',
            description:
                'Pokedex developed in Next.js, with the possibility of searching for pokemons, viewing details.',
            typeID: 3,
            image: '/pokeNext.png',
            imageCarousel: [
                'carousel/pokeNext/home.jpg',
                'carousel/pokeNext/descricao.jpg',
            ],
            repository: 'https://github.com/Jonatank28/Pokedex-em-Next',
            link: 'https://pokedex-em-next.vercel.app',
            tecs: ['Next.js', 'Stitches', 'Axios'],
        },
        {
            id: 29,
            title: 'GitFav',
            description:
                'Project developed in the Rocketseat Explorer course, in order to bookmark github repositories, and see details of it.',
            typeID: 3,
            image: 'gitFav.jpg',
            imageCarousel: [
                'carousel/GitFav/home.jpg',
                'carousel/GitFav/remover.jpg',
            ],
            repository: 'https://github.com/Jonatank28/GITHUB-FAVORITES',
            link: 'https://jonatank28.github.io/GITHUB-FAVORITES/',
            tecs: ['JavaScript', 'HTML', 'CSS'],
        },
        {
            id: 30,
            title: 'FocusTimer',
            description:
                'Project developed in the Rocketseat Explorer course, it is a focus timer, with the possibility of pausing, and restarting the timer.',
            typeID: 3,
            image: 'FocusTimer.jpg',
            imageCarousel: [
                'carousel/FocusTimer/ligth.jpg',
                'carousel/FocusTimer/dark.jpg',
            ],
            repository: 'https://github.com/Jonatank28/FocusTimer2.0-DarkMode',
            link: 'https://jonatank28.github.io/FocusTimer2.0-DarkMode/',
            tecs: ['JavaScript', 'HTML', 'CSS'],
        },
    ],
}
