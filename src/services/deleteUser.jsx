import usersList from "../usersList";
function deleteUser(values) {
  return new Promise(function(resolve, reject) {
    setTimeout(async function() {
      if (values === "deleteAll") {
        usersList.splice(0, usersList.length);
        await resolve("Users has been removed successfully");
      } else {
        let indexOf = usersList.map(el => el.id).indexOf(values);
        usersList.splice(indexOf, 1);
        await resolve("User has been removed successfully");
      }
    }, 1000);
  });
}

export default deleteUser;
