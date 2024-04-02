# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.11.1`
* __Run:__ Tue Apr 02 2024 17:25:20 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 106.57 | 149.84 |
| 1-startup-routes.cjs | 106.99 | 118.09 |
| 10-startup-routes-schema.cjs | 108.11 | 160.28 |
| 10-startup-routes.cjs | 108.83 | 121.83 |
| 100-startup-routes-schema.cjs | 119.83 | 254.94 |
| 100-startup-routes.cjs | 120.40 | 140.58 |
| 1000-startup-routes-schema.cjs | 286.35 | 1013.50 |
| 1000-startup-routes.cjs | 276.45 | 381.97 |
| 10000-startup-routes-schema.cjs | 4570.96 | 11207.36 |
| 10000-startup-routes.cjs | 5143.49 | 6482.32 |
| startup-listen.cjs | 107.99 | 119.80 |
