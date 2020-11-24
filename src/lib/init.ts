import { promisify } from "util";
import clear from "clear";
import figlet from "figlet";
import ora from "ora";
import downloadGit from "download-git-repo";
import { yellow, red, blueBright, cyanBright } from "chalk";
import log from "./log";
import { existsSync, readFileSync, writeFileSync } from "fs";
import execa from "execa";

const download = promisify(downloadGit);
const figletPromise = promisify(figlet);
const { iconError, iconSuccess, success, info, error, warning } = log;

module.exports = async (name: string) => {
    const repo =
    "https://codeload.github.com/huomarvin/next-ssr-template/zip/main";
    clear();
    await figletPromise("PikaPika");
    const processCwd = `${process.cwd()}/${name}`;
    const spinner = ora(`下载.....${repo}`);
    spinner.start();
    await download(
        `direct:${repo}`,
        name,
        async (err: Error): Promise<void> => {
            // 是否存在错误
            if (err) {
                spinner.fail();
                info(iconError + red(err));
            } else {
                const fileName = `${processCwd}/package.json`;
                console.log("processCwd", processCwd);
                // 是否存在 package.json 文件
                if (existsSync(fileName)) {
                    const content: any = JSON.parse(readFileSync(fileName).toString()); // 读取需要修改的文件
                    content.name = name;
                    writeFileSync(fileName, JSON.stringify(content)); // 重新写入文件
                }
                spinner.succeed("模板下载成功"); // 下载成功
                info(`${yellow(">>")} 正在安装依赖插件，可能要等一会...`);
                try {
                    const { stdout } = await execa("yarn", ["install"], {
                        cwd: processCwd,
                        stdio: "inherit",
                    });
                    spinner.succeed("依赖插件安装成功"); // 下载成功
                    info(stdout);
                    success(iconSuccess + " 项目初始化完成");
                    info();
                    info(`${yellow("$")}  ${cyanBright(`cd ${name}`)}    进入项目目录`);
                    info(`${yellow("$")}  ${cyanBright(`npm start`)}    运行项目`);
                    info();
                } catch (e) {
                    console.error(e);
                }
            }
        }
    );
};
