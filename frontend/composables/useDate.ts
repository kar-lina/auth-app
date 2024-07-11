import dayjs from 'dayjs';

export const useDate = (date: Date, format='DD.MM.YYYY') => dayjs(date).format(format);
