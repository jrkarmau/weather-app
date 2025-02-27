FROM node:22.14.0 AS base
WORKDIR /weather-app
EXPOSE 3000

FROM base AS production
ENV NODE_ENV="production"
COPY . .
RUN npm ci
RUN npm run build
#CMD ["npm", "run", "start"]

FROM base AS deployment
ENV HOST="0.0.0.0" \
    NODE_ENV="production"
COPY --from=production /weather-app/build /weather-app/build
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]