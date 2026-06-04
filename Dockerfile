FROM node:24-bookworm-slim

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=5173

EXPOSE 5173
ENV __VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS=miceli.click

CMD ["npm", "run", "preview"]