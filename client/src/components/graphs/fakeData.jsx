const spendingData = {
    housing: 25,
    travel: 100,
    food: 25,
    pet: 25
  }

  const total = Object.values(spendingData).reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0
  );


export default spendingData;
