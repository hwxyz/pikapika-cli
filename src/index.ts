import { program } from "commander";
import packageInfo from "../package.json";

program.version(packageInfo.version);
program
    .command("init <name>")
    .description("init project")
    .action(require("./lib/init"));

program.parse(process.argv);
