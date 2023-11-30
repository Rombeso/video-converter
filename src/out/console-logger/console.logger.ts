import {IStreamLogger} from "../../core/handlers/stream-logger.interface";

export class ConsoleLogger implements IStreamLogger{
    private static logger: ConsoleLogger
    public static getInstance() {
        if (!ConsoleLogger.logger) {
            ConsoleLogger.logger = new ConsoleLogger()
        }
        return ConsoleLogger.logger
    }

    end(): void {
        console.log('Готово')
    }

    error(...arg: any[]): void {
        console.log(...arg)
    }

    log(...arg: any[]): void {
        console.log(...arg)
    }

}