let rock, pop, jazz, classical, genre, final;

genre = prompt("Введіть назву музичного жанру")

switch (genre) {
    case "rock":
        final = "Увімкнено рок-плейлист";
        break;

    case "pop":
        final = "Увімкнено поп-плейлист";
        break;

    case "jazz":
        final = "Увімкнено джаз-плейлист";
        break;

    case "classical":
        final = "Увімкнено класичну музику";
        break;
}

console.log(final);
alert(final);