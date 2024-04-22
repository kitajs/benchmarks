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
* __Node:__ `v20.12.2`
* __Run:__ Mon Apr 22 2024 01:17:27 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0    | ✗      | 47799.2    | 20.42        | 8.52          |
| bare                     | v20.12.2 | ✗      | 47097.6    | 20.73        | 8.40          |
| kita                     | 1.1.36   | ✓      | 46908.0    | 20.81        | 8.41          |
| fastify                  | 4.26.2   | ✓      | 46241.6    | 21.12        | 8.29          |
| connect                  | 3.7.0    | ✗      | 45583.2    | 21.42        | 8.13          |
| polka                    | 0.5.2    | ✓      | 45456.0    | 21.50        | 8.11          |
| restana                  | 4.9.9    | ✓      | 45202.4    | 21.63        | 8.06          |
| rayo                     | 1.4.6    | ✓      | 45017.6    | 21.72        | 8.03          |
| server-base              | 7.1.32   | ✗      | 44805.6    | 21.83        | 7.99          |
| 0http                    | 3.5.3    | ✓      | 44248.0    | 22.11        | 7.89          |
| h3                       | 1.11.1   | ✗      | 44148.8    | 22.15        | 7.87          |
| server-base-router       | 7.1.32   | ✓      | 44065.6    | 22.19        | 7.86          |
| connect-router           | 1.3.8    | ✓      | 42949.6    | 22.77        | 7.66          |
| h3-router                | 1.11.1   | ✓      | 41501.6    | 23.59        | 7.40          |
| hono                     | 4.2.6    | ✓      | 39449.6    | 24.85        | 7.04          |
| koa                      | 2.15.3   | ✗      | 36535.0    | 26.86        | 6.52          |
| take-five                | 2.0.0    | ✓      | 34777.6    | 28.27        | 12.50         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34600.2    | 28.41        | 6.17          |
| restify                  | 11.1.0   | ✓      | 33896.2    | 29.00        | 6.11          |
| koa-router               | 12.0.1   | ✓      | 33703.6    | 29.17        | 6.01          |
| hapi                     | 21.3.9   | ✓      | 31561.6    | 31.18        | 5.63          |
| fastify-big-json         | 4.26.2   | ✓      | 11647.6    | 85.28        | 134.01        |
| express                  | 4.19.2   | ✓      | 10819.8    | 91.85        | 1.93          |
| express-with-middlewares | 4.19.2   | ✓      | 10137.2    | 98.06        | 3.77          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
