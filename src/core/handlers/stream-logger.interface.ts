export interface IStreamLogger {
    log(...arg: any[]): void
    error(...arg: any[]): void
    end(): void
}