<<<<<<< HEAD
import { openDB } from 'idb';

const dbPromise = openDB('notes-db', 1, {
  upgrade(db) {
    db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
  },
});

function addNoteToDB(note) {
    dbPromise.then((db) => {
      const tx = db.transaction('notes', 'readwrite');
      const store = tx.objectStore('notes');
      store.put(note);
      return tx.complete;
    });
  }
  
async function getAllNotesFromDB() {
    const db = await dbPromise;
    const tx = db.transaction('notes', 'readonly');
    const store = tx.objectStore('notes');
    return await store.getAll();
  }
=======
import { openDB } from 'idb';

const dbPromise = openDB('notes-db', 1, {
  upgrade(db) {
    db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
  },
});

function addNoteToDB(note) {
    dbPromise.then((db) => {
      const tx = db.transaction('notes', 'readwrite');
      const store = tx.objectStore('notes');
      store.put(note);
      return tx.complete;
    });
  }
  
async function getAllNotesFromDB() {
    const db = await dbPromise;
    const tx = db.transaction('notes', 'readonly');
    const store = tx.objectStore('notes');
    return await store.getAll();
  }
>>>>>>> f59680aa84ea7fbcbbb3e4313eff14f0903ccc59
  