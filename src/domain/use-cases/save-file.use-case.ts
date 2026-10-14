import fs from "fs";
import { SaveFileUseCase, SaveFileOptions } from "../../interfaces";

export class SaveFile implements SaveFileUseCase {
  constructor /** repository for saving files */() {}

  execute({
    destination = "output",
    fileContent,
    fileName = "table",
  }: SaveFileOptions): boolean {
    try {
      fs.mkdirSync(destination, { recursive: true });
      fs.writeFileSync(`${destination}/${fileName}.txt`, fileContent);
      return true;
    } catch {
      return false;
    }
  }
}
