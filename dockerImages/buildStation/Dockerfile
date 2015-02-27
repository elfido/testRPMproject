FROM centos:centos7
MAINTAINER Fidencio Garrido
WORKDIR /home
RUN mkdir /home/sources
RUN yum -y update
RUN yum -y install wget
RUN yum -y install tar
RUN yum -y install gcc
RUN yum -y install make
RUN yum -y install git
RUN yum -y install rpmdevtools
RUN cd sources && wget http://nodejs.org/dist/v0.12.0/node-v0.12.0-linux-x64.tar.gz
RUN cd /opt && tar xvf /home/sources/node-v0.12.0-linux-x64.tar.gz
RUN cd /home/sources && git clone https://github.com/elfido/testRPMproject
WORKDIR /home/sources/testRPMproject
RUN export PATH=$PATH:/opt/node-v0.12.0-linux-x64/bin && npm install -g grunt-cli && npm install && grunt && node index