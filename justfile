install:
    npm i

biome:
    npx biome check --write

dev:
    npm run dev

run:
    tmux new-session -d -s "miceli"
    tmux send-keys -t "miceli" "npm run dev" ENTER
    open "http://localhost:5173"

volpe:
    open "https://volpe.xyz/project/dk4ow8k4wo8w484sgog88wck/environment/s0w04okc08sk4oc4kkcg8w0k/application/oskwgs8s4cgo4o0wgsow44s4/deployment"
