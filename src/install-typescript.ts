let message: string = 'Hello TypeScript! ts-node';
console.log({ message });

//2022-02-05
// ./node_modules/.bin/tsc src/install-typescript.ts
// npx tsc src/install-typescript.ts
// install-typescript.js

//2022-02-06
//バージョン調査
// npm info ts-node
// インストール
// npm install ts-node --save-dev ts-node@10.4.0
// npx ts-node src/install-typescript.ts

//バージョン調査
// npm info ts-node-dev
// インストール
// npm install ts-node --save-dev ts-node-dev@1.1.8
// npx ts-node-dev --respawn ts-node-dev@1.1.8
