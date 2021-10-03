const result = document.getElementById("result"),
  filter = document.getElementById("filter"),
  listItems = [];

getData();
// USING ASYNC TO GET DATA AND CONSUME API
async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50");

  //RESULTS IN JSON FORMAT
  const { results } = await res.json();

  //CLEAR RESULTS
  result.innerHTML = "";

  //CREATE A LIST ITEM FOR EACH USER RETRIEVED FROM THE API
  results.forEach((user) => {
    const li = document.createElement("li");

    listItems.push(li);

    li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}">
      <div class="user.info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>  
    `;

    //PUTTING EVERYTHING ABOVE INTO AN LI
    result.appendChild(li);
  });
}
