
const calculatewpm = (text, index, time) => {
  const typedText = text.slice(0,index);
  const typedWords = typedText.split(' ');
  const wpm = Math.ceil(typedWords.length / ( time / 60));
  return wpm;
}

const calculateAccuracy = (index, attempts) => Math.ceil((index / attempts) * 100);

export const generateReport = (text, index, time, attempts) => {
  console.clear();
  const wpm = calculatewpm(text,index,time);
  const accuracy = calculateAccuracy(index , attempts);
  console.log('WPM : ', wpm);
  console.log('ACCURACY : ', accuracy);
}