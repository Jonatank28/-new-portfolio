import { linksContactTypes } from '@/types/linksContactTypes'
import {
    FaGithub,
    FaLinkedin,
    FaVoicemail,
    FaPhone,
    FaWhatsapp,
} from 'react-icons/fa'

const linksContact = () => {
    const data: linksContactTypes[] = [
        {
            id: 1,
            name: 'E-mail',
            url: 'mailto:jonatankalmeidakk5@gmail.com',
            icon: <FaVoicemail />,
        },
        {
            id: 2,
            name: 'Telefone',
            url: 'tel:+5549984356670',
            icon: <FaPhone />,
        },
        {
            id: 3,
            name: 'Github',
            url: 'https://github.com/Jonatank28',
            icon: <FaGithub />,
        },
        {
            id: 4,
            name: 'Linkedin',
            url: 'https://www.linkedin.com/in/jonatan-s-almeida-4b817b226/',
            icon: <FaLinkedin />,
        },
        {
            id: 5,
            name: 'Whatsapp',
            url: 'https://api.whatsapp.com/send?phone=5549984356670&text=Ol%C3%A1%2C%20tudo%20bem%3F%20%20%20',
            icon: <FaWhatsapp />,
        },
    ]
    return data
}

export default linksContact
