FROM cypress/included:10.1.0
RUN mkdir /cypress-docker
WORKDIR /cypress-docker
COPY ./package.json .
COPY ./package-lock.json .
COPY ./cypress.config.js .
COPY ./html-report.js .
ADD ./docker_support_files .
RUN npm install
RUN rm -R -f ./node_modules/cypress-cucumber-preprocessor
RUN mv -f ./cypress-cucumber-preprocessor ./node_modules/cypress-cucumber-preprocessor
ENTRYPOINT ["npm", "run"]

