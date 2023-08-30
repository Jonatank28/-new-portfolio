import { useTheme } from 'next-themes'

interface Props {
    title: string
}

const Tag = ({ title }: Props) => {
    const { resolvedTheme } = useTheme()

    return (
        <div
            className={`text-xs md:text-sm bg-decoration p-1 md:p-2 rounded-lg ${
                resolvedTheme == 'dark' ? 'text-old' : 'text-white/60'
            } `}
        >
            {title}
        </div>
    )
}

export default Tag
