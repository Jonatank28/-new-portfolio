import React from 'react'
import InputMask from 'react-input-mask'

interface Props {
    register: any
    errors: any
    name: string
    type: string
    mask?: boolean
    required?: boolean
    placeholder: string
}

const Input = ({
    errors,
    register,
    name,
    type,
    mask,
    required,
    placeholder,
}: Props) => {
    return (
        <div className="w-full">
            {mask ? (
                <InputMask
                    className="w-full bg-secondary p-3 outline-none rounded-md border border-transparent focus:border-b-[var(--decoration)]"
                    id={name}
                    mask="(99) 9999-99999"
                    type={type}
                    {...register(name, {
                        required,
                    })}
                    placeholder={placeholder}
                />
            ) : (
                <input
                    className="w-full bg-secondary p-3 outline-none rounded-md border border-transparent focus:border-b-[var(--decoration)]"
                    id={name}
                    type={type}
                    {...register(name, {
                        required,
                    })}
                    placeholder={placeholder}
                />
            )}
            {errors[name] && (
                <div className="text-red-500 text-xs pt-1">
                    {required && errors[name].type === 'required'
                        ? 'Campo obrigatório'
                        : null}
                </div>
            )}
        </div>
    )
}

export default Input
