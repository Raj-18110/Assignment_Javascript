#! /bin/bash

yum install epel-release -y
yum install git -y
yum install ansible -y
yum install emacs -y

git clone https://github.com/vlead/cluster-automation
cd cluster-automation
git checkout features
make

ssh-keygen -t rsa
ssh-copy-id root@localhost
ssh-copy-id root@127.0.0.1

