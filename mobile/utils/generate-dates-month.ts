import dayjs from 'dayjs';

// Função para gerar as datas de um mês específico sem incluir dias adicionais para completar semanas
export function generateDatesForCurrentMonth() {
    const today = dayjs();  // Data atual
    const firstDayOfMonth = today.startOf('month');  // Primeiro dia do mês
    const lastDayOfMonth = today.endOf('month');  // Último dia do mês

    const dates = [];
    let currentDate = firstDayOfMonth;

    // Itera de um dia até o último dia do mês atual
    while (currentDate.isBefore(lastDayOfMonth) || currentDate.isSame(lastDayOfMonth)) {
        dates.push(currentDate.toDate());
        currentDate = currentDate.add(1, 'day'); // Adiciona um dia até chegar ao final do mês
    }

    return dates;
}
