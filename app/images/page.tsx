import fs from "fs";
import path from "path";
import DownloadAllButton from "./DownloadAllButton";

const IMG_DIR = path.join(process.cwd(), "public", "img");

export default function ImagesPage() {
  let files: string[] = [];
  try {
    if (fs.existsSync(IMG_DIR)) {
      files = fs.readdirSync(IMG_DIR).filter((f) => /\.(jpe?g|png|gif|webp|jfif)$/i.test(f));
    }
  } catch (err) {
    // noop - render empty grid
    // eslint-disable-next-line no-console
    console.error(err);
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Images</h1>
      <div style={{ marginTop: 8, marginBottom: 12 }}>
        <DownloadAllButton />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: 12 }}>
        {files.map((name) => (
          <div key={name} style={{ border: "1px solid #eaeaea", padding: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img src={`/img/${name}`} alt={name} style={{ maxWidth: "100%", height: 120, objectFit: "cover" }} />
            <a href={`/img/${name}`} download style={{ marginTop: 8 }}>
              Download
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
