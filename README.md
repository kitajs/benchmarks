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
* __Node:__ `v20.16.0`
* __Run:__ Mon Aug 12 2024 01:22:09 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.16.0 | ✗      | 46387.2    | 21.06        | 8.27          |
| kita                     | 1.1.36   | ✓      | 46180.0    | 21.14        | 8.28          |
| 0http                    | 3.5.3    | ✓      | 46096.8    | 21.20        | 8.22          |
| fastify                  | 4.28.1   | ✓      | 45880.8    | 21.25        | 8.23          |
| polka                    | 0.5.2    | ✓      | 45755.2    | 21.35        | 8.16          |
| connect                  | 3.7.0    | ✗      | 45260.0    | 21.57        | 8.07          |
| server-base-router       | 7.1.32   | ✓      | 44613.6    | 21.95        | 7.96          |
| rayo                     | 1.4.6    | ✓      | 44541.6    | 21.98        | 7.94          |
| server-base              | 7.1.32   | ✗      | 44455.2    | 22.01        | 7.93          |
| polkadot                 | 1.0.0    | ✗      | 44294.4    | 22.09        | 7.90          |
| connect-router           | 1.3.8    | ✓      | 42227.2    | 23.17        | 7.53          |
| h3-router                | 1.12.0   | ✓      | 40880.8    | 23.96        | 7.29          |
| h3                       | 1.12.0   | ✗      | 40800.8    | 24.01        | 7.28          |
| hono                     | 4.5.5    | ✓      | 39632.2    | 24.72        | 7.07          |
| restana                  | 4.9.9    | ✓      | 37288.8    | 26.31        | 6.65          |
| koa                      | 2.15.3   | ✗      | 36566.4    | 26.83        | 6.52          |
| take-five                | 2.0.0    | ✓      | 35099.8    | 28.02        | 12.62         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34526.2    | 28.45        | 6.16          |
| restify                  | 11.1.0   | ✓      | 33985.8    | 28.93        | 6.13          |
| koa-router               | 12.0.1   | ✓      | 33273.8    | 29.54        | 5.93          |
| hapi                     | 21.3.10  | ✓      | 31490.8    | 31.27        | 5.62          |
| fastify-big-json         | 4.28.1   | ✓      | 11903.6    | 83.44        | 136.95        |
| express                  | 4.19.2   | ✓      | 10812.4    | 91.85        | 1.93          |
| express-with-middlewares | 4.19.2   | ✓      | 10032.6    | 99.06        | 3.73          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
