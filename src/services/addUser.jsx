import usersList from "../usersList";
function addUser(values) {
  return new Promise(function(resolve, reject) {
    setTimeout(async function() {
      usersList.map(el => {
        if (el.name === values.name || el.email === values.email) {
          throw reject("Failed: duplicated records!");
        }
      });
      usersList.push({
        id:
          usersList.length > 0
            ? usersList.sort((a, b) => b.id - a.id)[0].id + 1
            : 0,
        name: values.name,
        email: values.email,
        ipAdress: values.ipAdress
      });
      await resolve("User has been added successfully");
    }, 1000);
  });
}

export default addUser;
