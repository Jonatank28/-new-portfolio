import { useForm, SubmitHandler } from 'react-hook-form'
import emailjs from 'emailjs-com'
import Input from '../Form/Input'
import Area from '../Form/Area'
import Button from '../Form/Button'
import { useState } from 'react'
import useLanguage from '@/hooks/useLanguage'

interface FormData {
    name: string
    email: string
    subject: string
    telephone: string
    message: string
}
interface SendMessage {
    message: string
    sucess: boolean
}

const Form = () => {
    const [sendMessage, setSendMessage] = useState<SendMessage | null>(null)
    const { language } = useLanguage()

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormData>()

    // Envia email para: 'jonatankalmeidakk28@gmail.com'
    const onSubmit: SubmitHandler<FormData> = async (values) => {
        try {
            await sendEmail(values)
            reset()
            setSendMessage({
                message:
                    language === 'pt'
                        ? 'Mensagem enviada com sucesso!'
                        : 'Message sent successfully!',
                sucess: true,
            })
        } catch (error) {
            setSendMessage({
                message:
                    language === 'pt'
                        ? 'Erro ao enviar a mensagem, tente novamente!'
                        : 'Error sending message, please try again!',
                sucess: false,
            })
        }
        setTimeout(() => {
            setSendMessage(null)
        }, 4000)
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
        } catch (error) {
            throw error
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-lg">
                {language === 'pt'
                    ? 'Me mande uma mensagem'
                    : 'Send me a message'}{' '}
            </h1>
            <div className="space-y-4 pt-8">
                <div className="flex flex-col md:flex-row gap-4">
                    <Input
                        errors={errors}
                        register={register}
                        name="name"
                        type="string"
                        required
                        placeholder={language === 'pt' ? 'Nome' : 'Name'}
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
                <div className="flex flex-col md:flex-row gap-4">
                    <Input
                        errors={errors}
                        register={register}
                        type="string"
                        name="subject"
                        placeholder={language === 'pt' ? 'Assunto' : 'Subject'}
                    />
                    <Input
                        errors={errors}
                        register={register}
                        type="text"
                        mask
                        name="telephone"
                        placeholder={
                            language === 'pt' ? 'Telefone' : 'Telephone'
                        }
                    />
                </div>
                <div>
                    <Area
                        errors={errors}
                        register={register}
                        required
                        name="message"
                        placeholder={
                            language === 'pt'
                                ? 'Digite sua mensagem...'
                                : 'Type your message...'
                        }
                    />
                </div>
                <div className="w-full text-right">
                    <Button
                        title={
                            isSubmitting
                                ? language === 'pt'
                                    ? 'Enviando mensagem'
                                    : 'Sending message'
                                : language === 'pt'
                                ? 'Enviar mensagem'
                                : 'Send message'
                        }
                        disabled={isSubmitting}
                        className="border-[#03DAC5] bg-[#03DAC5] text-secondary"
                    />
                </div>
                {/* Mensagem de envio de email */}
                {sendMessage && (
                    <div
                        className={`${
                            sendMessage.sucess ? 'bg-green-600' : 'bg-red-600'
                        }  p-2 rounded-lg text-sm`}
                    >
                        <p>{sendMessage.message}</p>
                    </div>
                )}
            </div>
        </form>
    )
}

export default Form
