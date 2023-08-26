export const formatPhoneNumber = (input: string) => {
    const numericValue = input.replace(/\D/g, '')

    const isCellPhone = numericValue.length === 11
    const areaCode = numericValue.substring(0, 2)
    const middleDigits = isCellPhone
        ? numericValue.substring(2, 7)
        : numericValue.substring(2, 6)
    const lastDigits = numericValue.substring(isCellPhone ? 7 : 6)

    const formattedPhoneNumber = `(${areaCode}) ${middleDigits}-${lastDigits}`
    return formattedPhoneNumber
}
