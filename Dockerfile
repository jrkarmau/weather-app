# TODO: Separate stages for development and deployment builds
FROM node:22.14.0 AS base
WORKDIR /weather-app
EXPOSE 3000

FROM base AS run
ENV HOST="0.0.0.0" \
    REACT_APP_OPENWEATHER_API_KEY="" \
    REACT_APP_WEATHERAPI_API_KEY=""
COPY . .
RUN npm ci
CMD ["npm", "run", "start"]