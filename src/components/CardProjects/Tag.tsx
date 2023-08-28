interface Props {
    title: string
}

const Tag = ({ title }: Props) => {
    return (
        <div className="text-xs md:text-sm bg-decoration p-1 md:p-2 rounded-lg text-black/60">
            {title}
        </div>
    )
}

export default Tag
