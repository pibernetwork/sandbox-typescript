import path from "path";
import * as url from "url";

export default function getESModuleDirName() {
  const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
  return path.resolve(__dirname);
}
