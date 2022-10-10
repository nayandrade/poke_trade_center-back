import * as homeRepository from "../repositories/homeRepository.js";
import * as authServices from "../services/authServices.js";

export async function getMyHomepage(id) {
  const userData = await authServices.getUserData(id);
  const lastUpdate = userData[0].dailyCardsTimeStamp;

  const time = checkTime(lastUpdate);

  if (lastUpdate === null || time) {
    const cards = giveNewCards();
    const insertNewCards = await homeRepository.insertNewCards(
      cards[0],
      cards[1],
      cards[2],
      cards[3],
      cards[4],
      id
    );

    const updateTimestamp = await authServices.updateTimestamp(id);
    const { rows: newCards } = await homeRepository.getNewCards(
      cards[0],
      cards[1],
      cards[2],
      cards[3],
      cards[4]
    );

    return newCards
  }
}

function giveNewCards() {
  const cards = [];
  for (let i = 0; i < 5; i++) {
    const newNumber = parseInt(Math.random() * 150) + 1;
    cards.push(newNumber);
  }
  return cards;
}

function checkTime(lastUpdate) {

  const now = Date.now(); 
  const day = 24 * 60 * 60; 
  const difference = now - day; 

  if (lastUpdate < difference) {
    return true;
  }
  return false;
}
