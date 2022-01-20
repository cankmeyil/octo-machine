// kaynak: https://stackoverflow.com/questions/23450534/how-to-call-a-python-function-from-node-js
const spawn = require("child_process").spawn;
const pythonProcess = spawn('python',["tiqi.py", "QuestionPool_test.txt"]);

pythonProcess.stdout.on('data',(data)=>{
    console.log(data.toString());
})
