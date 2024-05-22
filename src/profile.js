const follow = document.getElementById("follow");
follow.addEventListener("click", () => {
    let following = Number(document.getElementById("following").textContent);
    document.getElementById("following").textContent = following + 1;
});

const unfollow = document.getElementById("unfollow");
unfollow.addEventListener("click", () => {
    let unfollowing = Number(document.getElementById("following").textContent);
    document.getElementById("following").textContent = unfollowing - 1;
});
