import { readFile, writeFile, stat } from "fs/promises";
export const exerciseThree = async (req, res, next) => {
  try {
    const info = await readFile(process.cwd() + "/package.json", "utf-8");
    const _stat = await stat(process.cwd() + "/package.json");
    await writeFile(process.cwd() + "/src/resolvers/info/info.txt", info);

    console.log(info);
    res.send({
      contenidoStr: info,
      contenidoObj: JSON.parse(info),
      size: _stat.size,
    });
  } catch (error) {
    next(error);
  }
};
