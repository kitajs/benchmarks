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
* __Node:__ `v20.15.1`
* __Run:__ Mon Jul 22 2024 01:21:24 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.15.1 | ✗      | 46513.6    | 21.00        | 8.29          |
| kita                     | 1.1.36   | ✓      | 45831.2    | 21.31        | 8.22          |
| polka                    | 0.5.2    | ✓      | 45508.8    | 21.47        | 8.12          |
| rayo                     | 1.4.6    | ✓      | 45469.6    | 21.48        | 8.11          |
| fastify                  | 4.28.1   | ✓      | 45435.2    | 21.49        | 8.15          |
| polkadot                 | 1.0.0    | ✗      | 45180.0    | 21.64        | 8.06          |
| 0http                    | 3.5.3    | ✓      | 45093.6    | 21.68        | 8.04          |
| server-base              | 7.1.32   | ✗      | 44824.8    | 21.82        | 7.99          |
| connect                  | 3.7.0    | ✗      | 44688.0    | 21.87        | 7.97          |
| server-base-router       | 7.1.32   | ✓      | 43941.6    | 22.26        | 7.84          |
| connect-router           | 1.3.8    | ✓      | 42616.8    | 22.95        | 7.60          |
| h3                       | 1.12.0   | ✗      | 40948.8    | 23.91        | 7.30          |
| h3-router                | 1.12.0   | ✓      | 40207.2    | 24.38        | 7.17          |
| hono                     | 4.5.1    | ✓      | 39688.8    | 24.69        | 7.08          |
| restana                  | 4.9.9    | ✓      | 37982.4    | 25.83        | 6.77          |
| koa                      | 2.15.3   | ✗      | 35840.8    | 27.39        | 6.39          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33705.6    | 29.15        | 6.01          |
| restify                  | 11.1.0   | ✓      | 33381.0    | 29.45        | 6.02          |
| take-five                | 2.0.0    | ✓      | 33092.2    | 29.71        | 11.90         |
| koa-router               | 12.0.1   | ✓      | 32803.8    | 29.98        | 5.85          |
| hapi                     | 21.3.10  | ✓      | 30910.2    | 31.84        | 5.51          |
| fastify-big-json         | 4.28.1   | ✓      | 11696.4    | 84.93        | 134.58        |
| express                  | 4.19.2   | ✓      | 10538.0    | 94.27        | 1.88          |
| express-with-middlewares | 4.19.2   | ✓      | 9938.6     | 99.98        | 3.70          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
