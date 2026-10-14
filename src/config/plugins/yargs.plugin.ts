import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yargsInstance = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    description: "Base number for multiplication table",
    demandOption: true,
  })
  .option("l", {
    alias: "limit",
    type: "number",
    description: "Limit up to which the multiplication table should go",
    default: 10,
  })
  .option("s", {
    alias: "show",
    type: "boolean",
    description: "Show the multiplication table in the console",
    default: false,
  })
  .check((argv) => {
    if (argv.b <= 0) {
      throw new Error("Base must be a positive number");
    }
    if (argv.l <= 0) {
      throw new Error("Limit must be a positive number");
    }
    return true;
  })
  .parseSync();
