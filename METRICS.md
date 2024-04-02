# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.11.1`
* __Run:__ Tue Apr 02 2024 15:25:22 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 109.66 | 154.81 |
| 1-startup-routes.cjs | 110.66 | 122.28 |
| 10-startup-routes-schema.cjs | 112.75 | 169.32 |
| 10-startup-routes.cjs | 113.00 | 126.23 |
| 100-startup-routes-schema.cjs | 125.26 | 264.28 |
| 100-startup-routes.cjs | 124.95 | 146.63 |
| 1000-startup-routes-schema.cjs | 297.23 | 1048.23 |
| 1000-startup-routes.cjs | 283.62 | 398.36 |
| 10000-startup-routes-schema.cjs | 5128.12 | 12403.48 |
| 10000-startup-routes.cjs | 5598.14 | 6862.51 |
| startup-listen.cjs | 113.06 | 126.48 |
