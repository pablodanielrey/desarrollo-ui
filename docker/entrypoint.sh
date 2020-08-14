#!/bin/bash

set -e

export PATH=$PATH:/usr/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:`yarn global bin`

if [ -z "$@" ]; then
  #exec /usr/bin/supervisord -c /etc/supervisor/supervisord.conf --nodaemon
  exec /bin/bash
else
  exec $@
fi
