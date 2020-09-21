//import { languageCodes as ll } from './common/language-codes';
//import { englishCode, spanishCode, czechCode } from './common/language-codes';
const englishCode = "en-US";
const spanishCode = "es-ES";
const czechCode = "cs-CZ";

function getAboutUsLink(language){
  switch (language.toLowerCase()){
    case englishCode.toLowerCase():
      return '/about-us';
    case spanishCode.toLowerCase():
      return '/acerca-de';
    case czechCode.toLowerCase():
      return  '/o-nas';
  }
  return '/o-nas'; // default to czech ("cs-CZ") language
}
module.exports = getAboutUsLink;

