FROM --platform=x86-64 nginx:alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./dist/portfolio /usr/share/nginx/html
