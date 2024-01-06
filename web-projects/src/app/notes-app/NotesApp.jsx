import React, { useState, useEffect } from 'react';
import styles from './NotesApp.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import ReactMarkdown from 'react-markdown';

const NotesApp = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  const addNewNote = (text = '') => {
    const newNote = {
      id: new Date().getTime(),
      text,
      isEditing: false,
    };

    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const toggleEdit = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, isEditing: !note.isEditing } : note
      )
    );
  };

  const updateNoteText = (id, newText) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, text: newText } : note
      )
    );
  };

  const updateLocalStorage = () => {
    localStorage.setItem('notes', JSON.stringify(notes));
  };

  useEffect(() => {
    updateLocalStorage();
  }, [notes]);

  return (
    <div className={styles.container}>
      <button className={styles.createNote} onClick={() => addNewNote()}>
        <FontAwesomeIcon icon={faPlusSquare} className={styles.plusStyle} />
        Add Note
      </button>

      {notes.map((note) => (
        <div key={note.id} className={styles.note}>
          <div className={styles.tools}>
            <button className={styles.edit} onClick={() => toggleEdit(note.id)}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button className={styles.delete} onClick={() => deleteNote(note.id)}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>

          {note.isEditing ? (
            <textarea
              className={styles.textarea}
              value={note.text || ''}
              onChange={(e) => updateNoteText(note.id, e.target.value)}
            ></textarea>
          ) : (
            <div className={styles.main} dangerouslySetInnerHTML={{ __html: note.text ? marked.parse(note.text) : '' }}></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NotesApp;