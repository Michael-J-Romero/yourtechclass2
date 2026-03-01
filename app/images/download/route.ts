import fs from "fs";
import path from "path";
import archiver from "archiver";
import { PassThrough, Readable } from "stream";

export async function GET() {
  const imgDir = path.join(process.cwd(), "public", "img");
  const files = fs.existsSync(imgDir)
    ? fs.readdirSync(imgDir).filter((f) => /\.(jpe?g|png|gif|webp|jfif)$/i.test(f))
    : [];

  const archive = archiver("zip", { zlib: { level: 9 } });
  const stream = new PassThrough();

  archive.on("error", (err) => {
    // archiver errors should end the stream
    // eslint-disable-next-line no-console
    console.error(err);
    stream.end();
  });

  archive.pipe(stream);

  for (const file of files) {
    const filePath = path.join(imgDir, file);
    archive.file(filePath, { name: file });
  }

  archive.finalize();

  const body = Readable.toWeb(stream) as ReadableStream;

  return new Response(body, {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": "attachment; filename=images.zip",
    },
  });
}
