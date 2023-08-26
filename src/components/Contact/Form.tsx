import { useForm, SubmitHandler } from 'react-hook-form'
import emailjs from 'emailjs-com'
import Input from '../Form/Input'
import Area from '../Form/Area'
import Button from '../Form/Button'
import { useState } from 'react'

interface FormData {
    name: string
    email: string
    subject: string
    telephone: string
    message: string
}

const Form = () => {
    const [sendMessage, setSendMessage] = useState<boolean>(false)

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormData>()

    // Envia email para o email 'jonatankalmeidakk28@gmail.com'
    const onSubmit: SubmitHandler<FormData> = async (values) => {
        try {
            await sendEmail(values)
            setSendMessage(true)

            setTimeout(() => {
                setSendMessage(false)
            }, 4000)
        } catch (error) {
            console.error('Erro ao enviar o e-mail:', error)
        }
    }

    // Função para enviar o e-mail com o serviço do EmailJS
    const sendEmail = async (values: FormData) => {
        try {
            await emailjs.send(
                'service_k21iesm',
                'template_yg7habx',
                {
                    from_name: values.name,
                    from_email: values.email,
                    subject: values.subject,
                    telephone: values.telephone,
                    message: values.message,
                },
                'HGj7UBc6tZzJNEO9g'
            )
            console.log('E-mail enviado com sucesso!')
        } catch (error) {
            console.log('Erro ao enviar o e-mail:', error)
            throw error
        }
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
                <Button
                    title={
                        isSubmitting ? 'Enviando mensagem' : 'Enviar mensagem'
                    }
                    disabled={isSubmitting}
                    className="border-[#03DAC5]"
                />
                {sendMessage && (
                    <div className="bg-green-600 p-2 rounded-lg">
                        <p>Mensagem enviada com sucesso!</p>
                    </div>
                )}
            </div>
        </form>
    )
}

export default Form
