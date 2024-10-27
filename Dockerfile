FROM node:20.16 AS builder
WORKDIR /app
COPY ./angularFrontEnd/package*.json ./
RUN npm install
COPY /angularFrontEnd/. .
RUN npm run build --prod


FROM httpd:2.4
COPY ./httpd.conf /usr/local/apache2/conf/httpd.conf
COPY --from=builder /app/dist/angular-front-end/browser /usr/local/apache2/htdocs/

RUN apt-get update
RUN apt-get install -y python3.11
RUN apt-get install -y python3.11-venv


WORKDIR /flask

COPY ./flaskBackEnd/ .

#COPY ./flaskBackEnd/requirements.txt requirements.txt

RUN python3 -m venv venv_prod
RUN . venv_prod/bin/activate
RUN ./venv_prod/bin/pip install --no-cache-dir -r requirements.txt

COPY start.sh start.sh
CMD ["./start.sh"]




