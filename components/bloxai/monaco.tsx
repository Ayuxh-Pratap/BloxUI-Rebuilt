import Editor from '@monaco-editor/react';
import { useEffect } from 'react';
import { loader } from '@monaco-editor/react';

export function Monaco({ value }: { value: string }) {
  return (
    <Editor
      height="80vh"
      defaultLanguage='javascript'
      value={value}
      theme="vs-dark"
    />
  );
}
