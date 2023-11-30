import inquirer from 'inquirer'
import {TPromt} from "./prompt.type.js";

export class PromptService {
    public async input<Т>(message: string, type: TPromt) {
        const { result } = await inquirer.prompt<{result: Т}>([
            {
                type,
                name: 'result',
                message
            }
        ])
        return result
    }
}