// translationService.js
import axios from 'axios';

const translateText = async (text, sourceLanguage, targetLanguage) => {
  try {

    console.log( {
        text,
        targetLanguage,
        sourceLanguage,
      })
    const response = await axios.post('https://translator-v9ib.onrender.com/translate', {
      text,
      targetLanguage,
      sourceLanguage,
    });

    console.log(response.data,838383)

    return response.data.translatedText;
  } catch (error) {
    console.error('Translation Error:', error);
    throw new Error('Translation failed');
  }
};

export { translateText };
