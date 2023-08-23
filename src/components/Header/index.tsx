import Desktop from './Desktop'
import Mobile from './Mobile'
import { useMediaQuery } from 'react-responsive'

const Header = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' })
    return isMobile ? <Mobile /> : <Desktop />
}

export default Header
