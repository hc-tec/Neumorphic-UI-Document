import hljs from 'highlight.js';

const highlightCode = () => {
  const preEl = document.querySelectorAll('pre');

  preEl.forEach((el) => {
    hljs.highlightBlock(el);
  });
};

export default highlightCode;
