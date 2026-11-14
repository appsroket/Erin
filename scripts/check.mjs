import { readFile, access, readdir } from 'node:fs/promises';
import assert from 'node:assert/strict';
const files = (await readdir('dist')).filter(f => f.endsWith('.html'));
let links = 0;
for (const file of files) {
  const html = await readFile(`dist/${file}`, 'utf8');
  assert.match(html, /<html lang="en"/);
  assert.match(html, /name="viewport"/);
  for (const [, url] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (url.startsWith('#')) {
      assert.ok(html.includes(`id="${url.slice(1)}"`), `Missing anchor ${url}`);
    } else if (url.startsWith('/') && !url.startsWith('//')) {
      const path = url.split('#')[0];
      await access(`dist${path === '/' ? '/index.html' : /\.[a-z]+$/i.test(path) ? path : `${path}.html`}`);
    } else if (!url.startsWith('mailto:')) {
      assert.equal(new URL(url).protocol, 'https:');
    }
    links++;
  }
}
const config = JSON.parse(await readFile('vercel.json', 'utf8'));
assert.equal(config.outputDirectory, 'dist');
console.log(`Checked ${files.length} pages and ${links} asset/navigation references. Vercel output configured.`);
