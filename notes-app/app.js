const yargs=require('yargs');
const notes=require('./notes');

yargs.version('1.1.0');

yargs.command({
    command:'add',
    description:'add a note',
    builder:{
        title:{
            description:"Note title",
            demandOption:true,
            type:'string'
        },
        body:{
            description:"Note body",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }

})

yargs.command({
    command:'remove',
    description:'remove note',
    builder:{
        title:{
            description:"Note title",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command:'list',
    description:'list notes',
    handler(){
        notes.listNotes();
    }
})

yargs.command({
    command:'read',
    description:'read a single note',
    builder:{
        title:{
            description:"Note title",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
})

yargs.parse();