#!/usr/bin/env node

const args = process.argv.slice(2);

const helpMessage = `
Usage: qap [options] [arguments]

Options:
  --help, -h     Show this help message
  --version, -v  Show the version number
  --caps, -c     Include capital letters
  --numbers, -n  Include numbers
  --special, -s  Include special characters
  --length, -l   Length of the password (default: 8)
`;

const versionMessage = 'qap version 1.0.0';

if (args.includes('--help') || args.includes('-h')) {
  console.log(helpMessage);
  process.exit(0);
}

if (args.includes('--version') || args.includes('-v')) {
  console.log(versionMessage);
  process.exit(0);
}

function main() {
  const smallSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const largeSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const numberSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const specialSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "{", "}", "[", "]", "|", ";", ":", "'", "<", ">", ",", ".", "?", "/", "~", "`"];
  let charSet = smallSet;
  
  if (args.includes('--caps') || args.includes('-c')) {
    charSet += largeSet;
    process.exit(0);
  }
  
  if (args.includes('--numbers') || args.includes('-n')) {
    charSet += numberSet;
    process.exit(0);
}
  if (args.includes('--special') || args.includes('-s')) {
    charSet += specialSet;
    process.exit(0);
    }
    
    const length = args.includes('--length') || args.includes('-l') ? parseInt(args[args.indexOf('--length') + 1]) : 8;
    
    const password = Array.from({ length }, () => charSet[Math.floor(Math.random() * charSet.length)]).join('');
    console.log(password);
}

main();