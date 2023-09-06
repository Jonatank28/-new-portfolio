import { projectTypes } from '@/types/projectTypes'

export const projects: { [language: string]: projectTypes[] } = {
    pt: [
        {
            id: 25,
            title: 'Food Explorer',
            description:
                'Projeto final do programa Explorer da Rocketseat. Trata-se de um aplicativo de pedidos de comida com a capacidade de adicionar e remover itens do carrinho.',
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
                'Server Components',
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
                'Sistema de chat inspirado no ChatGpt da OpenAI, com a capacidade de enviar mensagens e receber respostas.',
            typeID: 3,
            image: 'carousel/chatGpt/home.jpg',
            imageCarousel: [
                'carousel/chatGpt/home.jpg',
                'carousel/chatGpt/mobile.jpg',
            ],
            repository: 'https://github.com/Jonatank28/chat-gpt-clone',
            link: 'https://chat-gpt-clone-jonatank28.vercel.app/',
            tecs: ['Next.js', 'Tailwind', 'Axios', 'Server Components'],
        },
        {
            id: 27,
            title: 'John Notes',
            description:
                'Sistema que possibilita a criação de notas e listas de tarefas, com a capacidade de editar, excluir e favoritar as notas.',
            typeID: 2,
            image: 'carousel/jhonNotes/p1.png',
            imageCarousel: [
                'carousel/jhonNotes/p1.png',
                'carousel/jhonNotes/p2.png',
                'carousel/jhonNotes/p3.png',
                'carousel/jhonNotes/p4.png',
            ],
            repository: 'https://github.com/Jonatank28/Projeto-Notes',
            link: 'https://projeto-notes.vercel.app/notes',

            tecs: ['Next.js', 'Tailwind', 'Formik', 'Yup'],
        },
        {
            id: 28,
            title: 'Poke Next',
            description:
                'Pokedex desenvolvida em Next.js, com a capacidade de pesquisar pokémons e ver detalhes.',
            typeID: 3,
            image: 'carousel/pokeNext/p1.png',
            imageCarousel: [
                'carousel/pokeNext/p1.png',
                'carousel/pokeNext/p2.png',
            ],
            repository: 'https://github.com/Jonatank28/Pokedex-em-Next',
            link: 'https://pokedex-em-next.vercel.app',
            tecs: ['Next.js', 'Stitches', 'Axios'],
        },
        {
            id: 29,
            title: 'GitFav',
            description:
                'Projeto desenvolvido no curso Explorer da Rocketseat, com o intuito de favoritar repositórios do GitHub e ver detalhes dos mesmos.',
            typeID: 3,
            image: 'carousel/GitFav/p1.png',
            imageCarousel: ['carousel/GitFav/p1.png', 'carousel/GitFav/p2.png'],
            repository: 'https://github.com/Jonatank28/GITHUB-FAVORITES',
            link: 'https://git-favorite-pi.vercel.app/',
            tecs: ['JavaScript', 'HTML', 'CSS'],
        },
        {
            id: 30,
            title: 'FocusTimer',
            description:
                'Projeto desenvolvido no curso Explorer da Rocketseat. É um temporizador de foco com a capacidade de pausar e reiniciar o temporizador.',
            typeID: 3,
            image: 'FocusTimer.png',
            imageCarousel: [
                'carousel/FocusTimer/p1.png',
                'carousel/FocusTimer/p2.png',
            ],
            repository: 'https://github.com/Jonatank28/FocusTimer2.0-DarkMode',
            link: 'https://focus-timer-dark-brown.vercel.app/',
            tecs: ['JavaScript', 'HTML', 'CSS'],
        },
        {
            id: 31,
            title: 'Formulários Modernos',
            description:
                'Projeto desenvolvido no programa Explorer da Rocketseat, com o objetivo de criar formulários modernos e acessíveis para os usuários.',
            typeID: 3,
            image: 'formularios.png',
            imageCarousel: [
                'carousel/formularios/p1.png',
                'carousel/formularios/p2.png',
                'carousel/formularios/p3.png',
            ],
            repository:
                'https://github.com/Jonatank28/Explorer-Criando-Formulários',
            link: 'https://rttyytyt.vercel.app/index.html',
            tecs: ['HTML', 'CSS'],
        },
        {
            id: 32,
            title: 'RocketNFT',
            description:
                'Projeto desenvolvido nos desafios do Discovery da Rocketseat.',
            typeID: 3,
            image: 'rocketNFT.png',
            imageCarousel: [
                'carousel/RocketNFT/p1.png',
                'carousel/RocketNFT/p2.png',
                'carousel/RocketNFT/p3.png',
            ],
            repository: 'https://github.com/Jonatank28/Desafio-Rocket-NFTs',
            link: 'https://jonatank28.github.io/Desafio-Rocket-NFTs/',
            tecs: ['HTML', 'CSS'],
        },
    ],
    en: [
        {
            id: 25,
            title: 'Food Explorer',
            description:
                "Final project of Rocketseat's Explorer program. It is a food ordering application with the ability to add and remove items from the cart.",
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
                'Server Components',
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
                "Chat system inspired by OpenAI's ChatGpt, with the ability to send messages and receive responses.",
            typeID: 3,
            image: 'carousel/chatGpt/home.jpg',
            imageCarousel: [
                'carousel/chatGpt/home.jpg',
                'carousel/chatGpt/mobile.jpg',
            ],
            repository: 'https://github.com/Jonatank28/chat-gpt-clone',
            link: 'https://chat-gpt-clone-jonatank28.vercel.app/',
            tecs: ['Next.js', 'Tailwind', 'Axios', 'Server Components'],
        },
        {
            id: 27,
            title: 'John Notes',
            description:
                'System that allows the creation of notes and to-do lists, with the ability to edit, delete, and favorite notes.',
            typeID: 2,
            image: 'carousel/jhonNotes/p1.png',
            imageCarousel: [
                'carousel/jhonNotes/p1.png',
                'carousel/jhonNotes/p2.png',
                'carousel/jhonNotes/p3.png',
                'carousel/jhonNotes/p4.png',
            ],
            repository: 'https://github.com/Jonatank28/Projeto-Notes',
            link: 'https://projeto-notes.vercel.app/notes',

            tecs: ['Next.js', 'Tailwind', 'Formik', 'Yup'],
        },
        {
            id: 28,
            title: 'Poke Next',
            description:
                'Pokedex developed in Next.js, with the ability to search for pokemons and view details.',
            typeID: 3,
            image: 'carousel/pokeNext/p1.png',
            imageCarousel: [
                'carousel/pokeNext/p1.png',
                'carousel/pokeNext/p2.png',
            ],
            repository: 'https://github.com/Jonatank28/Pokedex-em-Next',
            link: 'https://pokedex-em-next.vercel.app',
            tecs: ['Next.js', 'Stitches', 'Axios'],
        },
        {
            id: 29,
            title: 'GitFav',
            description:
                "Project developed in Rocketseat's Explorer course, aimed at favoriting GitHub repositories and viewing their details.",
            typeID: 3,
            image: 'carousel/GitFav/p1.png',
            imageCarousel: ['carousel/GitFav/p1.png', 'carousel/GitFav/p2.png'],
            repository: 'https://github.com/Jonatank28/GITHUB-FAVORITES',
            link: 'https://git-favorite-pi.vercel.app/',
            tecs: ['JavaScript', 'HTML', 'CSS'],
        },
        {
            id: 30,
            title: 'FocusTimer',
            description:
                "Project developed in Rocketseat's Explorer course. It is a focus timer with the ability to pause and restart the timer.",
            typeID: 3,
            image: 'FocusTimer.png',
            imageCarousel: [
                'carousel/FocusTimer/p1.png',
                'carousel/FocusTimer/p2.png',
            ],
            repository: 'https://github.com/Jonatank28/FocusTimer2.0-DarkMode',
            link: 'https://focus-timer-dark-brown.vercel.app/',
            tecs: ['JavaScript', 'HTML', 'CSS'],
        },
        {
            id: 31,
            title: 'Modern Forms',
            description:
                "Project developed in Rocketseat's Explorer program, where the goal is to create modern and accessible forms for users.",
            typeID: 3,
            image: 'formularios.png',
            imageCarousel: [
                'carousel/formularios/p1.png',
                'carousel/formularios/p2.png',
                'carousel/formularios/p3.png',
            ],
            repository:
                'https://github.com/Jonatank28/Explorer-Criando-Formularios',
            link: 'https://rttyytyt.vercel.app/index.html',
            tecs: ['HTML', 'CSS'],
        },
        {
            id: 32,
            title: 'RocketNFT',
            description:
                "Project developed in the challenges of Rocketseat's Discovery program.",
            typeID: 3,
            image: 'rocketNFT.png',
            imageCarousel: [
                'carousel/RocketNFT/p1.png',
                'carousel/RocketNFT/p2.png',
                'carousel/RocketNFT/p3.png',
            ],
            repository: 'https://github.com/Jonatank28/Desafio-Rocket-NFTs',
            link: 'https://jonatank28.github.io/Desafio-Rocket-NFTs/',
            tecs: ['HTML', 'CSS'],
        },
    ],
}
