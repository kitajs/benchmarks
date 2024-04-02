# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.11.1`
* __Run:__ Tue Apr 02 2024 15:18:59 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 107.05 | 149.74 |
| 1-startup-routes.cjs | 106.58 | 117.87 |
| 10-startup-routes-schema.cjs | 107.97 | 161.16 |
| 10-startup-routes.cjs | 110.18 | 123.07 |
| 100-startup-routes-schema.cjs | 119.63 | 252.48 |
| 100-startup-routes.cjs | 118.99 | 138.98 |
| 1000-startup-routes-schema.cjs | 287.03 | 1025.92 |
| 1000-startup-routes.cjs | 285.64 | 391.88 |
| 10000-startup-routes-schema.cjs | 4852.94 | 11678.68 |
| 10000-startup-routes.cjs | 4578.54 | 5881.08 |
| startup-listen.cjs | 107.42 | 119.21 |
