const spinner = "|/-\\|/-\\|\n";
let count = 0;

for (const symbol of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${symbol}`);
  }, count);
  count += 200;
}

