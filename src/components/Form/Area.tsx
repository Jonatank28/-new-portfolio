import useLanguage from '@/hooks/useLanguage'

interface Props {
    register: any
    errors: any
    name: string
    required?: boolean
    placeholder: string
}

const Area = ({ errors, register, name, required, placeholder }: Props) => {
    const { language } = useLanguage()

    return (
        <div className="w-full">
            <textarea
                className="w-full h-44 bg-secondary p-2 outline-none rounded-md border border-transparent focus:border-b-[var(--decoration)]"
                id={name}
                {...register(name, {
                    required,
                })}
                placeholder={placeholder}
            />
            {errors[name] && (
                <div className="text-red-500 text-xs ">
                    {required && errors[name].type === 'required'
                        ? language === 'pt'
                            ? 'Campo obrigatório'
                            : 'Required field'
                        : null}
                </div>
            )}
        </div>
    )
}

export default Area
