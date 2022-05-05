package com.todoApp.todoApp.controller;

import com.todoApp.todoApp.entity.Note;
import com.todoApp.todoApp.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Id;
import java.util.List;

@RestController
@RequestMapping("api/v1/")
@CrossOrigin(origins = "http://localhost:3000/")
public class NoteController {

    @Autowired
    private NoteService service;

    @GetMapping("get/notes")
    public List<Note> getAllNotes(){
        return service.getNotes();
    }

    @PostMapping("save/note")
    public Note saveNote(@RequestBody Note note){
        return service.saveNote(note);
    }

    @PutMapping("update/notes")
    public Note updateNote(@RequestBody Note note){
        return service.updateNote(note);
    }

    @DeleteMapping("delete/Note/{id}")
    public void deleteNote(@PathVariable Long id){
        service.deleteNote(id);
    }

}
