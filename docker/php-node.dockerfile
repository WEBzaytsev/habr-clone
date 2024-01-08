FROM php:8.2-fpm AS build_php
WORKDIR /var/www
COPY . .

RUN apt-get update \
  && apt-get install -y build-essential zlib1g-dev curl gnupg procps git unzip libzip-dev libpq-dev \
  && docker-php-ext-install zip pdo_pgsql pgsql

RUN apt-get install -y libicu-dev \
&& docker-php-ext-configure intl \
&& docker-php-ext-install intl


# Xdebug
# RUN pecl install xdebug \
# && docker-php-ext-enable xdebug \
# && echo ";zend_extension=xdebug" > /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini



# Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer


RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs
RUN npm install npm@latest -g

EXPOSE 9000
# Node.js, NPM, Yarn  