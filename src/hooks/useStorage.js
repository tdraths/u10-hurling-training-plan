/**
 * useStorage — persistence abstraction.
 * Currently: localStorage. To swap in Supabase later, replace
 * lsGet/lsSet/lsRemove with Supabase client calls.
 * Hook signature stays identical — no component changes needed.
 */
import { useState, useCallback } from 'react';

const PREFIX = 'u10hurling_';

function lsGet(key) {
  try { const r = localStorage.getItem(PREFIX + key); return r ? JSON.parse(r) : null; }
  catch { return null; }
}
function lsSet(key, value) {
  try { localStorage.setItem(PREFIX + key, JSON.stringify(value)); }
  catch (e) { console.warn('localStorage write failed:', e); }
}
function lsRemove(key) {
  try { localStorage.removeItem(PREFIX + key); } catch {}
}

export function useStorage(key, defaultValue) {
  const [value, setInner] = useState(() => lsGet(key) ?? defaultValue);
  const setValue = useCallback((next) => {
    const resolved = typeof next === 'function' ? next(value) : next;
    lsSet(key, resolved);
    setInner(resolved);
  }, [key, value]);
  const clearValue = useCallback(() => {
    lsRemove(key);
    setInner(defaultValue);
  }, [key, defaultValue]);
  return [value, setValue, clearValue];
}
