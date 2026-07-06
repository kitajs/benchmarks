<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.20.2`
* __Run:__ Mon Jul 06 2026 02:50:42 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| server-base-router       | 7.1.32   | ✓      | 55844.0    | 17.40        | 9.96          |
| bare                     | v20.20.2 | ✗      | 55622.4    | 17.48        | 9.92          |
| connect                  | 3.7.0    | ✗      | 54241.6    | 17.93        | 9.67          |
| polka                    | 0.5.2    | ✓      | 54024.0    | 18.02        | 9.63          |
| server-base              | 7.1.32   | ✗      | 54008.0    | 18.02        | 9.63          |
| fastify                  | 4.29.1   | ✓      | 53052.8    | 18.35        | 9.51          |
| rayo                     | 1.4.6    | ✓      | 52865.6    | 18.42        | 9.43          |
| connect-router           | 1.3.8    | ✓      | 52197.6    | 18.66        | 9.31          |
| kita                     | 1.1.36   | ✓      | 52112.8    | 18.69        | 9.34          |
| 0http                    | 3.5.3    | ✓      | 47064.8    | 20.75        | 8.39          |
| polkadot                 | 1.0.0    | ✗      | 45161.6    | 21.65        | 8.05          |
| hono                     | 4.12.27  | ✓      | 44904.8    | 21.77        | 7.37          |
| take-five                | 2.0.0    | ✓      | 43418.4    | 22.53        | 15.61         |
| restana                  | 4.9.9    | ✓      | 42401.6    | 23.09        | 7.56          |
| koa                      | 2.16.4   | ✗      | 42094.4    | 23.26        | 7.51          |
| h3                       | 1.15.11  | ✗      | 41899.2    | 23.37        | 7.47          |
| h3-router                | 1.15.11  | ✓      | 41879.2    | 23.38        | 7.47          |
| restify                  | 11.1.0   | ✓      | 41018.4    | 23.88        | 7.39          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 40120.8    | 24.42        | 7.16          |
| koa-router               | 12.0.1   | ✓      | 39059.2    | 25.10        | 6.97          |
| hapi                     | 21.4.9   | ✓      | 36652.8    | 26.78        | 6.54          |
| express                  | 4.22.2   | ✓      | 13092.8    | 75.80        | 2.33          |
| express-with-middlewares | 4.22.2   | ✓      | 12282.4    | 80.85        | 4.57          |
| fastify-big-json         | 4.29.1   | ✓      | 11797.0    | 84.20        | 135.74        |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
