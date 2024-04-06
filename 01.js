let {exec, spawn} = require('child_process')

exec('ls', function(err, stdout, stderr ){
    if(err) console.error(stderr);
    console.log(stdout)
})
let ls = spawn('ls')
ls.stdout.on('data', function(data){
    console.log(data.toString())
})
ls.stderr.on('error', function (err){
    console.log(err)
})