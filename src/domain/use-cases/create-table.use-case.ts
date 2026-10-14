import { CreateTableOptions, CreateTableUseCase } from "../../interfaces";

export class CreateTable implements CreateTableUseCase {
  constructor /**
   * DI - Dependency Injection
   */() {}

  execute({ base, limit = 10 }: CreateTableOptions) {
    let outputMessage = "";

    for (let i = 1; i <= limit; i++) {
      outputMessage += `${base} x ${i} = ${base * i}\n`;
    }

    return outputMessage;
  }
}
