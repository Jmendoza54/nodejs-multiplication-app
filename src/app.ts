import { yargsInstance as yarg } from "./config/plugins/yargs.plugin";
import { ServerApp } from "./presentation/server-app";
/*  */

(async () => {
  await main();
})();

async function main() {
  /* 

  

  const outputPath = "output";
  if (!fs.existsSync(outputPath)) {
    
  }
  fs.mkdirSync(outputPath);
  fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage); */

  const { b: base, l: limit, s: show } = yarg;
  ServerApp.run({ base, limit, show });
}
