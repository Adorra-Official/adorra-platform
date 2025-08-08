#!/usr/bin/env bash
set -e
echo "User: $(whoami)"
echo "OS: $(lsb_release -d | cut -f2)"
echo "UFW:"
sudo ufw status | sed -n '1,10p'
echo "Docker:"
docker --version || echo "Docker not installed"
echo "Compose:"
docker compose version || docker-compose --version || echo "Docker Compose not installed"
