// Question 3 (part 2): Create Log files
const fs = require('fs');
const path = require('path');

const logsDir = path.join(process.cwd(), 'Logs');

if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

process.chdir(logsDir);

for (let i = 0; i < 10; i++) {
  const fileName = `log${i}.txt`;
  fs.writeFileSync(path.join(process.cwd(), fileName), `This is log file ${i}`);
  console.log(fileName);
}
