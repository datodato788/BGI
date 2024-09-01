const main = document.getElementById("main");
fetch("https://discord.com/api/guilds/1264673001274605598/widget.json")
  .then((e) => {
    return e.json();
  })
  .then((user) => {
    const statusColor = (status) => {
      if (status == "online") {
        return "status_online"
      }
      else if (status == "idle") {
        return "status_idle"
      } else if (status == "dnd") {
        return "status_dnd"

      }
    }
    const roleChecker = (name) => {
      if (name.toUpperCase() == "SHANSKYYY") {
        return "OWNER"
      } else if (name.toUpperCase() == "$ WICKYY") {
        return "Founder"
      }
      else if (name.toUpperCase() == "!𝐃𝐀𝐓_F𝟕𝐄𝐗") {
        return "Admin"
      }
      else if (name.toUpperCase() == "ALMAZA") {
        return "STAFF"
      }
      else if (name.toUpperCase() == "SECURITY") {
        return "BOT"
      }
      else {
        return "Fans"
      }

    }
    // const nameColor = (name) => {
    //   if (name == "Shanskyyy") {
    //     return
    //   }
    // }
    for (let i = 0; i < user.members.length; i++) {
      console.log(user.members[i].username)

      //   const----------------
      const userDiv = document.createElement("div");
      userDiv.classList.add("userDiv");
      const userDivAvatar = document.createElement("div");
      userDivAvatar.classList.add("userDivAvatar");
      const userdivAvatarDiv = document.createElement("div");
      const userDivMain = document.createElement("div");
      const userAvatar = document.createElement("img");
      userAvatar.classList.add(statusColor(user.members[i].status));
      userAvatar.setAttribute("src", user.members[i].avatar_url);
      const Name = document.createElement("h2")
      Name.classList.add(`Name_${roleChecker(user.members[i].username)}`)
      const status = document.createElement("h3")
      status.classList.add(`h3_${statusColor(user.members[i].status)}`)
      const role = document.createElement("h3")
      role.classList.add(`Role_${roleChecker(user.members[i].username)}`)


      role.innerHTML = roleChecker(user.members[i].username)
      status.innerHTML = user.members[i].status
      Name.innerHTML = user.members[i].username
      console.log(statusColor(user.members[i].status))
      main.appendChild(userDiv);
      userDiv.appendChild(userDivAvatar);
      userDiv.appendChild(userDivMain);
      userDivAvatar.appendChild(userdivAvatarDiv);
      userdivAvatarDiv.appendChild(userAvatar);
      userDivMain.appendChild(Name)
      userDivMain.appendChild(role)

      userDivMain.appendChild(status)
    }


  });

