import { CliApp } from '@guscrawford.com/cleye';

const app = new CliApp(process.argv);
const command = app.command({
    name:'default'
});
console.info(app);