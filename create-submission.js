const archiver = require('archiver');
const fs = require('fs');

const archive = archiver("zip", {
  zlib: {
    level: 9
  }
});

const output = fs.createWriteStream(__dirname + "/my-submission.zip");
archive.pipe(output);

try {
  archive.glob(["assets/**/*", "src/**/*", "index.html", "*"], {cwd: __dirname});
  archive.finalize();
} catch (e) {
  console.error(e);
}
