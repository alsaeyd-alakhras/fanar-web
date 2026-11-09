import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * useAcademyNotes — per-lesson personal notes stored in localStorage.
 *
 * Notes are namespaced by course + lesson. Auto-saves with a
 * debounce and exposes a save-status indicator.
 */

const STORAGE_PREFIX = 'fnar-academy-notes-';
const SAVE_DEBOUNCE_MS = 600;

type SaveStatus = 'idle' | 'saving' | 'saved';

function storageKey(courseId: string, lessonId: string): string {
  return `${STORAGE_PREFIX}${courseId}-${lessonId}`;
}

function readNote(courseId: string, lessonId: string): string {
  try {
    return localStorage.getItem(storageKey(courseId, lessonId)) || '';
  } catch {
    return '';
  }
}

function writeNote(courseId: string, lessonId: string, value: string): void {
  try {
    localStorage.setItem(storageKey(courseId, lessonId), value);
  } catch {
    // ignore
  }
}

export function useAcademyNotes(courseId: string, lessonId: string) {
  const [text, setText] = useState(() => readNote(courseId, lessonId));
  const [saveStatus, setSaveStatus] = useState<SaveStatus>('idle');
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const savedRef = useRef(true);

  // Reset state when lesson changes
  useEffect(() => {
    setText(readNote(courseId, lessonId));
    setSaveStatus('idle');
    savedRef.current = true;
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [courseId, lessonId]);

  const handleChange = useCallback(
    (value: string) => {
      setText(value);
      savedRef.current = false;
      setSaveStatus('saving');

      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }

      debounceRef.current = setTimeout(() => {
        writeNote(courseId, lessonId, value);
        savedRef.current = true;
        setSaveStatus('saved');
      }, SAVE_DEBOUNCE_MS);
    },
    [courseId, lessonId],
  );

  const flushSave = useCallback(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    if (!savedRef.current) {
      writeNote(courseId, lessonId, text);
      savedRef.current = true;
      setSaveStatus('saved');
    }
  }, [courseId, lessonId, text]);

  return { text, handleChange, saveStatus, flushSave };
}
