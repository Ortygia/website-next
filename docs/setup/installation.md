---
sidebar_position: 1
---

# Installation

Currently to setup and install Deaftone you need to download the binarie in release for you platform or clone and build the repo. After you have your binary in the same folder you need to place a settings.toml with the following inside it

```
log_level="deaftone=info,tower_http=info"
db_path="./deaftone.sqlite"
media_path="H:\\aa"
```

Where media_path is the location of your media db_path is where to save the database and logging is for change the log level of the application