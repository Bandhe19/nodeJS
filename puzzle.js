var questions=[
    'what is your name?\n',
    'what is your hobby?\n',
    'what is your fav?\n',
];

let answers=[];
function ask(i)
{
    process.stdout.write(`\n ${questions[i]} \n`);
    process.stdout.write('');
}

process.stdin.on('data',function(data)
    {
        console.log('\n Received data : '+data);
        console.log('All answers :  '+answers);
        answers.push(data.toString().trim());
        if(answers.length<questions.length)
        {
            ask(answers.length);
        }
        else{
            process.exit();
        }
    }
);
process.on('exit', function()
{
    process.stdout.write('Good bye....\n');
});
ask(0);
console.log("End of the file");