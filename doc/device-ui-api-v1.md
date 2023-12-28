## Washer Device UI RESTful API

### Authentication

This API requires HTTP Basic Authentication.

### Dashboard

- GET api/v1/status

    Polling every 1s or using Websocket?

### Pump setup

- GET api/v1/pump

    Get pump settings for all pumps

- GET api/v1/pump/X (X=[1-6]) (Optional)

    Get pump setting for pump #X

- POST api/v1/pump/X (X=[1-6])

    Save pump setting for pump #X

### Solenoid

- GET api/v1/relay

    Get relay setting for all relay (solenoid)

- GET api/v1/relay/X (X=[1-2]) (Optional) 

    Get relay setting for relay #X

- POST api/v1/relay/X (X=[1-6])

    Save relay setting for relay #X

### Preset setup

    TDB

### Misc.

- GET /api/v1/info

    Get system info e.g. version
