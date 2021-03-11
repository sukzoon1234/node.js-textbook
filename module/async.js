//딱 한번 실행할때, 서버 작업 전에 초기화 할때
setTimeout(
  (name) => {
    let coffeeList = name;
    console.log(coffeeList);

    setTimeout(
      (name) => {
        coffeeList += ', ' + name;
        console.log(coffeeList);

        setTimeout(
          (name) => {
            coffeeList += ', ' + name;
            console.log(coffeeList);

            setTimeout(
              (name) => {
                coffeeList += ', ' + name;
                console.log(coffeeList);
              },
              1000,
              'Latte',
            );
          },
          1000,
          'Mocha',
        );
      },
      1000,
      'Americano',
    );
  },
  1000,
  'Espresso',
);