export const between = (x: number, min: number, max: number): boolean => x >= min && x <= max

export const getColor = (progress: number, hash?: boolean): string => {
    if (between(progress, 0, 10)) {
        return hash ? "#742A2A" : "red-900"
    }
    if (between(progress, 10, 20)) {
        return hash ? "#742A2A" : "red-900"
    }
    if (between(progress, 20, 30)) {
        return hash ? "#9B2C2C" : "red-800"
    }
    if (between(progress, 30, 40)) {
        return hash ? "#C53030" : "red-700"
    }
    if (between(progress, 40, 50)) {
        // return hash ? "#E53E3E" : "red-600"
        return hash ? "#F56565" : "red-500"
    }
    if (between(progress, 50, 60)) {
        return hash ? "#F56565" : "red-500"
    }
    if (between(progress, 60, 70)) {
        return hash ? "#FC8181" : "red-400"
    }
    if (between(progress, 70, 80)) {
        return hash ? "#FEB2B2" : "red-300"
    }
    if (between(progress, 80, 90)) {
        return hash ? "#FED7D7" : "red-200"
    }

    return hash ? "#C53030" : "red-100"
}
