interface Props {
    title: string
}

const Tag = ({ title }: Props) => {
    return (
        <div className="text-sm bg-decoration p-2 rounded-lg text-black/60">
            {title}
        </div>
    )
}

export default Tag
