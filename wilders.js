import chalk from 'chalk'

const names = ["Tomeuh", "Rémieuh", "Abdoueuh", "Charlotteuh"];
const colors = [chalk.blue, chalk.green, chalk.yellow, chalk.grey];

names.forEach((name, index) =>
    console.log (colors[index](name))
);

