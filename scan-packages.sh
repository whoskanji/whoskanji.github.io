#!/bin/sh

#packages
echo building package list
dpkg-scanpackages -m ./debs > Packages

echo bzip compressing
bzip2 -5fkv Packages > Packages.bz2

