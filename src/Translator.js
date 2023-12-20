import React, { useState } from 'react';
import { translateText } from './translationService';
import './Translator.css';

const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'hi', name: 'Hindi' },
    { code: 'ta', name: 'Tamil' },
    { code: 'ja', name: 'Japanese' },
];

const Translator = () => {
    const [translatedText, setTranslatedText] = useState('');
    const [textToTranslate, setTextToTranslate] = useState('');
    const [sourceLanguage, setSourceLanguage] = useState('en');
    const [targetLanguage, setTargetLanguage] = useState('es');

    const handleTranslation = async () => {
        const translated = await translateText(textToTranslate, sourceLanguage, targetLanguage);
        setTranslatedText(translated);
    };

    return (
        <div className="translator-container">
            <div className="language-selectors">
                <select
                    value={sourceLanguage}
                    onChange={(e) => setSourceLanguage(e.target.value)}
                >
                    {languages.map((lang) => (
                        <option key={lang.code} value={lang.code}>
                            {lang.name}
                        </option>
                    ))}
                </select>
                <span className="icon">&#10140;</span>
                <select
                    value={targetLanguage}
                    onChange={(e) => setTargetLanguage(e.target.value)}
                >
                    {languages.map((lang) => (
                        <option key={lang.code} value={lang.code}>
                            {lang.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="translation-input">
                <input
                    type="text"
                    value={textToTranslate}
                    onChange={(e) => setTextToTranslate(e.target.value)}
                    placeholder="Enter text to translate"
                />
                <button onClick={handleTranslation}>Translate</button>
            </div>
            <div className="translated-text">
                {translatedText && <p>Translated: {translatedText}</p>}
            </div>
        </div>
    );
};

export default Translator;
