const myPromise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    //! Yo quiero mi dinero!!
    resolve(100);
    // reject('Mi amigo se perdió');
  }, 2000); // 2 segundos
});

myPromise
  .then((myMoney) => {
    console.log(`Tengo mi dinero ${myMoney}`);
  })
  .catch((reason) => {
    console.warn(reason);
  })
  .finally(() => {
    console.log('Pues sa seguir con mi vida');
  });
