const main = document.getElementById("main");
fetch("https://discord.com/api/guilds/1264673001274605598/widget.json")
  .then((e) => {
    return e.json();
  })
  .then((user) => {
    for (let i = 0; i < user.members.length; i++) {
      const users = user.members[i];
      const userName = user.members[i].username;
      const status = user.members[i].status;
      //   const userAvatar = user.members[i].avatar_url;
      //   const----------------
      const userDiv = document.createElement("div");
      userDiv.classList.add("userDiv");
      const userDivAvatar = document.createElement("div");
      userDivAvatar.classList.add("userDivAvatar");
      const userdivAvatarDiv = document.createElement("div");
      const userDivMain = document.createElement("div");
      const userAvatar = document.createElement("img");
      userAvatar.classList.add("userAvatar");
      userAvatar.setAttribute("src", user.members[i].avatar_url);

      main.appendChild(userDiv);
      userDiv.appendChild(userDivAvatar);
      userDiv.appendChild(userDivMain);
      userDivAvatar.appendChild(userdivAvatarDiv);

      userdivAvatarDiv.appendChild(userAvatar);
    }
  });

function buregrIcon() {
  const nav_2 = document.getElementById("nav_2");
  nav_2.classList.toggle("nav_2_show");
}
