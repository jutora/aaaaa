const greetings = {
  word: 'こんにちは',
  greet(names) {
    names.map(function (name) {
      console.log(`${this.word}、${name}さん！`);
    });
  },
};

greetings.greet(['桃太郎', 'サル', 'キジ']);
