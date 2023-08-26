import { useForm, SubmitHandler } from 'react-hook-form'
import Input from '../Form/Input'
import Area from '../Form/Area'
import Button from '../Form/Button'

const Form = () => {
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>()

    const onSubmit: SubmitHandler<FormData> = async (values) => {
        console.log('🚀 ~ data:', values)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-lg">Me mande uma mensagem</h1>
            <div className="space-y-4 pt-8">
                <div className="flex gap-4">
                    <Input
                        errors={errors}
                        register={register}
                        name="name"
                        type="string"
                        required
                        placeholder="Nome"
                    />
                    <Input
                        errors={errors}
                        register={register}
                        type="email"
                        name="email"
                        required
                        placeholder="Email"
                    />
                </div>
                <div className="flex gap-4">
                    <Input
                        errors={errors}
                        register={register}
                        type="string"
                        name="subject"
                        placeholder="Assunto"
                    />
                    <Input
                        errors={errors}
                        register={register}
                        type="text"
                        mask
                        name="telephone"
                        placeholder="Telefone"
                    />
                </div>
                <div>
                    <Area
                        errors={errors}
                        register={register}
                        required
                        name="message"
                        placeholder="Digite sua mensagem..."
                    />
                </div>
                <Button title="Enviar mensagem" className="border-[#03DAC5]" />
            </div>
        </form>
    )
}

export default Form
