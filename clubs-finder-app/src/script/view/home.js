import Utils from "../utils.js";
// import Clubs from "../../data/local/clubs.js";
import SportsAPI from "../../data/remote/sports-api.js";

const home = () => {
  const searchFormElement = document.querySelector("search-bar");
  const clubListContainerElement = document.querySelector("#clubListContainer");
  const clubQueryWaitingElement = clubListContainerElement.querySelector(".query-waiting");
  const clubLoadingElement =
    clubListContainerElement.querySelector(".search-loading");
  const clubSearchErrorElement = clubListContainerElement.querySelector("club-search-error");
  // const clubListElement = clubListContainerElement.querySelector(".club-list");
  // const listElement = clubListElement.querySelector(".list");
  const clubListElement = clubListContainerElement.querySelector("club-list");

  const showSportClub = (query) => {
    showLoading();

    SportsAPI.searchClub(query).then((result) => {
      displayResult(result);

      showClubList();
    }).catch((error) => {
      clubSearchErrorElement.textContent = error.message;
      showSearchError()
    })
    // using local data
    // const result = Clubs.searchClub(query);
    // displayResult(result);

    // showClubList();
  };

  const onSearchHandler = (event) => {
    event.preventDefault();

    // const query = event.target.elements.name.value;
    const { query } = event.detail;
    showSportClub(query);
  };

  const displayResult = (clubs) => {
    // const clubItems = clubs.map((club) => {
    //   return `
    //     <div class="card">
    //       <img
    //         class="fan-art-club"
    //         src="${club.strTeamBadge}"
    //         alt="Fan Art: ${club.strTeam}"
    //       >
    //       <div class="club-info">
    //         <div class="club-info__title">
    //           <h2>${club.strTeam}</h2>
    //         </div>
    //         <div class="club-info__description">
    //           <p>${club.strDescriptionEN}</p>
    //         </div>
    //       </div>
    //     </div>
    //   `;
    // });
    const clubItemElements = clubs.map((club) => {
      const clubItemElement = document.createElement("club-item");
      clubItemElement.club = club;
      return clubItemElement;
    });
    Utils.emptyElement(clubListElement);
    // listElement.innerHTML = clubItems.join("");
    clubListElement.append(...clubItemElements);
  };

  const showClubList = () => {
    Array.from(clubListContainerElement.children).forEach((element) => {
      Utils.hideElement(element);
    });
    Utils.showElement(clubListElement);
  };

  const showLoading = () => {
    Array.from(clubListContainerElement.children).forEach((element) => {
      Utils.hideElement(element);
    });
    Utils.showElement(clubLoadingElement);
  };

  const showQueryWaiting = () => {
    Array.from(clubListContainerElement.children).forEach((element) => {
      Utils.hideElement(element);
    });
    Utils.showElement(clubQueryWaitingElement);
  };

  searchFormElement.addEventListener("search", onSearchHandler);
  showQueryWaiting();
};

export default home;
