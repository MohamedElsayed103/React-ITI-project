import React, { useState } from 'react';
import { Note } from '../types';

const NoteManager: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [noteContent, setNoteContent] = useState('');
  const [priority, setPriority] = useState<'important' | 'normal' | 'delayed'>('normal');

  const addNote = () => {
    if (noteContent.trim()) {
      const newNote: Note = {
        id: Date.now().toString(),
        content: noteContent,
        priority,
        createdAt: new Date(),
      };
      setNotes([...notes, newNote]);
      setNoteContent('');
    }
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const changePriority = (id: string, newPriority: 'important' | 'normal' | 'delayed') => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, priority: newPriority } : note
    ));
  };

  const getNotesByPriority = (priority: 'important' | 'normal' | 'delayed') => {
    return notes.filter(note => note.priority === priority);
  };

  const priorityColors = {
    important: 'bg-red-50 border-red-300',
    normal: 'bg-blue-50 border-blue-300',
    delayed: 'bg-yellow-50 border-yellow-300',
  };

  const priorityBadges = {
    important: 'bg-red-500',
    normal: 'bg-blue-500',
    delayed: 'bg-yellow-500',
  };

  const renderNoteSection = (sectionPriority: 'important' | 'normal' | 'delayed', title: string, emoji: string) => {
    const sectionNotes = getNotesByPriority(sectionPriority);
    
    return (
      <div className="mb-4">
        <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
          <span className="mr-2">{emoji}</span>
          {title} ({sectionNotes.length})
        </h3>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {sectionNotes.length === 0 ? (
            <p className="text-sm text-gray-400 italic">No notes</p>
          ) : (
            sectionNotes.map(note => (
              <div key={note.id} className={`p-3 border rounded-lg ${priorityColors[note.priority]}`}>
                <div className="flex justify-between items-start">
                  <p className="text-sm text-gray-800 flex-1">{note.content}</p>
                  <button
                    onClick={() => deleteNote(note.id)}
                    className="ml-2 text-red-500 hover:text-red-700 font-bold"
                    title="Delete note"
                  >
                    ✕
                  </button>
                </div>
                <div className="mt-2 flex gap-1">
                  {(['important', 'normal', 'delayed'] as const).map(p => (
                    <button
                      key={p}
                      onClick={() => changePriority(note.id, p)}
                      className={`text-xs px-2 py-1 rounded text-white ${priorityBadges[p]} ${
                        note.priority === p ? 'ring-2 ring-offset-1 ring-gray-800' : 'opacity-50'
                      }`}
                      title={`Change to ${p}`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Input Section */}
      <div className="mb-6">
        <textarea
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          placeholder="Enter your note..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
          rows={3}
        />
        <div className="flex gap-2 mt-2">
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as 'important' | 'normal' | 'delayed')}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="important">🔴 Important</option>
            <option value="normal">🔵 Normal</option>
            <option value="delayed">🟡 Delayed</option>
          </select>
          <button
            onClick={addNote}
            disabled={!noteContent.trim()}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add Note
          </button>
        </div>
      </div>

      {/* Notes Display Sections */}
      <div className="space-y-4">
        {renderNoteSection('important', 'Important', '🔴')}
        {renderNoteSection('normal', 'Normal', '🔵')}
        {renderNoteSection('delayed', 'Delayed', '🟡')}
      </div>
    </div>
  );
};

export default NoteManager;
