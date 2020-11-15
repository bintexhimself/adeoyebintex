let timer = 0;

const logSeconds = () => {
  console.log(timer);
  timer++;
};

const intervalSet = () => {
  setInterval(logSeconds, 1000);
}

module.exports = intervalSet;
