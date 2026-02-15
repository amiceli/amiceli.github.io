biome:
    npx biome check --write

dev:
    npm run dev

run:
    tmux new-session -d -s "miceli"
    tmux send-keys -t "miceli" "npm run dev" ENTER
    open "http://localhost:4321/"
