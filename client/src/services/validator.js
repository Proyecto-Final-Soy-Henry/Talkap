export function userValidator(user) {
  // fetch('http://localhost:3001',{
  fetch("https://talkap-production.up.railway.app/", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
