const fs = require('fs');
const { title } = require('process');


const addNote = (title, body) => {
    const notes = loadNotes();

    const isDuplicateData = notes.find((note) => note.title === title);

    if (!isDuplicateData) {
        notes.push({
            title,
            body
        })
        console.log(notes)
        saveNotes(notes);
        console.log('notes added')
    }
    else {
        console.log(`data found with same title = ${title}`);
    }
}
const removeNote=(title)=>{
    const notes=loadNotes();
    if(notes.length===0){
        console.log("notes are already empty. Unable to remove the note with title=",title);
        return;
    }
    const notesToKeep=notes.filter((note)=>note.title!==title);

    if(notes.length>notesToKeep.length){
        saveNotes(notesToKeep);
        console.log("Note removed")
    }
    else{
        console.log("note not found in the notes file")
    }
}
const listNotes=()=>{
    const notes=loadNotes();
    if(notes.length===0){
        console.log("No notes found");
        return;
    }
    console.log("All notes")
    notes.forEach(element => {
        console.log(element.title);
        console.log(element.body)
    });

}

const readNote=(title)=>{
    const notes=loadNotes();

    const note=notes.find((note)=>note.title===title);

    if(note){
        console.log("note found");
        console.log(note.title);
        console.log(note.body)
        return;
    }
    console.log("note not found");
}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        const notes = JSON.parse(dataJSON);
        return notes;

    } catch (e) {
        return [];
    }

}
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

module.exports = { addNote,removeNote,listNotes,readNote };