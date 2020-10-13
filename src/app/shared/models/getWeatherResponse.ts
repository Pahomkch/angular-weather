export interface GetWeatherResponse {
    cod: number
    main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
    }
    name: string
    weather: { id: number, main: string, description: string, icon: string }[]
}
