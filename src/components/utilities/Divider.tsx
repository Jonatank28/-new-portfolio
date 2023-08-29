interface Props {
    className?: string
}

const Divider = ({ className }: Props) => {
    return <div className={`bg-decoration h-[1px] w-full ${className}`} />
}

export default Divider
