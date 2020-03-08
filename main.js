const output = document.querySelector(".output");

const api = () => {
  fetch("https://api.kanye.rest")
    .then(res => res.json())
    .then(data => {
      output.innerHTML = `"${data.quote}"`;
    });
};

api();
