function formatTime(a) {
    const inHour = 60;
    const inDay = 24;  
    let minutes = a % inHour;
    let leftMinutes = (a - minutes) / inHour;
    let hours = leftMinutes % inDay;
    let days = (leftMinutes - hours) / inDay;
    return days + 'day(s)' + hours + 'hour(s)' + minutes + 'minute(s).';
}
formatTime();

