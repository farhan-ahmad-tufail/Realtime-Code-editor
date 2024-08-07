import React, { useRef, useState } from 'react'
import Output from './Output'
import {Editor} from '@monaco-editor/react';
import LanguageSelector from './LanguageSelector';
import { CODE_SNIPPETS } from '../constants';
import { Box, HStack } from '@chakra-ui/react';


function CodeEditor() {

    const editorRef = useRef();
    
    const [value,setValue] = useState('');

    const [language,setLanguage] =useState('javascript'); 

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    };

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
        setValue(CODE_SNIPPETS[lang]);
    };

    return ( <Box>
        <HStack spacing={4}>
            <Box w='60%'>
            <LanguageSelector language={language} onSelect={handleLanguageChange} />
            <Editor
                height="75vh" 
                language={language}  
                theme='vs-dark'
                defaultValue={CODE_SNIPPETS[language]}
                value={value}
                onMount={onMount}
                onChange={(value) => setValue(value)}
            />
            </Box>
            <Output editorRef={editorRef} language={language} />
        </HStack>
    
     </Box>
)
}

export default CodeEditor;


