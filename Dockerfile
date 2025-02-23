FROM node:22-bookworm-slim

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=4321

EXPOSE 4321
ENV __VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS=miceli.click

CMD ["npm", "run", "preview"]