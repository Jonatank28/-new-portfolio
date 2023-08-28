import { linksContactTypes } from '@/types/linksContactTypes'
import {
    FaGithub,
    FaLinkedin,
    FaVoicemail,
    FaPhone,
    FaWhatsapp,
} from 'react-icons/fa'
import useLanguage from '@/hooks/useLanguage'

const linksContact = () => {
    const { language } = useLanguage()

    const data: linksContactTypes[] = [
        {
            id: 1,
            name: 'E-mail',
            content: 'jonatankalmeidakk28@gmail.com',
            url: 'mailto:jonatankalmeidakk28@gmail.com',
            icon: <FaVoicemail />,
        },
        {
            id: 2,
            name: language === 'pt' ? 'Telefone' : 'Telephone',
            content: '+55 49 98435-6670',
            url: 'tel:+5549984356670',
            icon: <FaPhone />,
        },
        {
            id: 3,
            name: 'Github',
            content: 'Jonatank28',
            url: 'https://github.com/Jonatank28',
            icon: <FaGithub />,
        },
        {
            id: 4,
            name: 'Linkedin',
            content: 'jonatan-s-almeida',
            url: 'https://www.linkedin.com/in/jonatan-s-almeida-4b817b226/',
            icon: <FaLinkedin />,
        },
        {
            id: 5,
            name: 'Whatsapp',
            content: '+55 49 98435-6670',
            url: 'https://api.whatsapp.com/send?phone=5549984356670&text=Ol%C3%A1%2C%20tudo%20bem%3F%20%20%20',
            icon: <FaWhatsapp />,
        },
    ]
    return data
}

export default linksContact
