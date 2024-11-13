type dateFormatOptionsType = {
    year?: 'numeric' | '2-digit' | undefined,
    month: 'short' | 'long' | 'narrow',
    weekday?: 'short' | 'long' | 'narrow' | undefined,
    day: 'numeric' | '2-digit',
}

export const formatDate = (date: Date | string, options:dateFormatOptionsType) => {
    const d = new Date(date)

    return new Intl.DateTimeFormat('en-US', options).format(d)
}