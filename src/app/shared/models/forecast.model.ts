export interface Forecast {
    humidity: number
    pressure: number
    temp: { day: number }
    weather: [{ id: number, main: string, description: string }]
    0: { id: 804, main: string, description: string}
}
