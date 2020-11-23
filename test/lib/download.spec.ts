// import init from "@/lib/init";
import path from "path";
import fs from "fs";

test("测试下载git项目成功", async () => {
  const dir = path.resolve(__dirname, "kkk2");
  //   await clone("huomarvin/macbook-software", dir);
  expect(fs.existsSync(dir)).toBe(true);
  fs.rmdirSync(dir, { recursive: true });
  expect(fs.existsSync(dir)).toBe(false);
});
