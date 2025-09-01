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
* __Node:__ `v20.19.4`
* __Run:__ Mon Sep 01 2025 01:42:24 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.4 | ✗      | 48126.4    | 20.30        | 8.58          |
| fastify                  | 4.29.1   | ✓      | 47262.4    | 20.67        | 8.47          |
| polka                    | 0.5.2    | ✓      | 47088.8    | 20.75        | 8.40          |
| kita                     | 1.1.36   | ✓      | 47040.0    | 20.76        | 8.43          |
| connect                  | 3.7.0    | ✗      | 46788.8    | 20.87        | 8.34          |
| rayo                     | 1.4.6    | ✓      | 46608.0    | 20.95        | 8.31          |
| server-base-router       | 7.1.32   | ✓      | 45492.0    | 21.47        | 8.11          |
| polkadot                 | 1.0.0    | ✗      | 45011.2    | 21.72        | 8.03          |
| server-base              | 7.1.32   | ✗      | 44999.2    | 21.73        | 8.02          |
| 0http                    | 3.5.3    | ✓      | 44700.0    | 21.88        | 7.97          |
| h3                       | 1.15.4   | ✗      | 44428.0    | 22.02        | 7.92          |
| h3-router                | 1.15.4   | ✓      | 44084.8    | 22.19        | 7.86          |
| connect-router           | 1.3.8    | ✓      | 43867.2    | 22.29        | 7.82          |
| restana                  | 4.9.9    | ✓      | 39730.4    | 24.67        | 7.09          |
| koa                      | 2.16.2   | ✗      | 38305.6    | 25.59        | 6.83          |
| hono                     | 4.9.5    | ✓      | 37696.8    | 26.02        | 6.18          |
| take-five                | 2.0.0    | ✓      | 35038.6    | 28.04        | 12.60         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34845.6    | 28.19        | 6.21          |
| restify                  | 11.1.0   | ✓      | 34276.8    | 28.67        | 6.18          |
| koa-router               | 12.0.1   | ✓      | 33181.2    | 29.63        | 5.92          |
| hapi                     | 21.4.3   | ✓      | 31921.0    | 30.82        | 5.69          |
| fastify-big-json         | 4.29.1   | ✓      | 11816.6    | 84.05        | 135.95        |
| express                  | 4.21.2   | ✓      | 11134.8    | 89.21        | 1.99          |
| express-with-middlewares | 4.21.2   | ✓      | 10518.2    | 94.50        | 3.91          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
